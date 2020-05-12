import { defineFeature, loadFeature } from 'jest-cucumber';
import { shallowMount, createLocalVue } from '@vue/test-utils';

import Vuex from 'vuex';

import ColorPicker from '@/components/ColorPicker.vue';

const feature = loadFeature('tests/unit/switchColor/switchColor.feature');

const localVue = createLocalVue();

localVue.use(Vuex);

const blockColor = [
  {
    zh: '系統底色',
    value: 'background',
    color: '#FFFFFF',
  },
  {
    zh: '功能選單',
    value: 'list',
    color: '#009688',
  },
  {
    zh: '內容框（標題列）',
    value: 'card',
    color: '#62CFBB',
  },
  {
    zh: '按鈕',
    value: 'button',
    color: 'primary',
  },
];

const colors = {
  namespaced: true,
  state: {
    blocks: blockColor,
  },
  mutations: {
    SWITCH_COLOR(state: any, payload: any) {
      const res = state.blocks.find((item: any) => item.value === payload.selectBlock);
      res.color = payload.selectColor;
    },
  },
};

const store = new Vuex.Store({
  modules: { colors },
});

let wrapper: any;

defineFeature(feature, (test) => {
  test('用戶希望切換特定區塊的背景色', ({ given, when, then }) => {
    wrapper = shallowMount(ColorPicker, {
      store,
      localVue,
      propsData: {
        blockColor,
      },
    });

    given(/^用戶選擇要切換的組件為 (.*)$/, (block) => {
      wrapper.vm.selectBlock = block;
    });

    when(/^用戶透過顏色選擇器選擇 (.*)$/, (color) => {
      wrapper.vm.selectColor = color;
    });

    when('用戶按下確認', async () => {
      const { selectColor, selectBlock } = wrapper.vm;
      wrapper.find('#confirm').trigger('click');
      wrapper.vm.SWITCH_COLOR({ selectColor, selectBlock });
    });

    then(/^(.*) 的背景色應該要變為 (.*)$/, (block, color) => {
      const target: any = blockColor.find((item) => item.value === block);
      expect(target.color).toBe(color);
    });
  });
});
