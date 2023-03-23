import Vue from 'vue'
import App from './App.vue'
import FooterComponent from "@/components/FooterComponent.vue";

import './assets/scss/style.scss'

Vue.config.productionTip = false

Vue.component("footer-component", FooterComponent);
new Vue({
  render: h => h(App),
}).$mount('#app')
