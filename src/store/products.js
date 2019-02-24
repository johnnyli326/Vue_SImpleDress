import axios from 'axios';
import router from '../router';

export default {
  namespaced: true,
  strict: true,
  state: {
    products: [],
    pagination: {},
    WomenProduct: [],
    SaleProduct: [],
    MenProduct: [],
    KidProduct: [],
    product: [],
  },
  actions: {
    getProducts(context, page) {
      const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/products?page=${page}`;
      context.commit('LOADING', true, { root: true });
      axios.get(api).then((response) => {
        window.scrollTo(0, 0);
        context.commit('PRODUCTS', response.data.products);
        context.commit('PAGINATION', response.data.pagination);
        context.commit('LOADING', false, { root: true });
      });
    },
    getWomenProduct(context) {
      const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/products/all`;
      const WomenProduct = [];
      context.commit('LOADING', true, { root: true });
      axios.get(api).then((response) => {
        response.data.products.forEach((item) => {
          if (item.category.includes('Women')) WomenProduct.push(item);
        });
        context.commit('WomenProduct', WomenProduct);
        context.commit('LOADING', false, { root: true });
      });
    },
    getSaleProduct(context) {
      const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/products/all`;
      const SaleProduct = [];
      context.commit('LOADING', true, { root: true });
      axios.get(api).then((response) => {
        response.data.products.forEach((item) => {
          if (item.category.includes('Sale')) SaleProduct.push(item);
        });
        context.commit('SaleProduct', SaleProduct);
        context.commit('LOADING', false, { root: true });
      });
    },
    getMenProduct(context) {
      const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/products/all`;
      const MenProduct = [];
      context.commit('LOADING', true, { root: true });
      axios.get(api).then((response) => {
        response.data.products.forEach((item) => {
          if (item.category.includes('Men')) MenProduct.push(item);
        });
        context.commit('MenProduct', MenProduct);
        context.commit('LOADING', false, { root: true });
      });
    },
    getKidProduct(context) {
      const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/products/all`;
      const KidProduct = [];
      context.commit('LOADING', true, { root: true });
      axios.get(api).then((response) => {
        response.data.products.forEach((item) => {
          if (item.category.includes('Kid')) KidProduct.push(item);
        });
        context.commit('KidProduct', KidProduct);
        context.commit('LOADING', false, { root: true });
      });
    },
    getProduct(context, id) {
      const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/product/${id}`;
      context.commit('LOADING', true, { root: true });
      window.scrollTo(0, 0);
      axios.get(api).then((response) => {
        context.commit('PRODUCT', response.data.product);
        context.commit('LOADING', false, { root: true });
      });
    },
    getProductDetail(context, productId) {
      router.push({ path: `/product/${productId}` });
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
    WomenProduct(state, payload) {
      state.WomenProduct = payload;
    },
    SaleProduct(state, payload) {
      state.SaleProduct = payload;
    },
    MenProduct(state, payload) {
      state.MenProduct = payload;
    },
    KidProduct(state, payload) {
      state.KidProduct = payload;
    },
    PRODUCT(state, payload) {
      state.product = payload;
    },
  },
  getters: {
    products(state) {
      return state.products;
    },
    pagination(state) {
      return state.pagination;
    },
    WomenProduct(state) {
      return state.WomenProduct;
    },
    SaleProduct(state) {
      return state.SaleProduct;
    },
    MenProduct(state) {
      return state.MenProduct;
    },
    KidProduct(state) {
      return state.KidProduct;
    },
    Product(state) {
      return state.product;
    },
  },
};
