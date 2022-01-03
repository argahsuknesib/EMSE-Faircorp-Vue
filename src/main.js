import Vue from "vue";
import App from "./App.vue";
import "vue-googlemaps/dist/vue-googlemaps.css";
import VueGeoLocation from "vue-browser-geolocation";
import * as VueGoogleMaps from "vue2-google-maps";
import Building from "./components/Building.vue";
import Home from "./components/Home.vue";
import Developer from "./components/Developer.vue";
import Heater from "./components/Heater.vue";
import Hello from "./components/Hello.vue";
import LocationMap from "./components/LocationMap.vue";
import Room from "./components/Room.vue";
import Weather from "./components/Weather.vue";
import Window from "./components/Window.vue";

Vue.use(VueGoogleMaps, {
  load: {
    key: "",
  },
});
Vue.config.productionTip = false;
import VueRouter from "vue-router";

Vue.use(VueRouter);
Vue.use(VueGeoLocation);

const routes = [
  { path: "/building", component: Building },
  { path: "/", component: Home },
  { path: "/developer", component: Developer },
  { path: "/heater", component: Heater },
  { path: "/hello", component: Hello },
  { path: "/location", component: LocationMap },
  { path: "/room", component: Room },
  { path: "/weather", component: Weather },
  { path: "/window", component: Window },
];

const router = new VueRouter({
  routes: routes,
  mode: "history",
});

new Vue({
  render: (h) => h(App),
  router: router,
}).$mount("#app");
