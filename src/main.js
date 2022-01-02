import Vue from 'vue'
import App from './App.vue'
import 'vue-googlemaps/dist/vue-googlemaps.css'
import VueGeoLocation from 'vue-browser-geolocation'
import * as VueGoogleMaps from 'vue2-google-maps'
Vue.use(VueGoogleMaps, {
  load :{
    key : ''
  },
})
Vue.config.productionTip = false
import VueRouter from 'vue-router'

Vue.use(VueRouter)
Vue.use(VueGeoLocation)

new Vue({
  render: h => h(App),
}).$mount('#app')
