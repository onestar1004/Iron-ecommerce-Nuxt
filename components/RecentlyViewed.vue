<template lang="pug">
#tabRecentlyViewed.tabPanel.active
  .tabRcnt
    .tCmnCrdGrid
      .tCmnCard(v-for="product in products")
        .tCmnCardMn: NuxtLink(:to="'/'+product.url"): img(:src="getImage({image: product.content.gallery[0].src, width: 900, height: 900, type: 'c_fill'})" v-if="product.content.gallery[0]" style="width: 100%;")
        .tCmnCardInfo.txtCenter
          h6.tCmnCdNm {{product.title}}
          p.tCmnCdPr
            //- span.oldPr $368.00
            span.newPr {{currency(product.content.price)}}
          //- .tCmnCdStar
          //-   img(src='https://res.cloudinary.com/ironabode/image/upload/v1663031624/star-yellow_lylwvo.svg' alt='')
</template>

<script setup>
let products = $ref([]);

onMounted(async () => {
  products = await fetchPost('/api/get-recently-viewed');
})
</script>