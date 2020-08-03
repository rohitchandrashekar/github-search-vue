<template>
  <div id="app">
    <router-view/>
    <Nav></Nav>
    <div class="container">
    </div>

  </div>
</template>

<script>
import Nav from './components/Nav'
//import Report from './components/Report.vue'
export default {
  name: 'app',
  components: {
    Nav,
    //Report
  }
}
</script>

<style>
body{
  background-color: #FEFEFE
}
.asset{
  word-break: break-all;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
</style>