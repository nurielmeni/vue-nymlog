import Vue from "vue";
import App from "./App.vue";
import VueSocketIO from "vue-socket.io";
import "./registerServiceWorker";

const serverUrl = "http://104.248.28.94:8081";

Vue.config.productionTip = false;
Vue.use(
  new VueSocketIO({
    debug: true,
    connection: serverUrl
  })
);

new Vue({
  render: h => h(App)
}).$mount("#app");
