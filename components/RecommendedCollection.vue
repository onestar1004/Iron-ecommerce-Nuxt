<template lang="pug">
section.collSec(v-if="content.recommended_category_label")
  div
    .collGrid
      .collInfo.clrWhite
        h3 {{content.recommended_category_label}}
        .fontSerif(v-html="content.recommended_category_description")
        NuxtLink.btn.btnBg.btnWhiteBd.btnTxtWht(:to="content.recommended_category_url") VIEW FULL COLLECTION
      .collGal.flexBox
        NuxtLink.collCard(v-for="product in content.recommended_products" :to="'/'+product.url")
          .collCdImg
            img(:src="getImage({image: product.gallery[0].src, width: 350, height: 350, type: 'c_fit'})" v-if="product.gallery[0]")
          .collCdInfo
            h5 {{product.title}}
            p {{currency(product.price)}}
</template>

<script setup>
let {content} = defineProps(['content']);
</script>