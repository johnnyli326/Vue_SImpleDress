import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/views/view/Home.vue';

Vue.use(Router);
export default new Router({
  routes: [{
    path: '*',
    redirect: '/Home',
  }, {
    path: '/',
    name: 'Dashboard',
    component: () => import('./components/view/Dashboard.vue'),
    children: [{
      path: 'productmenu',
      name: 'productmenu',
      component: () => import('./views/view/ProductMenu.vue'),
    }, {
      path: 'productmenu/men',
      name: 'Men',
      component: () => import('./views/view/Men.vue'),
    }, {
      path: 'productmenu/women',
      name: 'Women',
      component: () => import('./views/view/Women.vue'),
    }, {
      path: 'productmenu/kid',
      name: 'Kid',
      component: () => import('./views/view/Kid.vue'),
    }, {
      path: 'productmenu/sale',
      name: 'Sale',
      component: () => import('./views/view/Sale.vue'),
    }, {
      path: 'product/:productId',
      name: 'product',
      component: () => import('./views/view/Product.vue'),
    }, {
      path: 'cart',
      name: 'cart',
      component: () => import('./views/view/Cart.vue'),
    }, {
      path: 'order',
      name: 'order',
      component: () => import('./views/view/Order.vue'),
    }, {
      path: 'checkout/:orderId',
      name: 'checkout',
      component: () => import('./views/view/Checkout.vue'),
    }, {
      path: 'Home',
      name: 'Home',
      component: Home,
    }],
  }, {
    path: '/login',
    name: 'Login',
    component: () => import('./views/back/Login.vue'),
  }, {
    path: '/admin',
    name: 'BackDashboard',
    component: () => import('./components/back/Dashboard.vue'),
    meta: { requiresAuth: true },
    children: [{
      path: 'products',
      name: 'Products',
      component: () => import('./views/back/Products.vue'),
      meta: { requiresAuth: true },
    }, {
      path: 'orders',
      name: 'Orders',
      component: () => import('./views/back/Orders.vue'),
      meta: { requiresAuth: true },
    }, {
      path: 'coupon',
      name: 'Coupon',
      component: () => import('./views/back/Coupon.vue'),
      meta: { requiresAuth: true },
    }],
  }, {
    path: '/',
    name: 'BackDashboard',
    component: () => import('./components/back/Dashboard.vue'),
    children: [{
      path: 'customer_order',
      name: 'CustomerOrder',
      component: () => import('./views/back/CustomerOrder.vue'),
    }, {
      path: 'customer_checkout/:orderId',
      name: 'CustomerCheckout',
      component: () => import('./views/back/CustomerCheckout.vue'),
    }],
  }],
});
