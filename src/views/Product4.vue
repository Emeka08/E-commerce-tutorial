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
          img: 'https://www-konga-com-res.cloudinary.com/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/media/catalog/product/W/J/67343_1557975306.jpg',
          name: 'Swiss Sd 510- Dual Sim-8GB ROM',
          price: 'N16,500',
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
