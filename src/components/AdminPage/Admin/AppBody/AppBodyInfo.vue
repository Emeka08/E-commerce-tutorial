<template>
  <div>
    <div class="scroll">
      <div class="body d-flex justify-content-between align-items-center">
        <div class="d-flex w-40 justify-content-between align-items-center pr-5">
          <h3>MARKETS</h3>
          <h3 class="d-none cursor">CHANGE
            <span class="change">1D
              <i class="fas fa-sort"></i>
            </span>
          </h3>
        </div>
        <div class="d-flex justify-content-around align-items-center w-60">
          <h3>SELL</h3>
          <h3>BUY</h3>
          <h3 class="d-none">SENTIMENT</h3>
        </div>
      </div>
      <AppBodyInfoComponents />
    </div>
  </div>
</template>

<script>
import AppBodyInfoComponents from './AppBodyInfoComponents'

export default {
  components: { AppBodyInfoComponents },
  data () {
    return {
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

/* width */
::-webkit-scrollbar {
  width: 6px;
}
/* Track */
::-webkit-scrollbar-track {
  background: #DADADA;
}
/* Handle */
::-webkit-scrollbar-thumb {
  background: #3F9ADB;
}
/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #3F9ADB;
}

.scroll {
  overflow: auto;
  height: 69.6vh;
}
.change-id {
  display: none;
}
.body {
  background-color: #E9E9E9;
  padding: .6rem 1rem;
}
h3 {
  font-size: .8rem;
  color: #7F7F7F;
  margin: 0;
  font-weight: 700;
}
.change {
  position: relative;
  left: 10px;
  color: #2FA8F6;
}
.w-40 {
  width: 40%;
}
.w-60 {
  width: 60%;
}
.cursor {
  cursor: pointer;
}

@media only screen and (min-width: 1200px) {
  .d-none {
    display: block !important;
  }
}
</style>
