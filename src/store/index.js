import Vue from "vue";
import Vuex from "vuex";

import links from "./links";
import goods from "./goods";
import hero from "./hero";
import ourCoffee from "./ourCoffe";
import privacy from "./privacy";
Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    links,
    hero,
    goods,
    ourCoffee,
    privacy
  },
});
export default store;
