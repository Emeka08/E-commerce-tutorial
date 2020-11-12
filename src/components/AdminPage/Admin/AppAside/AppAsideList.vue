<template>
  <div class="">
    <ul class="p-0 m-0">
      <li class="tradeComponent" :key="listInfo.name" v-for="listInfo in listInfos">
        <a href="#" class="d-flex align-items-center">
          <i v-bind:class="listInfo.class"></i>
          <router-link v-bind:to="listInfo.link">
            <p class="p m-0">{{ listInfo.text }}</p>
          </router-link>
        </a>
      </li>
    </ul>
    <!-- <router-link v-bind:to="listInfo.link" class="p p-0 m-0 pl-3">{{ listInfo.text }}</router-link> -->
  </div>
</template>

<script>
export default {
  props: ['listInfos'],
  methods: {
  },
  data () {
    return {
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
ul {
  list-style-type: none;
}
li {
  cursor: pointer;
  padding-left: 1.5rem;
}
a {
  text-decoration: none;
}
.i, .p {
  display: block;
}
.p {
  font-weight: 600;
  font-size: .9rem;
  color: rgba(255, 255, 255, 0.6);
  width: 100%;
  padding: 1rem 1.5rem !important;
}
.p:hover {
  color: white;
}
.tradeComponent:hover {
  background-color: #5F6474;
}
.tradeComponent .fas {
  font-size: 20px;
}
</style>
