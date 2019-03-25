<template>
  <div>
    <Navbar></Navbar>
    <Alert></Alert>
    <Header></Header>
    <div class="container">
      <router-view></router-view>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import Navbar from './Navbar';
import Header from './Header';
import Footer from './Footer';
import Alert from '../back/AlertMessage';
export default {
  name: 'Dashboard',
  components: { Navbar, Header, Footer, Alert },
};
</script>

<style lang="scss" scoped>
.container {
  min-height: calc(100vh - 457px);
}
</style>
