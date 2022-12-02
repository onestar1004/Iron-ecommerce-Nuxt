<template lang="pug">
.pageWrapper
  .Category
    h1.title {{content.title}}

    .container
      .productGrid
        .product(v-for="product in products")
          NuxtLink(:to="'/'+product.url")
            .image(v-if="product.gallery && product.gallery[0]"): img(:src="getImage({image: product.gallery[0].src, width: 500, height: 300, type: 'c_fill'})")
            .productTitle {{product.title}}
            .price {{currency(product.price)}}
            .rating #[i.fas.fa-star] #[i.fas.fa-star] #[i.fas.fa-star] #[i.fas.fa-star] #[i.fas.fa-star]

  Footer
</template>

<script setup>
let {content, products, parent_content} = defineProps(['content', 'products', 'parent_content']);
let url = useRoute().params.url;

function hasCategoryFilter(category) {
  let hasCategoryFilter = false;

  if(content.category_filters && content.category_filters.length) {
    for(let filter of content.category_filters) {
      if(filter.label == category) {
        hasCategoryFilter = true;
        break;
      }
    }
  }

  if(parent_content && parent_content.category_filters && parent_content.category_filters.length) {
    for(let filter of parent_content.category_filters) {
      if(filter.label == category) {
        hasCategoryFilter = true;
        break;
      }
    } 
  }

  return hasCategoryFilter;
}
</script>