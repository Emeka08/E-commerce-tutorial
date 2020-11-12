<template>
  <div class="aside">
    <div class="header">
      <h2 class="h2 text-white pointer">Admin</h2>
    </div>
    <div class="scroll">
      <div class="d-flex">
        <div>
          <img src="../../../../assets/profile-picture.png" alt="Profile Picture">
        </div>
        <div>
          <h2 class="text-light">EmekaOh</h2>
          <button class="btn text-light">Complete Profile</button>
        </div>
      </div>
      <AppTrade />
      <AppDiscover />
      <AppMore />
    </div>
    <div class="footer d-flex align-items-center justify-content-center">
      <button class="btn m-0 shadow">Deposit Funds</button>
    </div>
  </div>
</template>

<script>
import AppTrade from './AppTrade'
import AppDiscover from './AppDiscover'
import AppMore from './AppMore'

export default {
  components: { AppTrade, AppDiscover, AppMore },
  data () {
    return {
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@media only screen and (max-width: 1200px) {
  .aside {
    display: none;
  }
}

/* width */
::-webkit-scrollbar {
  width: 6px;
}
/* Track */
::-webkit-scrollbar-track {
  background: #26282C;
}
/* Handle */
::-webkit-scrollbar-thumb {
  background: #5F6474;
}
/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #5F6474;
}

.aside {
  width: 21.8%;
  position: absolute;
  top: 135px;
}
.header {
  background-color: #4C505D;
  height: 70px;
  width: 100%;
}
.scroll {
  overflow: auto;
  height: 52.8vh;
  background-color: #4C505D;
  font-family: 'Nanum Gothic', sans-serif;
}
.h2 {
  font-size: 2rem;
  font-weight: 700;
  line-height: 20px;
  padding: 1.2rem 0 2rem .4rem;
  width: 100px;
}
.h2 > span {
  font-size: 1.6rem;
}
img {
  width: 75px;
  height: 75px;
  margin-left: 1.4rem;
}
h2 {
  font-weight: bolder;
  font-size: 1.2rem;
  margin-left: 1rem;
}
.btn {
  background-color: #3F9ADB;
  margin-left: 1rem;
  margin-top: .4rem;
  opacity: .9;
  font-size: 13px;
  font-weight: 600;
  padding: .5rem 1.6rem;
}
.btn:hover {
  opacity: 1;
}
.pointer {
  cursor: pointer;
}
.footer {
  width: 100%;
  height: 70px;
  background-color: #4C505D;
  border-top: 1px solid rgba(0, 0, 0, 0.2);
}
.footer .btn {
  width: 85%;
  border: 1px solid rgba(0, 0, 0, 0.6);
  color: white;
  font-size: 1.2rem;
}
.footer .btn:hover {
  background-color: #48A9E0;
}
</style>
