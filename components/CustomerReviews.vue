<template lang="pug">
section.prodRev
  .container
    .secTop.txtCenter
      h3.secTitle CUSTOMER REVIEWS
      .totalRev.flexBox.flexJcc.flexAic
        img(src='https://res.cloudinary.com/ironabode/image/upload/v1663031624/stars_lh28ui.svg' alt='')
        span {{ reviews.length }} REVIEWS
    .revFltr.flexBox.flexAic
      //- p Sort:
      //- div
      //-   select.cSelect
      //-     option(selected='' hidden='') Select
      //-     option(value='') Low to High
      //-     option(value='') High to Low
    .revBox
      .revRow(v-for="item in reviews" :key="item.id")
        .revUsr
          h5.revUsrNm {{ item.user.fullName }}
          p.revUsrTag(v-if="item.isVerifiedBuyer") Verified Buyer
          div
            img.revUsrStr(src='https://res.cloudinary.com/ironabode/image/upload/v1663031624/stars_lh28ui.svg' alt='')
          p.revUsrDt {{ item.reviewData }}
        .revPara
          h5
            | {{ item.review.title }}
          p.fontSerif.fw500 {{ item.review.info }}
          a.fontSerif.fw500(href='#') {{ item.product.text }}
</template>

<script setup>
const props = defineProps(['reviews'])
</script>