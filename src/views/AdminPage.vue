<template>
  <div class="home">
    <AdminAside />
    <router-view class="main d-flex align-items-center justify-content-center" />
  </div>
</template>

<script>
import AdminAside from '../components/AdminPage/Admin/AppAside/AppAside'

export default {
  components: { AdminAside },
  data () {
    return {
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.home {
  height: 100px !important;
}
.main {
  position: absolute;
  top: 20.6%;
  left: 21.8%;
  width: 1068px;
  height: 487px !important;
}
</style>
