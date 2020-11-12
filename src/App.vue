<template>
  <div class="main-body">
    <AppTopBar />
    <AppHeader />
    <AppLinks />
    <router-view/>
    <AppFooter />
  </div>
</template>

<script>
import AppTopBar from '../src/components/Header/AppTopBar'
import AppHeader from '../src/components/Header/AppHeader'
import AppLinks from '../src/components/Header/AppLinks'
import AppFooter from '../src/components/Footer/AppFooter'

export default {
  components: { AppTopBar, AppHeader, AppLinks, AppFooter }
}
</script>

<style>
.main-body {
  background-color: #F5F5F5;
  height: 100vh;
}
li {
  list-style-type: none;
}
a {
  text-decoration: none;
}
* {
  font-family: 'Asap Condensed', sans-serif;
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
.w-20 {
  width: 20%;
}
.w-25 {
  width: 25%;
}
.w-30 {
  width: 30%;
}
.w-40 {
  width: 40%;
}
.w-45 {
  width: 45%;
}
.w-50 {
  width: 20%;
}
.cursor {
  cursor: pointer;
}
</style>
