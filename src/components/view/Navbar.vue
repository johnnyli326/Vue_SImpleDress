<template>
  <div>
    <nav class="navbar navbar-expand-lg p-0 navbar-default m-0 fixed-top" role="navigation">
      <button class="navbar-toggler ml-auto mr-4" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <i class="fas fa-bars text-white"></i>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item">
            <router-link class="nav-link pr-3" to="/login"><i class="fas fa-cog mr-2"></i>後台管理</router-link>
          </li>
          <li class="nav-item" :class="{'active':['cart'].indexOf($route.name) !== -1}">
            <router-link class="nav-link pr-3" to="/cart">
              <i class="fas fa-cart-plus mr-2"></i>
              購物車 ( {{ carts.length }} )
            </router-link>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import $ from 'jquery';

export default {
  name: 'Navbar',
  data() {
    return {};
  },
  methods: {
    ...mapActions('cartModules', ['getCart']),
  },
  computed: {
    ...mapGetters('cartModules', ['carts']),
  },
  created() {
    const vm = this;
    vm.getCart(); // 剛建立時讀取
  },
  mounted() {},
}
</script>

<style lang="scss" scoped>
nav {
  background-color: rgb(200, 160, 90);
}

.position-fixed {
  z-index: 100;
}

.nav-link {
  color: white;
  display: block;
  height: 100%;
  &:hover {
    background-color: rgba(0, 0, 0, 0.3);
  };
}

.active {
  background-color: rgba(0, 0, 0, 0.3);
}
</style>
