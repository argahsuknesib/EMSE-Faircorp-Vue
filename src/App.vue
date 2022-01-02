<template>
  <div id="app">
    <Navigation/>
    <!-- <Heater/> -->
  </div>
</template>

<script>
// import Heater from './components/Heater.vue'
import Navigation from './components/Navigation.vue'

export default {
  name: 'App',
  components: {
    Navigation,
    // Heater
  },

  data(){
    title: "Kushagra Singh BISEN Faircorp App.",
    tab : "Windows",
    
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
