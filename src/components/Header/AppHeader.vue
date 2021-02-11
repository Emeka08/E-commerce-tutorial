<template>
  <div class="appHeader px-4 d-flex align-items-center">
    <div class="logo w-30 d-flex align-items-center">
      <router-link to="/">
        <img width="100" src="https://www.konga.com/_next/static/images/62f8a0d88e07573b4d46735aa24f3f04.png" alt="">
      </router-link>
      <ul class="d-flex m-0 ml-5">
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
    <div class="w-40 search-box p-2">
      <input type="text" placeholder="Search for products, brands and categories...">
      <div class="d-inline yyy">
        <i class="fas fa-search cursor text-light"></i>
      </div>
    </div>
    <div class="w-30 login">
      <ul class='d-flex align-items-center mb-0 pl-0'>
        <li @mouseenter="colorChange3" @mouseleave="returnColor3" class="cursor">
          <a href="#" v-bind:class="color3">Admin</a>
        </li>
        <li @mouseenter="colorChange4" @mouseleave="returnColor4" class="cursor">
          <a href="#" v-bind:class="color4">Login / Signup</a>
        </li>
        <li class="cart cursor ml-5">
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
  /* background-color: red; */
  /* position: relative;
  bottom: 1rem; */
}
.logo a {
  color: white;
  font-size: .9rem;
}
.color {
  color: #ED017F !important;
}
.logo li, .login li {
  padding: 1rem 1rem;
}
.logo li {
  padding: 1rem 1rem;
}
.logo li:hover, .login li:hover {
  background-color: white;
}
input {
  width: 460px;
  padding: .5rem .3rem .5rem .6rem;
  border: none;
  border-radius: 4px 0 0 4px;
}
input[type = "text"] {
  font-size: .7rem;
}
input:focus {
  outline: none;
}
.fa-search {
  background-color: #FBA100;
}
.yyy {
  padding: 6.7px 12px 9px;
  background-color: #FBA100;
  margin-left: -5px;
  border-radius: 0 4px 4px 0;
}
.login a {
  font-size: .9rem;
  color: white;
}
.cart {
  background-color: #2d9e6dea;
  padding: .5rem 1rem !important;
}
.cart:hover {
  background-color: #2d9e6d !important;
}
.cart span {
  background-color: white;
  color: black;
  padding: .1rem .3rem;
  margin-left: .4rem;
  border: none;
  border-radius: 2px;
}
a:hover {
  text-decoration: none;
}
@media only screen and (max-width: 1350px) {
  .search-box {
    width: 100%;
  }
  .logo, .login {
    display: none !important;
  }
  .search-box {
    display: flex;
    justify-content: center;
    padding: 1rem .5rem;
  }
  input {
    background-color: #F5F5F5;
    width: 70%;
  }
}
@media only screen and (max-width: 700px) {
  .appHeader {
    background-color: white;
    bottom: 0;
  }
  input {
    width: 100% !important;
  }
  .fa-search {
    color: #ED017F !important;
  }
}

@media only screen and (max-width: 560px) {
  .yyy, .fa-search {
    background-color: #F5F5F5 !important;
  }
  .fa-search {
    color: #d3d3d3 !important;
  }
}
</style>
