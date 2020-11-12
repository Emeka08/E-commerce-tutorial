<template>
  <div class="home">
    <AppTopBar />
    <AppHeader />
    <AppLinks />
    <AppProductsCart v-bind:cartInfos = "cartInfos" />
    <AppFooter />
  </div>
</template>

<script>
import AppTopBar from '../components/AppTopBar'
import AppHeader from '../components/AppHeader'
import AppLinks from '../components/AppLinks'
import AppProductsCart from '../components/AppProductsCart'
import AppFooter from '../components/AppFooter'

export default {
  components: { AppTopBar, AppHeader, AppLinks, AppProductsCart, AppFooter },
  data () {
    return {
      cartInfos: [
        {
          img: 'https://www-konga-com-res.cloudinary.com/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/media/catalog/product/I/T/120160_1522960534.jpg',
          name: 'Philip Avent Baby care',
          price: 'N15,000',
          heading: 'Baby Care'
        }
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.home {
  background-color: #F5F5F5;
  height: 100vh;
}
</style>
