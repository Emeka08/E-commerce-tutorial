<template>
  <div class="home">
    <AppProductsCart v-bind:cartInfos = "cartInfos" />
  </div>
</template>

<script>
import AppProductsCart from '../components/Product/AppProductsCart'

export default {
  components: { AppProductsCart },
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
</style>
