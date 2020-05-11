import Vue from 'vue';
import Vuex from 'vuex';

// Modules
import colors from './modules/colors';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: { colors },
});
