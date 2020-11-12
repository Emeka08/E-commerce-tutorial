<template>
  <div class="">
    <div class="d-flex justify-content-between">
      <div>
        <p>TRADE</p>
      </div>
      <div>
        <button @click="hideDiv" class="button d-flex">REAL <i class="fas fa-sort-down"></i></button>
      </div>
    </div>
    <div v-if="show" class="hide">
      <p>Real Portfolio</p>
      <hr>
      <p>Virtual Portfolio</p>
    </div>
    <div class="mt-2">
      <AppAsideList v-bind:listInfos="listInfos"/>
    </div>
  </div>
</template>

<script>
import AppAsideList from './AppAsideList'

export default {
  components: { AppAsideList },
  methods: {
    hideDiv: function () {
      this.show = !this.show
    }
  },
  data () {
    return {
      show: false,
      listInfos: [
        {
          class: 'i m-0 p-0 fas fa-swatchbook text-light',
          text: 'Home Page',
          link: '/'
        },
        {
          class: 'i m-0 p-0 fas fa-chart-pie text-light',
          text: 'Users',
          link: '/adminpage/users'
        },
        {
          class: 'i m-0 p-0 fas fa-newspaper text-light',
          text: 'Buyers',
          link: '/adminpage/buyers'
        }
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
p {
  color: #999AA0;
  font-weight: 400;
  font-size: 12px;
  margin: 1.8rem 0 0 1.2rem;
}
.button {
  border: 1px solid rgba(0, 0, 0, 0.5);
  border-radius: 4px;
  font-weight: bolder;
  font-size: 11px;
  color: #C0E271;
  padding: .2rem .6rem;
  margin: 1.4rem 2.1rem 0 0;
  background-color: inherit;
}
.button:hover {
  background-color: #5F6474;
}
.button:focus {
  outline: none;
}
.fa-sort-down {
  padding: 0 0 0 .2rem;
}
.hide {
  background-color: white;
  position: relative;
  width: 220px;
  height: 75px;
  float: right;
  margin:.3rem .5rem 0;
}
.hide p{
  margin: 0;
  padding: .5rem .5rem .5rem .8rem;
  font-weight: 600;
  font-size: 13px;
  color: rgba(0, 0, 0, 0.8);
}
.hide hr{
  margin: 0;
  padding: 0;
}
</style>
