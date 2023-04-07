<template>
  <main>
    <div
      class="banner"
      :class="pageName === 'coffee' ? 'coffepage-banner' : 'goodspage-banner'" 
    >
  
      <div class="container">
        <div class="row">
          <div class="col-lg-6">
            <nav-bar-component />
          </div>
        </div>
        <title-item v-if="product" :title="product.name" />
      </div>
    </div>

    <section class="shop" v-if="product">
      <div class="container">
        <div class="row">
          <div class="col-lg-5 offset-1">
            <img
              class="shop__girl col-lg-12"
              :src="product.img"
              :alt="product.img.substring(0, product.img.length - 4)"
            />
          </div>
          <div class="col-lg-4">
            <div class="title">About it</div>
            <img
              class="beanslogo"
              src="@/assets/logo/Beans_logo_dark.svg"
              alt="Beans logo"
            />
            <div class="shop__point">
              <span>Country: </span>
              {{ product.country }}
            </div>
            <div class="shop__point">
              <span>Description:</span>
            {{product.description}}
            </div>
            <div class="shop__point">
              <span>Price:</span>
              <span class="shop__point-price" v-if="product">
                {{ product.price}}</span
              >
            </div>
          </div>
        </div>
      </div>
    </section>
    <footer-component />
  </main>
</template>
<script>
import TitleItem from "@/components/TitleItem.vue";

export default {
  components: { TitleItem },
 
  computed: {
    pageName() {
            return this.$route.name;
    },
       product() {
      return this.$store.getters["getData"]
    },
  },  mounted(){
fetch(`http://localhost:3000/${this.pageName}/${this.$route.params.id}`)
.then(res=>res.json())
.then((data)=>{
  this.$store.dispatch("setData",data)
})
   },
   destroyed(){
  this.$store.getters["getData"]
   },
};
</script>
