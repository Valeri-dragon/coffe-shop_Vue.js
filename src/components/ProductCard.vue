<template>
  <div :class="classItem" @click="onEmit(card.id)">
    <img
      :src="card.img"
      :alt="card.img.substring(0, card.img.length - 4)"
    />
    <div class="best__item-title">{{ card.name }}</div>
    <div class="shop__item-country">{{ card.country }}</div>
    <div class="best__item-price">{{ card.price }}</div>
  </div>
</template>
<script>
export default {
  props: {
       classItem: {
      type: String,
      required: false,
    },
    card: {
      type: Object,
      required: true,
    }
  },
  methods:{
    onEmit(id){
      this.$emit('onNavigate', id)
    }
  }
};
</script>