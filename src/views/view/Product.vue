<template>
  <div class="container my-5">
    <div class="row">
      <div class="col-md mb-3">
        <img :src="Product.imageUrl" class="product-img" alt="">
      </div>
      <div class="col-md">
        <h2>{{ Product.title }}</h2>
        <small>商品編號：{{ Product.id }}</small>
        <hr>
        <p class="text-danger text-right" style="font-size:49px;"
        v-if="Product.price == Product.origin_price">
          NT.{{ Product.price | currency }}
        </p>
        <p class="text-right" style="text-decoration: line-through"
        v-if="Product.price !== Product.origin_price">
          NT.{{ Product.origin_price | currency }}
        </p>
        <p class="text-danger text-right" style="font-size:49px;"
        v-if="Product.price !== Product.origin_price">
          NT.{{ Product.price | currency }}
        </p>
        <div>
          <div class="product-color bg-white"></div>
          <div class="product-color bg-secondary"></div>
          <div class="product-color bg-dark"></div>
          <div class="product-color bg-danger"></div>
        </div>
        <div class="d-flex justify-content-start my-3">
          <div class="product-size bg-secondary text-white rounded-circle">S</div>
          <div class="product-size bg-secondary text-white rounded-circle">M</div>
          <div class="product-size bg-secondary text-white rounded-circle">L</div>
          <div class="product-size bg-secondary text-white rounded-circle">XL</div>
        </div>
        <select class="form-control" v-model="qtySelect">
          <option v-for="num in 10" :value="num" :key="num">
            選購 {{ num }} {{Product.unit}}
          </option>
        </select>
        <div class="mt-3 d-flex justify-content-between">
          <span class="text-danger">總計 NT. {{Product.price * qtySelect | currency }}</span>
          <button type="button" class="btn btn-outline-danger btn-sm ml-auto"
          @click="addtoCart(Product.id, qtySelect)">
            <i class="fas fa-spinner fa-spin" v-if="loadingItem === Product.id"></i>
            加到購物車
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import $ from 'jquery';

export default {
  name: 'Product',
  data() {
    return {
      qtySelect: 1,
      color: '',
      size: '',
    };
  },
  methods: {
    getProduct(id) {
      this.$store.dispatch('productsModules/getProduct', id);
    },
    addtoCart(id, qty = 1) {
      this.$store.dispatch('cartModules/addtoCart', { id, qty });
    },
  },
  computed: {
    ...mapGetters('productsModules', ['Product']),
    ...mapGetters(['loadingItem']),
  },
  created() {
    const vm = this;
    vm.getProduct(this.$route.params.productId);
  },
  mounted() { // 選取商品顏色、尺寸
    $(document).ready(() => {
      // 商品顏色
      $('.product-color').click((e) => {
        $(e.target).addClass('active').siblings().removeClass('active');
      });
      // 商品尺寸
      $('.product-size').click((e) => {
        $(e.target).addClass('active').siblings().removeClass('active');
      });
    });
  },
};
</script>

<style lang="scss" scoped>
@import "../../assets/mixin";
hr {
  background-color: black;
}
.product-color {
  width: 36px;
  height: 36px;
  border: 0.5px solid black;
  display: inline-block;
  margin-right: 10px;
  &:hover {
    cursor: pointer;
  }
}
.product-size {
  width:36px;
  height: 36px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 10px;
  border: 1px solid black;
  &:hover {
    cursor: pointer;
  }
}
.active {
  border-width: 2px;
}
.product-img {
  width:430px;
  @include ipad() {
    width: 100%;
    height: auto;
  }
}
</style>
