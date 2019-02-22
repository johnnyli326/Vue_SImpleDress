import axios from 'axios';

export default {
  namespaced: true,
  state: {
    products: [],
    pagination: {},
  },
  actions: {
    getProducts(context, page) {
      const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/products?page=${page}`;
      context.commit('LOADING', true);
      axios.get(api).then((response) => {
        window.scrollTo(0, 0);
        context.commit('PRODUCTS', response.data.products);
        context.commit('PAGINATION', response.data.pagination);
        context.commit('LOADING', false);
      });
    },
  },
  /* eslint no-param-reassign: "error" */
  mutations: {
    PRODUCTS(state, payload) {
      state.products = payload;
    },
    PAGINATION(state, payload) {
      state.pagination = payload;
    },
  },
  getters: {
    products(state) {
      return state.products;
    },
    pagination(state) {
      return state.pagination;
    },
  },
};
