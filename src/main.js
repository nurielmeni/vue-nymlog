import Vue from "vue";
import App from "./App.vue";
import VueSocketIO from "vue-socket.io";
import "./registerServiceWorker";

const serverUrl = "https://logs.nymedia.co.il";

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
