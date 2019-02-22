import Vue from 'vue';
import Vuex from 'vuex';
import productsModules from './products';

Vue.use(Vuex);
export default new Vuex.Store({
  strict: true, // 嚴謹模式
  state: {
    isLoading: false,
  },
  actions: { // 操作行為
    updateLoading(context, status) {
      context.commit('LOADING', status);
    },
  },
  /* eslint no-param-reassign: "error" */
  mutations: { // 實際操作狀態
    LOADING(state, status) {
      state.isLoading = status;
    },
  },
  getters: {
    isLoading(state) {
      return state.isLoading;
    },
  },
  modules: {
    productsModules,
  },
});
