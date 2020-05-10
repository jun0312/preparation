import { defineFeature, loadFeature } from 'jest-cucumber';
import { shallowMount } from '@vue/test-utils';
import Home from '@/views/Home.vue';

const feature = loadFeature('tests/unit/switchTheme/switchTheme.feature');

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
