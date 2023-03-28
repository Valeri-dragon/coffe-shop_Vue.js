<template>
  <main>
    <div class="banner goodspage-banner">
      <div class="container">
        <div class="row">
          <div class="col-lg-6">
            <nav-bar-component />
          </div>
        </div>
        <title-item :title="title"/>
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
                ClassItem="shop__item"
                :name="goods[0].name"
                :price="goods[0].price"
                :country="goods[0].country"
                :img="goods[0].icon"
              />
              <product-card
                ClassItem="shop__item"
                :name="goods[1].name"
                :price="goods[1].price"
                :country="goods[1].country"
                :img="goods[1].icon"
              />
              <product-card
                ClassItem="shop__item"
                :name="goods[2].name"
                :price="goods[2].price"
                :country="goods[2].country"
                :img="goods[2].icon"
              />
              <product-card
                ClassItem="shop__item"
                :name="goods[3].name"
                :price="goods[3].price"
                :country="goods[3].country"
                :img="goods[3].icon"
              />
              <product-card
                ClassItem="shop__item"
                :name="goods[4].name"
                :price="goods[4].price"
                :country="goods[4].country"
                :img="goods[4].icon"
              />
              <product-card
                ClassItem="shop__item"
                :name="goods[5].name"
                :price="goods[5].price"
                :country="goods[5].country"
                :img="goods[5].icon"
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
export default {
  components: {
    ProductCard, TitleItem
  },
  data() {
    return {
      title:'For your pleasure',
      goods: [
        {
          id: 0,
          icon: "good-1.jpg",
          name: "Solimo Coffee Beans 2kg",
          country: "Brazil",
          price: 10.73,
        },
        {
          id: 1,
          icon: "good-1.jpg",
          name: "Presto Coffee Beans 1kg",
          country: "Brazil",
          price: 15.99,
        },
        {
          id: 2,
          icon: "good-1.jpg",
          name: "AROMISTICO Coffee 1kg",
          country: "Brazil",
          price: 6.99,
        },
        {
          id: 3,
          icon: "good-1.jpg",
          name: "Solimo Coffee Beans 2kg",
          country: "Brazil",
          price: 10.73,
        },
        {
          id: 4,
          icon: "good-1.jpg",
          name: "Presto Coffee Beans 1kg",
          country: "Brazil",
          price: 15.99,
        },
        {
          id: 5,
          icon: "good-1.jpg",
          name: "AROMISTICO Coffee 1kg",
          country: "Brazil",
          price: 6.99,
        },
      ],
    };
  },
};
</script>
