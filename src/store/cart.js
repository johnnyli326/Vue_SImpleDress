import axios from 'axios';

export default {
  namespaced: true,
  strict: true,
  state: {
    cart: [],
    finalTotal: '',
  },
  actions: {
    getCart(context) {
      const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/cart`;
      return new Promise(() => {
        axios.get(api).then((response) => {
          console.log(response.data.data);
          if (response.data.data) {
            context.commit('CART', response.data.data.carts);
            context.commit('FINALTOTAL', response.data.data.final_total);
          }
        });
      });
    },
    addtoCart(context, { id, qty }) {
      const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/cart`;
      const cart = {
        product_id: id,
        qty,
      };
      return new Promise((resolve, reject) => {
        // 開啟loading效果
        context.commit('LOADINGITEM', id, { root: true });
        axios.post(api, { data: cart }).then((response) => {
          if (response.data.success) {
            context.dispatch('getCart');
            resolve();
            context.dispatch('alertModules/updateMessage', { message: response.data.message, status: 'success' }, { root: true });
          } else {
            reject();
            context.dispatch('alertModules/updateMessage', { message: response.data.message }, { root: true });
          }
          // 關閉loading效果
          context.commit('LOADINGITEM', '', { root: true });
        });
      });
    },
    removeCart(context, id) {
      const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/cart/${id}`;
      context.commit('LOADINGITEM', id, { root: true });
      axios.delete(api).then((response) => {
        context.dispatch('getCart');
        context.commit('LOADINGITEM', '', { root: true });
        context.dispatch('alertModules/updateMessage', { message: response.data.message }, { root: true });
      });
    },
  },
  /* eslint no-param-reassign: "error" */
  mutations: {
    CART(state, payload) {
      state.cart = payload;
    },
    FINALTOTAL(state, payload) {
      state.finalTotal = payload;
    },
  },
  getters: {
    carts(state) {
      return state.cart;
    },
    finalTotal(state) {
      return state.finalTotal;
    },
  },
};
