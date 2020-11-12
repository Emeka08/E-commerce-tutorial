<template>
  <div class="mx-4 product-h pb-5">
    <div class="d-flex align-items-center bb py-3 px-3">
      <h2 class="mb-0 mr-5">Recommended For You</h2>
      <p class="mb-0">See All Items</p>
    </div>
    <div>
      <AppProductCard class="car" v-bind:infos="infos"/>
    </div>
  </div>
</template>

<script>
import AppProductCard from '../Product/AppProductCard'

export default {
  components: { AppProductCard },
  data () {
    return {
      infos: [
        {
          name: 'Philip Avent Baby care',
          price: 'N15,000',
          img: 'https://www-konga-com-res.cloudinary.com/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/media/catalog/product/I/T/120160_1522960534.jpg',
          link: '/product1'
        },
        {
          name: 'Bajaj Popular Iron',
          price: 'N8,500',
          img: 'https://www-konga-com-res.cloudinary.com/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/media/catalog/product/K/H/5042_1581368659.jpg',
          link: '/product2'
        },
        {
          name: 'Travel Steam Iron - Red',
          price: 'N4,500',
          img: 'https://www-konga-com-res.cloudinary.com/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/media/catalog/product/T/r/Travel-Steam-Iron---Red-6296949_5.jpg',
          link: '/product3'
        },
        {
          name: 'Swiss Sd 510- Dual Sim-8GB ROM',
          price: 'N16,500',
          img: 'https://www-konga-com-res.cloudinary.com/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/media/catalog/product/W/J/67343_1557975306.jpg',
          link: '/product4'
        },
        {
          name: 'Water Purifier Filter',
          price: 'N16,000',
          img: 'https://www-konga-com-res.cloudinary.com/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/media/catalog/product/D/C/110316_1578229547.jpg',
          link: '/product5'
        },
        {
          name: 'Datawind 10.1" Screen - 1Gb RAM',
          price: 'N25,000',
          img: 'https://www-konga-com-res.cloudinary.com/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/media/catalog/product/P/C/95397_1583260096.jpg',
          link: '/product6'
        }
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.car {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  justify-content: center;
}
.bb {
  border-bottom: 1px solid rgba(128, 128, 128, 0.2);
}
.product-h {
  /* margin: .5rem .5rem 0; */
  background-color: white;
  /* padding: .9rem .5rem; */
  border-radius: 10px 10px 0 0;
}
.product-h p {
  font-size: .8rem;
  font-weight: 600;
  color: #A8054D;
  letter-spacing: 1px;
}
.product-h h2 {
  font-size: 1.2rem;
  font-weight: 700;
}
</style>
