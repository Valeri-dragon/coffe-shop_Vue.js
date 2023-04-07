<template>
   <main>
    <div class="preview">
      <div class="container">
        <div class="row">
          <div class="col">
            <nav-bar-component />
          </div>
        </div>
         </div>
        <div class="row">
          <div class="col-lg-10 offset-lg-1">
            <title-item :title="privacy.title" />
            <img
              class="beanslogo"
              src="@/assets/logo/Beans_logo.svg"
              alt="Beans logo"
            />
          </div>
        </div>
      </div>
   </main>
</template>
<script>

import TitleItem from "@/components/TitleItem.vue";

export default{
 components: {
      TitleItem,
  },
  computed: {
    privacy() {
      return this.$store.getters["getPrivacy"];
    },
  },
}
</script>
