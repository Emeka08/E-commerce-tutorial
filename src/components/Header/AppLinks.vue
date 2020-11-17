<template>
  <div>
    <nav>
      <ul class="d-flex m-0 pl-0 appLinks">
        <li class="pr-5">
          <p>
            All Categories
            <i class="fas fa-bars ml-1"></i>
          </p>
        </li>
        <li @mouseenter="colorChange" @mouseleave="returnColor" class="pr-5">
          <router-link class="" to="/adminPage">
            <p v-bind:class="color">Admin Page</p>
          </router-link>
        </li>
        <li>
          <p>Phones and Tablets</p>
        </li>
        <li>
          <p>Electronics</p>
        </li>
        <li>
          <p>Konga Fashion</p>
        </li>
        <li>
          <p>Home and Kitchen</p>
        </li>
        <li>
          <p>Baby, Kids and Toys</p>
        </li>
        <li>
          <p>Other Categories</p>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  data () {
    return {
      color: 'white'
    }
  },
  computed: {
  },
  methods: {
    colorChange: function () {
      this.color = 'red'
    },
    returnColor: function () {
      this.color = 'white'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.appLinks {
  background-color: #94004F;
  position: relative;
  bottom: 1rem;
}
li {
  padding: .5rem 1.7rem;
  cursor: pointer;
  color: white;
}
li:hover, .text-light:hover {
  background-color: white;
  color: #94004f !important;
}
p {
  margin-bottom: 0;
}
.white {
  color: white;
}
.red {
  color: #94004f;
}
a:hover {
  text-decoration: none;
}
</style>
