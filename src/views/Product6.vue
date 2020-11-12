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
          img: 'https://www-konga-com-res.cloudinary.com/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/media/catalog/product/P/C/95397_1583260096.jpg',
          name: 'Datawind 10.1" Screen - 1Gb RAM',
          price: 'N25,000',
          heading: 'Phone'
        }
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
