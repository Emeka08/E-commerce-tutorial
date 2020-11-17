<template>
  <div class="appHeader px-4 d-flex align-items-center">
    <div class="logo w-30 d-flex align-items-center">
      <router-link to="/">
        <img width="100" src="https://www.konga.com/_next/static/images/62f8a0d88e07573b4d46735aa24f3f04.png" alt="">
      </router-link>
      <ul class="d-flex m-0">
        <li @mouseenter="colorChange" @mouseleave="returnColor" class="cursor">
          <a href="#" v-bind:class="color">Store Locator</a>
        </li>
        <li @mouseenter="colorChange2" @mouseleave="returnColor2" class="cursor">
          <a href="#" v-bind:class="color2">
            Help
            <i class="ml-1 fas fa-angle-down"></i>
          </a>
        </li>
      </ul>
    </div>
    <div class="w-45">
      <input placeholder="Search for products, brands and categories...">
      <i class="fas fa-search cursor text-light"></i>
    </div>
    <div class="w-25 login">
      <ul class='d-flex align-items-center mb-0 pl-0'>
        <li @mouseenter="colorChange3" @mouseleave="returnColor3" class="cursor">
          <a href="#" v-bind:class="color3">Admin</a>
        </li>
        <li @mouseenter="colorChange4" @mouseleave="returnColor4" class="cursor">
          <a href="#" v-bind:class="color4">Login / Signup</a>
        </li>
        <li class="cart cursor">
          <a href="">
            <i class="fas fa-shopping-cart mr-1"></i>
            My Cart
            <span>1</span>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      color: '',
      color2: '',
      color3: '',
      color4: ''
    }
  },
  methods: {
    colorChange: function () {
      this.color = 'color'
    },
    returnColor: function () {
      this.color = ''
    },
    colorChange2: function () {
      this.color2 = 'color'
    },
    returnColor2: function () {
      this.color2 = ''
    },
    colorChange3: function () {
      this.color3 = 'color'
    },
    returnColor3: function () {
      this.color3 = ''
    },
    colorChange4: function () {
      this.color4 = 'color'
    },
    returnColor4: function () {
      this.color4 = ''
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.appHeader {
  background-color: #ED017F;
  position: relative;
  bottom: 1rem;
}
.logo a {
  color: white;
  font-size: .9rem;
}
.color {
  color: #ED017F !important;
}
.logo li, .login li {
  padding: 1rem .5rem;
}
.logo li:hover, .login li:hover {
  background-color: white;
}
input {
  width: 500px;
  padding: .3rem .3rem .3rem .6rem;
  border: none;
  border: 4px 0 0 4px;
}
input:focus {
  outline: none;
}
.fa-search {
  background-color: #FBA100;
  padding: 9px .6rem;
  /* position: relative;
  right: 4px; */
  border: 0 4px 4px 0;
  color: red;
}
.login a {
  font-size: .9rem;
  color: white;
}
.cart {
  background-color: rgb(94, 180, 94);
  padding: .5rem 1rem !important;
}
.cart:hover {
  background-color: #2D9E6D !important;
}
.cart span {
  background-color: white;
  color: black;
  padding: .1rem .5rem;
  margin-left: .4rem;
  border: none;
  border-radius: 2px;
}
a:hover {
  text-decoration: none;
}
</style>
