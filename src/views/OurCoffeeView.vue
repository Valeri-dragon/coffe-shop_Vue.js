<template>
  <main>
    <div class="banner coffepage-banner">
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
              src="@/assets/img/coffee_girl.jpg"
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
          <div class="col-lg-4 offset-2">
            <form action="#" class="shop__search">
              <label class="shop__search-label" for="filter">Looking for</label>
              <input
                id="filter"
                type="text"
                placeholder="start typing here..."
                class="shop__search-input"
              />
            </form>
          </div>
          <div class="col-lg-4">
            <div class="shop__filter">
              <div class="shop__filter-label">Or filter</div>
              <div class="shop__filter-group">
                <button class="shop__filter-btn">Brazil</button>
                <button class="shop__filter-btn">Kenya</button>
                <button class="shop__filter-btn">Columbia</button>
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-10 offset-lg-1">
            <div class="shop__wrapper">
              <product-card
               ClassItem="shop__item"
                :name="coffee[0].name"
                :price="coffee[0].price"
                :country="coffee[0].country"
                :img="coffee[0].icon"
              />
              <product-card
               ClassItem="shop__item"
                :name="coffee[1].name"
                :price="coffee[1].price"
                :country="coffee[1].country"
                :img="coffee[1].icon"
              />
              <product-card
                ClassItem="shop__item"
                :name="coffee[2].name"
                :price="coffee[2].price"
                :country="coffee[2].country"
                :img="coffee[2].icon"
              />
              <product-card
                ClassItem="shop__item"
                :name="coffee[3].name"
                :price="coffee[3].price"
                :country="coffee[3].country"
                :img="coffee[3].icon"
              />
              <product-card
                ClassItem="shop__item"
                :name="coffee[4].name"
                :price="coffee[4].price"
                :country="coffee[4].country"
                :img="coffee[4].icon"
              />
              <product-card
                ClassItem="shop__item"
                :name="coffee[5].name"
                :price="coffee[5].price"
                :country="coffee[5].country"
                :img="coffee[5].icon"
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
      title:'Our Coffee',
      coffee: [
        {
          id: 0,
          icon: "coffee-3.jpg",
          name: "Solimo Coffee Beans 2kg",
          country: "Brazil",
          price: 10.73,
        },
        {
          id: 1,
          icon: "coffee-3.jpg",
          name: "Presto Coffee Beans 1kg",
          country: "Brazil",
          price: 15.99,
        },
        {
          id: 2,
          icon: "coffee-3.jpg",
          name: "AROMISTICO Coffee 1kg",
          country: "Brazil",
          price: 6.99,
        },
        {
          id: 3,
          icon: "coffee-3.jpg",
          name: "Solimo Coffee Beans 2kg",
          country: "Brazil",
          price: 10.73,
        },
        {
          id: 4,
          icon: "coffee-3.jpg",
          name: "Presto Coffee Beans 1kg",
          country: "Brazil",
          price: 15.99,
        },
        {
          id: 5,
          icon: "coffee-3.jpg",
          name: "AROMISTICO Coffee 1kg",
          country: "Brazil",
          price: 6.99,
        },
      ],
    };
  },
};
</script>
