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
          img: 'https://www-konga-com-res.cloudinary.com/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/media/catalog/product/D/C/110316_1578229547.jpg',
          name: 'Water Purifier Filter',
          price: 'N16,000',
          heading: 'Water Perifier'
        }
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
