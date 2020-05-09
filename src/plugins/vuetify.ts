import Vue from 'vue';
import Vuetify from 'vuetify/lib';

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    themes: {
      light: {
        primary: '#62CFBB',
        success: '#009688',
        warning: '#FBD341',
        danger: '#F76D6D',
      },
      dark: {
        primary: '#62CFBB',
        success: '#009688',
        warning: '#FBD341',
        danger: '#F76D6D',
      },
    },
  },
});
