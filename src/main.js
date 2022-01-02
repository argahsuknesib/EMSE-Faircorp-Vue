import Vue from 'vue'
import App from './App.vue'
import 'vue-googlemaps/dist/vue-googlemaps.css'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
