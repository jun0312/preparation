// eslint-disable-next-line import/no-extraneous-dependencies
import '@fortawesome/fontawesome-free/css/all.css';
import Vue from 'vue';
import Vuetify from 'vuetify/lib';

Vue.use(Vuetify);

export default new Vuetify({
  icons: {
    iconfont: 'fa',
  },
  theme: {
    themes: {
      light: {
        danger: '#F76D6D',
        primary: '#62CFBB',
        success: '#009688',
        warning: '#FBD341',
        secondary: '#ACACAC',
      },
      dark: {
        danger: '#F76D6D',
        primary: '#62CFBB',
        success: '#009688',
        warning: '#FBD341',
        secondary: '#ACACAC',
      },
    },
  },
});
