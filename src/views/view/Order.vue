<template>
  <div>
    <div class="container my-5">
      <h2 class="text-center">結帳</h2>
      <div class="row my-3">
        <div class="col-md-4 text-center">
          <div class="alert alert-success rounded-pill">Step 1:請填寫基本資料</div>
        </div>
        <div class="col-md-4 text-center">
          <div class="alert alert-white rounded-pill">Step 2:金流付款</div>
        </div>
        <div class="col-md-4 text-center">
          <div class="alert alert-white rounded-pill">Step 3:完成</div>
        </div>
      </div>
      <div id="accordionExample">
        <div class="card">
          <div class="card-header" id="headingOne">
            <h3 class="mb-0">
              <button class="btn btn-link text-center"
              type="button" data-toggle="collapse"
              data-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne">
                顯示購物車細節
              </button>
            </h3>
          </div>
          <div id="collapseOne" class="collapse"
          aria-labelledby="headingOne"
          data-parent="#accordionExample">
            <div class="card-body">
              <div class="table-responsive">
                <table class="table table-sm table-striped">
                  <tbody>
                    <tr>
                      <th>商品名稱</th>
                      <th>數量</th>
                      <th class="text-center">小計</th>
                    </tr>
                    <tr v-for="item in carts" :key="item.id">
                      <td class="text-left">
                        <a href="#" @click.prevent="ProductDetail(item.product_id)"
                        class="btn btn-link">
                          <img class="small mr-3" :src="item.product.imageUrl" alt="">
                          <div>{{ item.product.title }}</div>
                        </a>
                        <div class="text-success pl-3" v-if="item.coupon">
                          已套用優惠卷
                        </div>
                      </td>
                      <td class="pt-2">{{ item.qty }}{{ item.product.unit }}</td>
                      <td class="pt-2 text-right text-danger">{{ item.final_total | currency }}</td>
                    </tr>
                    <tr>
                      <td colspan="2" class="text-right">合計</td>
                      <td class="text-right text-danger">{{ finalTotal | currency }}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
      <h3 class="text-center mt-5">訂購人資訊</h3>
      <div class="row justify-content-center">
        <div class="col-md-8 border p-4">
          <form action=""  @submit.prevent="createOrder(form)">
            <div class="form-row">
              <div class="form-group col-md-6">
                <label for="name">姓名 Name</label>
                <input type="text" class="form-control" id="name"
                name="name" placeholder="請輸入真實姓名"
                v-model="form.user.name"
                v-validate="'required'" :class="{'is-invalid':errors.has('name')}">
                <div class="text-danger" v-if="errors.has('name')">姓名欄不得留空</div>
              </div>
              <div class="form-group col-md-6">
                <label for="tel">電話</label>
                <input type="text" class="form-control"
                name="tel" id="tel"
                placeholder="請輸入聯絡電話"
                v-model="form.user.tel"
                v-validate="'required'" :class="{'is-invalid':errors.has('tel')}">
                <div class="text-danger" v-if="errors.has('tel')">電話欄不得留空</div>
              </div>
              <div class="form-group col-md-12">
                <label for="email">E-mail</label>
                <input type="text" class="form-control"
                id="email"
                name="email"
                placeholder="請輸入電子信箱"
                v-model="form.user.email"
                v-validate="'required|email'"
                :class="{'is-invalid':errors.first('email')}">
                <div class="text-danger" v-if="errors.first('email')">
                  {{ errors.first('email') }}
                </div>
              </div>
              <div class="form-group col-md-12">
                <label for="address">地址 Address</label>
                <input type="text" class="form-control"
                id="address" name="address" placeholder="請輸入地址"
                v-model="form.user.address" v-validate="'required'">
                <div class="text-danger" v-if="errors.has('address')">地址欄不得留空</div>
              </div>
            </div>
            <div class="text-right mr-2">
              <router-link class="btn btn-secondary mr-3" to="/productmenu">
                繼續選購
              </router-link>
              <button class="btn btn-primary">確認送出</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  data() {
    return {
      form: {
        user: {
          name: '',
          email: '',
          tel: '',
          address: '',
        },
        message: '這是留言',
      },
    };
  },
  methods: {
    ...mapActions('cartModules', ['getCart']),
    // 建立訂單
    createOrder(form) {
      const vm = this;
      // // 欄位不可為空
      vm.$validator.validate().then((result) => {
        if (result) {
          vm.$store.dispatch('orderModules/createOrder', { user: form });
        }
      });
    },
    ProductDetail(productId) {
      this.$store.dispatch('productsModules/getProductDetail', productId);
    },
  },
  computed: {
    ...mapGetters('cartModules', ['carts', 'finalTotal']),
  },
  created() {
    const vm = this;
    vm.getCart();
  },
};
</script>

<style scoped>
  .small {
    width: 50px;
  }
</style>
