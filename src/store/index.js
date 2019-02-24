import Vue from 'vue';
import Vuex from 'vuex';
import productsModules from './products';
import cartModules from './cart';
import alertModules from './alert';
import couponModules from './coupon';
import orderModules from './order';

Vue.use(Vuex);
export default new Vuex.Store({
  strict: true, // 嚴謹模式
  state: {
    isLoading: false,
    status: {
      loadingItem: '',
    },
  },
  actions: { // 操作行為
    updateLoading(context, status) {
      context.commit('LOADING', status);
    },
    updateLoadingItem(context, status) {
      context.commit('LOADINGITEM', status);
    },
  },
  /* eslint no-param-reassign: "error" */
  mutations: { // 實際操作狀態
    LOADING(state, status) {
      state.isLoading = status;
    },
    LOADINGITEM(state, payload) {
      state.status.loadingItem = payload;
    },
  },
  getters: {
    isLoading(state) {
      return state.isLoading;
    },
    loadingItem(state) {
      return state.status.loadingItem;
    },
  },
  modules: {
    productsModules,
    cartModules,
    alertModules,
    couponModules,
    orderModules,
  },
});
