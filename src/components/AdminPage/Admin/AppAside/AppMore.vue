<template>
  <div>
    <div class="mb-2">
      <p>MORE</p>
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
          class: 'i m-0 p-0 fas fa-bullseye text-light',
          text: 'eToro Club',
          link: ''
        },
        {
          class: 'i m-0 p-0 fas fa-user-friends text-light',
          text: 'Invite Friends',
          link: ''
        },
        {
          class: 'i m-0 p-0 fas fas fa-info-circle text-light',
          text: 'Help',
          link: ''
        },
        {
          class: 'i m-0 p-0 fab fa-guilded text-light',
          text: 'Guide',
          link: ''
        },
        {
          class: 'i m-0 p-0 fas fa-coins text-light',
          text: 'Withdraw Funds',
          link: ''
        },
        {
          class: 'i m-0 p-0 fas fa-cog text-light',
          text: 'Settings',
          link: ''
        },
        {
          class: 'i m-0 p-0 fas fa-sign-out-alt text-light',
          text: 'Logout',
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
