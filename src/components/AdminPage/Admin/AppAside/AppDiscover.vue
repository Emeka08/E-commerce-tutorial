<template>
  <div class="">
    <div class="mb-2">
      <p>DISCOVER</p>
    </div>
    <div>
      <AppAsideList v-bind:listInfos="listInfos"/>
    </div>
  </div>
</template>

<script>
import AppAsideList from './AppAsideList'

export default {
  components: { AppAsideList },
  data () {
    return {
      listInfos: [
        {
          class: 'i m-0 p-0 fas fa-sort-amount-up text-light',
          text: 'Trade Markets',
          link: ''
        },
        {
          class: 'i m-0 p-0 far fa-star text-light',
          text: 'Copy People',
          link: ''
        },
        {
          class: 'i m-0 p-0 fas fa-hard-hat text-light',
          text: 'Invest in Copy Portfolios',
          link: ''
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
  margin: 0 0 0 1.2rem;
}
</style>
