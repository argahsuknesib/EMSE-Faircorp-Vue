<template>
  <div id="app">
    <!-- <Location/> -->
    <!-- <Navigation/> -->
    <!-- <Building /> -->
    <!-- <Hello /> -->
    <!-- <Heater/> -->
    <Developer/>
  </div>
</template>

<script>
// import Heater from './components/Heater.vue'
// import Navigation from './components/Navigation.vue'
// import Location from './components/Location.vue'
// import Building from './components/Building.vue'
// import Hello from './components/Hello.vue'\
import Developer from './components/Developer.vue'

export default {
  name: 'App',
  components: {
    Developer
    // Hello
    // Building
    // Navigation,
    // Location,
    // Heater
  },

  data(){

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
