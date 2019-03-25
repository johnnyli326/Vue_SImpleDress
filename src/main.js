import Vue from 'vue';
import VeeValidate from 'vee-validate';
import zhTWValidte from 'vee-validate/dist/locale/zh_TW';
import axios from 'axios';
import VueAxios from 'vue-axios';
import Loading from 'vue-loading-overlay';
import Vuex from 'vuex';
import App from './App.vue';
import router from './router';
import store from './store/index';
import 'bootstrap';
import 'vue-loading-overlay/dist/vue-loading.css';
import currencyFilter from './filters/currency';
import timestampFormat from './filters/timestampFormat';
// import './bus';
Vue.config.productionTip = false;
Vue.use(VueAxios, axios);
Vue.component('Loading', Loading);
Vue.use(VeeValidate);
Vue.use(Vuex);
VeeValidate.Validator.localize('zh_TW', zhTWValidte);
axios.defaults.withCredentials = true;
Vue.filter('currency', currencyFilter);
Vue.filter('timeFormat', timestampFormat);
new Vue({
  router,
  store,
  render: h => h(App),
  mounted() {
    document.dispatchEvent(new Event('render-event'));
  },
}).$mount('#app');
// Navigation Guards
router.beforeEach((to, from, next) => {
  // console.log('to', to, 'from', from, 'next', next);
  if (to.meta.requiresAuth) { // 要到達的頁面(to)，如果有requiresAuth，會被Guards擋住
    // console.log('這裡需要驗證');
    const api = `${process.env.VUE_APP_APIPATH}/api/user/check`;
    axios.post(api).then((response) => {
      // console.log(response.data);
      if (response.data.success) {
        next();
      } else {
        next({ path: '/login' });
      }
    });
  } else { // 要達到的頁面(to)，如果沒有requiresAuth，直接next().
    next();
  }
});
