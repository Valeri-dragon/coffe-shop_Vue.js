<template>
  <main>
    <div class="banner goodspage-banner">
      <div class="container">
        <div class="row">
          <div class="col-lg-6">
            <nav-bar-component />
          </div>
        </div>
        <title-item :title="goods.title" />
      </div>
    </div>
    <section class="shop">
      <div class="container">
        <div class="row">
          <div class="col-lg-4 offset-2">
            <img
              class="shop__girl"
              src="@/assets/img/coffee_goods.jpg"
              alt="girl"
            />
          </div>
          <div class="col-lg-4">
            <div class="title">About our beans</div>
            <img
              class="beanslogo"
              src="@/assets/logo/Beans_logo_dark.svg"
              alt="Beans logo"
            />
            <div class="shop__text">
              Extremity sweetness difficult behaviour he of. On disposal of as
              landlord horrible.
              <br /><br />
              Afraid at highly months do things on at. Situation recommend
              objection do intention<br />
              so questions. <br />
              As greatly removed calling pleased improve an. Last ask him cold
              feel<br />
              met spot shy want. Children me laughing we prospect answered
              followed. At it went<br />
              is song that held help face.
            </div>
          </div>
        </div>

        <div class="line"></div>

        <div class="row">
          <div class="col-lg-10 offset-lg-1">
            <div class="shop__wrapper">
              <product-card
                v-for="card in goods.goods"
                :key="card.id"
                classItem="shop__item"
                :card="card"
                @onNavigate="navigate"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
    <footer-component />
  </main>
</template>
<script>
import ProductCard from "@/components/ProductCard.vue";
import TitleItem from "@/components/TitleItem.vue";
import {navigate }from "../mixins/navigate"
export default {
  components: {
    ProductCard,
    TitleItem,
  },
  computed: {
    goods() {
      return this.$store.getters["getGoods"];
    },
  },
  data(){
return{
  name: 'goods'
}
  },
  mixins:[navigate],
    mounted(){
fetch("http://localhost:3000/goods")
.then(res=>res.json())
.then((data)=>{
  this.$store.dispatch("setGoodsData",data)
})
   }
};
</script>
