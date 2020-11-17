<template>
  <div>
    <div :key="info.name" v-for="info in infos">
      <router-link class="card cursor mt-3" v-bind:to="info.link">
        <div class="mr-2 ml-4">
          <img width="100" v-bind:src="info.img" alt="">
        </div>
        <div class="mt-2">
          <p class="text-dark">{{ info.name }}</p>
          <h4 class="text-dark">{{ info.price }}</h4>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  props: ['infos'],
  data () {
    return {
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.card {
  width: 400px;
  height: 150px;
  background-color: white;
  display: flex;
  flex-direction: row;
  align-items: center;
  border: 2px solid rgba(128, 128, 128, 0.1);
}
.card:hover {
  box-shadow: 10px 10px 5px -5px rgba(0,0,0,0.57);
  -webkit-box-shadow: 10px 10px 5px -5px rgba(0,0,0,0.57);
  -moz-box-shadow: 10px 10px 5px -5px rgba(0,0,0,0.57);
  text-decoration: none;
}
</style>
