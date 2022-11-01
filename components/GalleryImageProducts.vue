<template lang="pug">
.popupWrapper
  .popupBG(@click="$emit('close')")
  .popup
    .popupHeading Products In Image
    .Category
      .productGrid
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