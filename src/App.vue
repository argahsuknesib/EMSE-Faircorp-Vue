<template>
  <div id="app">
    <Heater/>
  </div>
</template>

<script>
import Heater from './components/Heater.vue'

export default {
  name: 'App',
  components: {
    Heater
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
