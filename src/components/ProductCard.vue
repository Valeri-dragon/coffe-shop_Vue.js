<template>
 <div :class="ClassItem">
                <img 
                :src="require(`@/assets/img/${img}`)" :alt="img.substring(0, img.length - 4)" />
                <div class="best__item-title">{{ name }}</div>
                 <div class="shop__item-country">{{ country }}</div>
                <div class="best__item-price">{{price}}$</div>
              </div>
</template>
<script>

export default {
  props:{
    name:{
type: String,
required: true,
    },
    price:{
type: Number,
required: true,
    },
    img:{
type: String,
required: true,
    },
    country:{
      default:'',
      type: String,
    },
     ClassItem:{
type: String,
required: false,
    },
  }
}
</script>
