<template>
  <div>
    <div class="container my-4">
      <h2 class="text-center my-3">購物車列表</h2>
      <div class="table-responsive">
        <table class="table table-sm table-striped">
          <tbody>
            <tr class="bg-secondary text-white">
              <th class="text-center" width="10%">刪除</th>
              <th  class="text-left">商品名稱</th>
              <th>數量</th>
              <th class="text-center">小計</th>
            </tr>
            <tr v-for="item in carts" :key="item.id">
              <td class="align-middle text-center" width="20%">
                <button class="btn" @click="removeCart(item.id)">
                  <i class="fas fa-spinner fa-spin" v-if="loadingItem === item.id"></i>
                  <i class="far fa-trash-alt text-secondary"></i>
                </button>
              </td>
              <td class="text-left">
                <a href="#" class="btn btn-link p-0" @click.prevent="ProductDetail(item.product_id)">
                  <img class="small" :src="item.product.imageUrl" alt="">
                  <div>{{ item.product.title }}</div>
                </a>
                <div class="text-success" v-if="item.coupon">
                  已套用優惠卷
                </div>
              </td>
              <td class="pt-2">{{ item.qty }} / {{ item.product.unit }}</td>
              <td>
                <div class="pt-2 text-right text-danger" :class="{'coupon': item.coupon}">
                  {{ item.total | currency }}
                </div>
                <div class="pt-2 text-right text-success" v-if="item.coupon">
                  {{ item.final_total | currency }}
                </div>
              </td>            
            </tr>
            <tr>
              <td colspan="3" class="text-right">合計</td>
              <td class="text-right">
                {{ finalTotal | currency }}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <!-- 套用優惠卷 -->
      <div class="row justify-content-center">
        <div class="col-md-6">
          <div class="input-group mb-2">
            <input type="text" class="form-control" placeholder="輸入'coupon'，即可享有50%優惠唷！"  v-model="coupon_code">
            <div class="input-group-append">
              <button class="btn btn-outline-dark" @click="addCouponCode(coupon_code)">
                套用優惠卷
              </button>
            </div>
          </div>
        </div>
      </div>
      <div class="d-flex justify-content-center">
        <router-link to="order" class="btn btn-block btn-primary my-4 btn-checkout">
          前往結帳
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import router from '../../router';

export default {
  data() {
    return {
      coupon_code: '',
    };
  },
  methods: {
    ...mapActions('cartModules', ['getCart']),
    removeCart(id) {
      this.$store.dispatch('cartModules/removeCart', id);
    },
    addCouponCode() {
      this.$store.dispatch('couponModules/addCouponCode', { code: this.coupon_code });
    },
    ProductDetail(productId) {
      this.$store.dispatch('productsModules/getProductDetail', productId);
    },
  },
  computed: {
    ...mapGetters('cartModules', ['carts', 'finalTotal', 'originalTotal']),
    ...mapGetters(['loadingItem']),
  },
  watch: {
    carts: (val) => {
      if (val.length === 0) {
        alert('目前購物車沒有任何商品!');
        router.push('Home');
      }
    },
    coupon: (val) => {
      if (ifCoupon) {
        
      }
    }
  },
  created() {
    const vm = this;
    vm.getCart();
  },
};
</script>

<style lang="scss">
  .small {
    width: 50px;
  }
  .btn-checkout {
    width: 150px;
  }
  input::-webkit-input-placeholder {
    color: rgba(48, 43, 47, 0.500) !important;
  }
  .coupon {
    text-decoration: line-through double gray;
  }
</style>
