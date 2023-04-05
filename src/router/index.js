import Vue from "vue";
import VueRouter from "vue-router";

import HeroView from "../views/HeroView";
import OurCoffeView from "../views/OurCoffeeView";
import GoodsPageView from "../views/GoodsPageView";
import ContactsView from "../views/ContactsView";
import ThankView from "../views/ThankView";
import ProductPageView from "../views/ProductPageView";

Vue.use(VueRouter);
const routes = [
  {
    path: "/",
    component: HeroView,
  },
  {
    path: "/our-coffee",
    component: OurCoffeView,
  },
  {
    path: "/for-your-pleasure",
    component: GoodsPageView,
  },
  {
    path: "/contacts",
    component: ContactsView,
  },
  {
    path: "/thank-you",
    component: ThankView,
  },
  {name:'coffee',
    path: "/our-coffee/:id",
    component: ProductPageView,
  },
  {name:'goods',
    path: "/for-your-pleasure/:id",
    component: ProductPageView,
  },
];

const router = new VueRouter({
  mode: "history",
  routes,
});
export default router;
