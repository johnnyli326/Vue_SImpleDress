/* eslint no-param-reassign: "error" */
import axios from 'axios';
import router from '../router';

export default {
  namespaced: true,
  strict: true,
  state: {
    order: {
      user: {
        user: {}, // 因為有另一層，所以一開始讀取不到，會出錯。
      },
    },
  },
  actions: {
    createOrder(context, form) {
      const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/order`;
      context.commit('LOADING', true, { root: true });
      axios.post(api, { data: form }).then((response) => {
        if (response.data.success) { // 跳到checkout頁面
          router.push(`/checkout/${response.data.orderId}`);
        }
      });
      context.commit('LOADING', false, { root: true });
    },
    getOrder(context, orderId) {
      const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/order/${orderId}`;
      context.commit('LOADING', true, { root: true });
      axios.get(api).then((response) => {
        context.commit('GETORDER', response.data.order);
        context.commit('LOADING', false, { root: true });
      });
    },
    payOrder(context, orderId) {
      const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/pay/${orderId}`;
      context.commit('LOADING', true, { root: true });
      axios.post(api).then((response) => {
        if (response.data.success) {
          context.dispatch('getOrder', orderId);
          context.commit('LOADING', false, { root: true });
          context.dispatch('alertModules/updateMessage', { message: response.data.message, status: 'success' }, { root: true });
        }
      });
    },
  },
  mutations: {
    GETORDER(state, payload) {
      state.order = payload;
    },
  },
  getters: {
    order(state) {
      return state.order;
    },
  },
};
