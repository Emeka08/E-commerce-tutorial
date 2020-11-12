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
          img: 'https://www-konga-com-res.cloudinary.com/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/media/catalog/product/T/r/Travel-Steam-Iron---Red-6296949_5.jpg',
          name: 'Travel Steam Iron - Red',
          price: 'N4,500',
          heading: 'Iron'
        }
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
