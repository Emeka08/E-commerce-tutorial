<template>
  <div class="appMiniTopBar d-flex justify-content-between">
    <div>
      <i class="fas fa-arrow-left mr-2"></i>
      <img width="70" src="https://www-konga-com-res.cloudinary.com/image/upload/w_850,f_auto,fl_lossy,dpr_auto,q_auto/assets/images/content/logo-alternate.png" alt="logo">
    </div>
    <div>
      <i class="fas fa-home"></i>
      <i class="fas fa-shopping-cart"></i>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.appMiniTopBar {
  background-color: white;
  padding: .8rem 2rem .3rem;
}
@media only screen and (min-width: 700px) {
  .appMiniTopBar {
    display: none !important;
  }
}
</style>
