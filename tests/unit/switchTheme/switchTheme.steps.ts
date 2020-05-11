import { defineFeature, loadFeature } from 'jest-cucumber';
import { shallowMount, createLocalVue } from '@vue/test-utils';
import Vuex from 'vuex';
import Home from '@/views/Home.vue';

const feature = loadFeature('tests/unit/switchTheme/switchTheme.feature');

const localVue = createLocalVue();
localVue.use(Vuex);

const colors = {
  namespaced: true,
  state: {
    blocks: [
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
    ],
  },
  mutations: {
    SWITCH_COLOR(state: any, payload: any) {
      const res = state.blocks.find((item: any) => item.value === payload.selectBlock);
      res.color = payload.selectColor;
    },
    RESET_COLOR(state: any) {
      // vuetify.framework.theme.dark = false;
      state.blocks.forEach((item: any, index: any) => {
        const i = item;
        if (!index) {
          i.color = '#FFFFFF';
        } else if (item.value === 'list') {
          i.color = '#009688';
        } else if (item.value === 'card') {
          i.color = '#62CFBB';
        } else {
          i.color = 'primary';
        }
      });
    },
  },
  getters: {
    blocks: (state: any) => state.blocks,
  },
};

const store = new Vuex.Store({
  modules: { colors },
});

let $vuetify;
let wrapper: any;

defineFeature(feature, (test) => {
  test('切換系統主題為深色模式', ({ given, when, then }) => {
    given('系統預設主題色為淺色', () => {
      $vuetify = {
        theme: {
          dark: false,
        },
      };

      wrapper = shallowMount(Home, {
        store,
        localVue,
        mocks: $vuetify,
      });
    });

    when('用戶點擊切換主題按鈕', () => {
      wrapper.find('#switchTheme').trigger('click');
    });

    then('主題色變為深色', () => {
      wrapper.vm.$vuetify.theme.dark = !wrapper.vm.$vuetify.theme.dark;
      expect(wrapper.vm.$vuetify.theme.dark.valueOf()).toBe(true);
    });
  });
});
