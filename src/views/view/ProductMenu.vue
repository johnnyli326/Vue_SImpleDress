<template>
  <div class="container mt-5">
    <h2 class="subTitle">ALL 全部商品</h2>
    <div class="row">
      <div class="col-md-3 my-3 d-flex justify-content-center" v-for="item in products"
      :key="item.id" onchange="location.reload()">
        <div class="card border-0" style="width: 222px;">
          <img :src="item.imageUrl" class="card-img-top" alt="..."
          style="height: 309.3px" @click="ProductDetail(item.id)">
          <div class="card-body text-center">
            <p class="mb-0">{{ item.title }}</p>
            <div>
              <span class="text-center priceText" v-if="item.origin_price == item.price">
                NT.{{ item.origin_price }}
              </span>
              <span class="mr-2 priceText" v-if="item.origin_price !== item.price"
                style="text-decoration:line-through">
                NT.{{ item.origin_price }}
              </span>
              <span v-if="item.origin_price !== item.price" class="text-danger priceText">
                NT.{{ item.price }}
              </span>
            </div>
            <div>
              <ul class="nav justify-content-center mt-1">
                <li class="nav-item mr-2">
                  <div style="width:12px; height:12px;border-radius:50%;
                  background-color: black; border: 1px solid black;">
                  </div>
                </li>
                <li class="nav-item mr-2">
                  <div style="width:12px; height:12px;border-radius: 50%;
                  background-color: gray; border: 1px solid black;">
                  </div>
                </li>
                <li class="nav-item mr-2">
                  <div style="width:12px; height:12px;border-radius: 50%;
                  background-color: pink; border: 1px solid black;">
                  </div>
                </li>
                <li class="nav-item mr-2">
                  <div style="width:12px; height:12px;border-radius: 50%;
                  background-color: blue; border: 1px solid black;">
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Pagination class="d-flex justify-content-center"
    :pageData="pagination" @changepage="getProducts"></Pagination>
  </div>
</template>
<script>
import { mapGetters } from 'vuex';
import Pagination from '../../components/view/Pagination.vue';

export default {
  name: 'ProductMenu',
  components: { Pagination },
  data() {
    return {};
  },
  methods: {
    getProducts(page = 1) {
      this.$store.dispatch('productsModules/getProducts', page);
    },
    ProductDetail(productId) {
      this.$store.dispatch('productsModules/getProductDetail', productId);
    },
  },
  computed: {
    ...mapGetters('productsModules', ['products', 'pagination']),
  },
  created() {
    const vm = this;
    vm.getProducts();
  },
};
</script>
<style lang="scss" scoped>
.nav-item:hover {
  cursor: pointer;
}
.priceText {
  font-weight: 400;
  font-size: 12px
}
.card-img-top {
  cursor: pointer;
}
.card {
  box-shadow: 1px 2px 10px gray;
  &:hover {
    box-shadow: 1px 2px 5px gray;
  }
}
.subTitle {
  text-align: center;
  margin: 30px 0px;
  color: rgb(199, 171, 58);
}
</style>
