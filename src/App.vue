<template>
  <div class="wrapper">

     <router-view />
  </div>
</template>

<script>
import HeroView from "@/views/HeroView.vue";
export default {
  components: {
    HeroView,
     },
};
</script>

<style></style>
