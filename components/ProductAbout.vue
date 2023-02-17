<template lang="pug">
.prodAbout
  h2.prodTitle.fontSerif #[slot(v-if="showCustom") Custom] {{content.title}}

  p(v-if="showCustom").prodTxt.fontSerif Handcrafted in the U.S | Free Shipping  | Custom items are non-returnable. 
    br
    a(href='#') *Exclusions Apply

  p(v-else).prodTxt.fontSerif Handcrafted in the U.S | Free Shipping &amp; Exchanges* 
    br
    a(href='#') *Exclusions Apply

  p.prodRating.flexBox.flexAic
    img(src='https://res.cloudinary.com/ironabode/image/upload/v1663031619/rating_fekjux.svg' alt='')
    a(href='#') {{ productReviews.length }} REVIEWS
</template>

<script setup>
let {content, showCustom} = defineProps(['content', 'showCustom']);
const { productReviews } = useActivity()
</script>