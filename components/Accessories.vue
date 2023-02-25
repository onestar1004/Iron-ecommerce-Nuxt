<template lang="pug">
.guide.wrapper
  section.nArrBnr
    .nABnrTxt
      h3.fontSerif.fw400 Accessories
      p Luxury shelving units easily customized by you in minutes and handcrafted by us in a few weeks.
    .nAbnrImg
      img(src='https://res.cloudinary.com/ironabode/image/upload/v1663031631/banner-na-1_hzk1wx.png' alt='')
  section.nArrFltr.filterBox
    .container
      filter-strip(:items="filterItems")
  section.nArrPrtBn(v-if="!filters.length || filters.includes('Shelving')" style='margin-top: 150px;')
    .container(id="f-Blanket-Ladders")
      .nAPrtBnB
        .nABnrTxt
          h3.fontSerif.fw400 Blanket Ladders
          p Luxury ladders easily customized by you in minutes and handcrafted by us in a few weeks.
        .imgBox
          img(src='https://res.cloudinary.com/ironabode/image/upload/v1665179503/Blanket_Ladder-78_-Black-Aug_rsbd17.png' alt='')
  section.nArrPrdt(v-if="!filters.length || filters.includes('Shelving')")
    .container
      .nAPrdtGrid
        ProductItem(
          title="Theo Ladder"
          type="Wall Mounted"
          price="$521"
          href="/theo-ladder/"
          imageUrl="https://res.cloudinary.com/ironabode/image/upload/v1677285307/fasdfasdf_rumkvy.jpg",
          imageAlt=""
        )
        ProductItem(
          title="Margot Ladder"
          type="Wall Mounted"
          price="$521"
          href="/margot-ladder/"
          imageUrl="https://res.cloudinary.com/ironabode/image/upload/v1677285366/awefasdfadfbade_fht22v.jpg",
          imageAlt=""
        )
  section.nArrPrtBn.bgGray(v-if="!filters.length || filters.includes('Accessories')")
    .container(id="f-Wall-Hooks")
      .nAPrtBnB
        .nABnrTxt
          h3.fontSerif.fw400 Wall Hooks
          p Luxury hooks are easily customized by you in minutes and handcrafted by us in a few weeks.
        .imgBox
          img(src='https://res.cloudinary.com/ironabode/image/upload/v1663031585/banner-na-4_p6ga0l.png' alt='')
  section.nArrPrdt(v-if="!filters.length || filters.includes('Accessories')")
    .container
      .nAPrdtGrid
        ProductItem(
          title="Modern Wall Hooks"
          type="Wall Mounted"
          price="$330"
          href="/modern-wall-hooks/"
          imageUrl="https://res.cloudinary.com/ironabode/image/upload/v1677285411/adsfaefahaea_efcxjp.jpg",
          imageAlt=""
        )
  section.uniqSec
    .container
      h3.secTitle.txtCenter WHAT MAKES OUR SHELVING UNIQUE
    .uniqBox
      .container
        .uniqRow
          .uniqCard
            div
              img(src='https://res.cloudinary.com/ironabode/image/upload/v1663031627/uniq-1_kbnoiw.svg' alt='')
            p Fast Turnaround Times
          .gapLine
          .uniqCard
            div
              img(src='https://res.cloudinary.com/ironabode/image/upload/v1663031627/uniq-2_mrz7vn.svg' alt='')
            p 2 Year Warranty
          .gapLine
          .uniqCard
            div
              img(src='https://res.cloudinary.com/ironabode/image/upload/v1663031628/uniq-3_rh8zg8.svg' alt='')
            p 100% Handcrafted in the USA
  section.breadcrumbBox
    .container
      ul.breadcrumb.flexBox.flexJcc.flexAic.noList
        li.bcItem
          a(href='#') Home
        li.bcItem
          a(href='#') Collections
        li.bcItem.active New Arrivals
  Footer


</template>

<script setup>
let filters = $ref([]);
const filterItems = ref([
  {
    id: 'f-Blanket-Ladders',
    text: 'Blanket Ladders'
  },
  {
    id: 'f-Wine-Pot-Racks',
    text: 'Wine & Pot Racks'
  },
  {
    id: 'f-Wall-Hooks',
    text: 'Wall Hooks'
  }
]);
</script>