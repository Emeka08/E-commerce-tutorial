<template>
  <div>
    <div :key="cartInfo" v-for="cartInfo in cartInfos">
      <div class="product-h">
        <h2>{{ cartInfo.heading }}</h2>
      </div>
      <div class="white d-flex mx-4 align-items-center justify-content-center">
        <div class="w-50 text-center">
          <img height="300" width="300" v-bind:src="cartInfo.img" alt="">
        </div>
        <div class="w-50 product-info px-5">
          <h2>{{ cartInfo.name }}</h2>
          <p>{{ cartInfo.price }}</p>
          <button class="btn-success btn">BUY NOW</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['cartInfos'],
  data () {
    return {
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.product-h {
  background-color: white;
  padding: 1rem 1.5rem;
  position: relative;
  bottom: 1rem;
}
.white {
  background-color: white;
}
.product-info {
  height: 250px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  gap: 30px;
  border-left: 1px solid rgba(128, 128, 128, 0.2);
}
.product-info p {
  font-size: 1.4rem;
}
</style>
