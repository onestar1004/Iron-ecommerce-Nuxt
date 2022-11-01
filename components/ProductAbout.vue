<template lang="pug">
.prodAbout
  h2.prodTitle.fontSerif #[slot(v-if="showCustom") Custom] {{content.title}}

  p.prodTxt.fontSerif Handcrafted in the U.S | Free Shipping &amp; Exchanges* 
    br
    a(href='#') *Exclusions Apply

  p.prodRating.flexBox.flexAic
    img(src='https://res.cloudinary.com/ironabode/image/upload/v1663031619/rating_fekjux.svg' alt='')
    a(href='#') 5 REVIEWS
</template>

<script setup>
let {content, showCustom} = defineProps(['content', 'showCustom']);
</script>