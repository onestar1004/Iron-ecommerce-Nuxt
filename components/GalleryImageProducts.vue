<template lang="pug">
.popupWrapper
  .popupBG(@click="$emit('close')")
  .popup(style="padding: 0;")
    .view-wrapper
      .image-view(:style="{ backgroundImage: `url(${galleryItem.image})`}")
      .content-view
        div(v-for="product in products")
          div
            img.pd-img(v-if="product.gallery && product.gallery[0]" :src="getImage({ image: product.gallery[0].src })")
          NuxtLink.btnSecondary(:to="'/'+product.url" style="{ padding: 5px; height: 0px; }") SHOP
          p.fontCormorant(style="font-size: 22px; margin-top: 16px; font-weight: medium;") {{ product.title }}
          p.fontAvenir {{currency(product.price)}}
      // .productGrid
        p {{ galleryItem }}
        .product(v-for="product in products")
          NuxtLink(:to="'/'+product.url")
            .image(v-if="product.gallery && product.gallery[0]"): img(:src="getImage({image: product.gallery[0].src, width: 500, height: 300, type: 'c_fill'})")
            .productTitle {{product.title}}
            .price {{currency(product.price)}}
</template>

<script setup>
let {galleryItem} = defineProps(['galleryItem']);
let product_ids = $ref([]);

for(let product of galleryItem.products) {
  if(product.product_id) {
    product_ids.push(product.product_id);
  }
}

let products = await fetchPost('/api/get-specific-products', {product_ids});
</script>

<style lang="scss" scoped>
.view-wrapper {
  display: grid;
  grid-template-columns: repeat(12, minmax(0, 1fr));
  height: 100%;
  min-height: 500px;

  .image-view {
    grid-column: span 6 / span 6;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }

  .content-view {
    grid-column: span 6 / span 6;
    padding: 64px 32px;

    .pd-img {
      width: auto;
      height: 198px;
    }
  }
}
</style>