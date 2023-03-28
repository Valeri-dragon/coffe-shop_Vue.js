<template>
  <main>
    <div class="preview">
      <div class="container">
        <div class="row">
          <div class="col">
            <nav-bar-component />
          </div>
        </div>
        <div class="row">
          <div class="col-lg-10 offset-lg-1">
            <title-item :title="title"/>
            <img
              class="beanslogo"
              src="@/assets/logo/Beans_logo.svg"
              alt="Beans logo"
            />
            <div class="preview__subtitle">
              We makes every day full of energy and taste
            </div>
            <div class="preview__subtitle">Want to try our beans?</div>
            <router-link to="/our-coffee" class="preview__btn"
              >More</router-link
            >
          </div>
        </div>
      </div>
    </div>
    <section class="about">
      <div class="container">
        <div class="row">
          <div class="col-lg-6 offset-lg-3">
            <div class="title">About Us</div>
            <img
              class="beanslogo"
              src="@/assets/logo/Beans_logo_dark.svg"
              alt="Beans logo"
            />
            <div class="about__text">
              Extremity sweetness difficult behaviour he of. On disposal of as
              landlord horrible. Afraid at highly months do things on at.
              Situation recommend objection do intention so questions. As
              greatly removed calling pleased improve an. Last ask him cold feel
              met spot shy want. Children me laughing we prospect answered
              followed. At it went is song that held help face.<br /><br />

              Now residence dashwoods she excellent you. Shade being under his
              bed her, Much read on as draw. Blessing for ignorant exercise any
              yourself unpacked. Pleasant horrible but confined day end
              marriage. Eagerness furniture set preserved far recommend. Did
              even but nor are most gave hope. Secure active living depend son
              repair day ladies now.
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="best">
      <div class="container">
        <div class="title">Our best</div>
        <div class="row">
          <div class="col-lg-10 offset-lg-1">
            <div class="best__wrapper">
              <product-card
              ClassItem="best__item"
                :name="bestSellers[0].name"
                :price="bestSellers[0].price"
                :country="bestSellers[0].country"
                :img="bestSellers[0].icon"
              />
              <product-card
              ClassItem="best__item"
                :name="bestSellers[1].name"
                :price="bestSellers[1].price"
                :country="bestSellers[1].country"
                :img="bestSellers[1].icon"
              />
              <product-card
              ClassItem="best__item"
                :name="bestSellers[2].name"
                :price="bestSellers[2].price"
                :country="bestSellers[2].country"
                :img="bestSellers[2].icon"
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

import TitleItem from '@/components/TitleItem.vue';
export default {
  components: {
    ProductCard, TitleItem
  },
  data() {
    return {
      title:'Everything You Love About Coffee',
      bestSellers: [
        {
          id: 0,
          icon: "coffee-1.jpg",
          name: "Solimo Coffee Beans 2kg",
          price: 10.73,
        },
        {
          id: 1,
          icon: "coffee-2.jpg",
          name: "Presto Coffee Beans 1kg",
          price: 15.99,
        },
        {
          id: 2,
          icon: "coffee-3.jpg",
          name: "AROMISTICO Coffee 1kg",
          price: 6.99,
        },
      ],
    };
  },
};
</script>
