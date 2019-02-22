<template>
  <div id="app">
    <Loading :active.sync="isLoading"></Loading>
    <router-view></router-view>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'App',
  data() {
    return {};
  },
  computed: {
    ...mapGetters(['isLoading']),
  },
};
</script>

<style lang="scss">
@import "./assets/all";
</style>
