import { shallowMount } from '@vue/test-utils';
import Home from '@/views/Home.vue';

const $vuetify = {
  theme: {
    dark: false,
  },
};

describe('Home', () => {
  it('switch theme', () => {
    const wrapper = shallowMount(Home, {
      mocks: $vuetify,
    });

    wrapper.find('#switchTheme').trigger('click');

    wrapper.vm.$vuetify.theme.dark = !wrapper.vm.$vuetify.theme.dark;

    expect(wrapper.vm.$vuetify.theme.dark.valueOf()).toBe(true);
  });
});
