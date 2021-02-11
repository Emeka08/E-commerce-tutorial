<template>
  <div class="appTopBar">
    <ul class="d-flex align-items-center justify-content-center">
      <li>
        <a href="#">
          <img src="https://www-konga-com-res.cloudinary.com/image/upload/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/assets/images/homepage/health_icon.png" alt="">
        </a>
      </li>
      <li>
        <a href="#">
          <img src="https://www-konga-com-res.cloudinary.com/image/upload/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/assets/images/homepage/konga_drinks.png" alt="">
        </a>
      </li>
      <li>
        <a href="#">
          <img src="https://www-konga-com-res.cloudinary.com/image/upload/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/assets/images/homepage/konga_groceries.png" alt="">
        </a>
      </li>
      <li>
        <a href="#">
          <img src="https://www-konga-com-res.cloudinary.com/image/upload/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/assets/images/homepage/konga_pay.png" alt="">
        </a>
      </li>
      <li>
        <a href="#">
          <img class="img" src="https://www-konga-com-res.cloudinary.com/image/upload/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/assets/images/homepage/kxpress.png" alt="">
        </a>
      </li>
      <li>
        <a href="#">
          <img class="img" src="https://www-konga-com-res.cloudinary.com/image/upload/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/assets/images/homepage/konga_travel.png" alt="">
        </a>
      </li>
    </ul>
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
img, .img {
  width: 80px;
  margin: 0 1rem;
  padding: .5rem 0;
}
.img {
  width:40px;
}
.appTopBar {
  background-color: #F6F6F6;
  height: 6%;
}
@media only screen and (max-width: 700px) {
  .appTopBar {
    display: none;
  }
}
</style>
