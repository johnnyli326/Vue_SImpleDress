import axios from 'axios';

export default {
  namespaced: true,
  strict: true,
  state: {},
  actions: {
    addCouponCode(context, couponCode) {
      const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/coupon`;
      return new Promise((resolve, reject) => {
        context.commit('LOADING', true, { root: true });
        // data和coupn都是obj
        axios.post(api, { data: couponCode }).then((response) => {
          if (response.data.success) {
            context.dispatch('alertModules/updateMessage', {
              message: response.data.message,
              status: 'success',
            }, { root: true });
            context.dispatch('cartModules/getCart', null, { root: true });
            resolve();
          } else {
            context.dispatch('alertModules/updateMessage', {
              message: response.data.message,
            }, { root: true });
            reject();
          }
          context.commit('LOADING', false, { root: true });
        });
      });
    },
  },
  /* eslint no-param-reassign: "error" */
  mutations: {},
  getters: {},
};
