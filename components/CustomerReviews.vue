<template lang="pug">
section.prodRev(id="customerReviews")
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
      .revRow(v-for="item in totalReviews" :key="item.id")
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
.pagination
  svg(xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" @click="paginate('previous')" v-if="!disableLeft")
    path(fill="currentColor" d="M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6l6 6l1.41-1.41z")
  span.pageNo {{ currentPage }}
  svg(xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" @click="paginate('next')" v-if="!disableRight")
    path(fill="currentColor" d="M8.59 16.59L13.17 12L8.59 7.41L10 6l6 6l-6 6l-1.41-1.41z")
</template>

<script setup>
const props = defineProps(['reviews'])
const currentPage = ref(1)
const totalReviews = ref([])
const disableLeft = ref(true)
const disableRight = ref(false)
const reviewsPerPage = 2
const paginate = (value) => {
  value === 'previous' ? currentPage.value -= 1 : currentPage.value +=  1
  const start = (currentPage.value - 1) * reviewsPerPage;
  const end = (currentPage.value - 1) * reviewsPerPage + reviewsPerPage;
  if (currentPage.value >= 1 && currentPage.value <= Math.round(Object.values(props.reviews).length / reviewsPerPage)) {
    disableLeft.value = false
    disableRight.value = false
    totalReviews.value = Object.values(props.reviews).slice(start, end)
  }
  if(currentPage.value === 1) {
    disableLeft.value = true
  }
  if(currentPage.value === Math.round(Object.values(props.reviews).length / reviewsPerPage)) {
    disableRight.value = true
  }
}
onMounted(() => {
  totalReviews.value = Object.values(props.reviews).slice(0, reviewsPerPage)
});
</script>

<style lang="sass" scoped>
  .pagination
    display: flex
    justify-content: center
    align-items: center
    .pageNo 
      font-size: 1rem
  .prodRev
    padding-bottom: 10px
</style>