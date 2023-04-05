import Vue from "vue";
import App from "./App.vue";

import NavBarComponent from "@/components/NavBarComponent.vue";
import FooterComponent from "@/components/FooterComponent.vue";

import "./assets/scss/style.scss";
import store from "./store";
import router from "./router";
import './filters'

Vue.config.productionTip = false;

Vue.component("nav-bar-component", NavBarComponent);
Vue.component("footer-component", FooterComponent);


new Vue({
  store, //добавили store в создании нашего приложения
  router,
 
  render: (h) => h(App),
}).$mount("#app");
