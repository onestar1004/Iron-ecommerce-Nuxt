<template lang="pug">
.guide.wrapper
section.nArrBnr
  .nABnrTxt
    h3.fontSerif.fw400 New Arrivals
    p Luxury shelving units easily customized by you in minutes and handcrafted by us in a few weeks.
  .nAbnrImg
    img(src='https://res.cloudinary.com/ironabode/image/upload/v1663031631/banner-na-1_hzk1wx.png' alt='')
section.nArrFltr.filterBox
  .container
    filter-strip(:items="filterItems")
section.nArrHow
  .container
    .secTop.txtCenter
      h3.secTitle HOW IT WORKS
    .nAHowBox.flexBox.flexJcc.flexWrap
      .nAHowCd
        div
          img(src='https://res.cloudinary.com/ironabode/image/upload/v1663031593/howStep-1_m85fnf.svg' alt='')
        h5 CHOOSE YOUR UNIT STYLE
      .nAHowCd
        div
          img(src='https://res.cloudinary.com/ironabode/image/upload/v1663031593/howStep-2_xie0qa.svg' alt='')
        h5 CHOOSE YOUR SHELVES
      .nAHowCd
        div
          img(src='https://res.cloudinary.com/ironabode/image/upload/v1663031593/howStep-3_qkzw9f.svg' alt='')
        h5 CHOOSE YOUR FINISH AND ADD-ONS
      .nAHowCd
        div
          img(src='https://res.cloudinary.com/ironabode/image/upload/v1663031594/howStep-4_izwjdk.svg' alt='')
        h5 CHOOSE YOUR SIZE
section.nArrPrtBn(v-if="!filters.length || filters.includes('Shelving')")
  .container(id="f-Shelving-Units")
    .nAPrtBnB
      .nABnrTxt
        h3.fontSerif.fw400 Shelving Units
        p Luxury shelving units easily customized by you in minutes and handcrafted by us in a few weeks.
      .imgBox
        img(src='https://res.cloudinary.com/ironabode/image/upload/v1663031585/banner-na-2_dohl0x.png' alt='')
section.nArrPrdt(v-if="!filters.length || filters.includes('Shelving')")
  .container
    .nAPrdtGrid
      ProductItem(
        title="Riviera Unit"
        type="Ceiling Mounted"
        price="$521"
        href="/riviera-shelving-unit/"
        imageUrl="https://res.cloudinary.com/ironabode/image/upload/v1663031603/new-arrival-11_y9tago.png",
        imageAlt=""
      )
      ProductItem(
        title="Monty Unit"
        type="Ceiling Mounted"
        price="$506"
        href="/monty-shelving-unit/"
        imageUrl="https://res.cloudinary.com/ironabode/image/upload/v1663031603/new-arrival-12_gcq5lm.png",
        imageAlt=""
      )
      ProductItem(
        title="Oslo Unit"
        type="Ceiling Mounted"
        price="$506"
        href="/oslo-shelving-unit/"
        imageUrl="https://res.cloudinary.com/ironabode/image/upload/v1663031603/new-arrival-13_ze12vn.png",
        imageAlt=""
      )
    .btnBox.txtCenter
      a.btn.btnBg.btnWhiteBB(href='/complete-shelving-units/') SEE MORE SHELVING UNITS
section.nArrPrtBn.bgGray(v-if="!filters.length || filters.includes('Brackets')")
  .container(id="f-Brackets")
    .nAPrtBnB
      .nABnrTxt
        h3.fontSerif.fw400 Brackets
        p Luxury shelving brackets are easily customized by you in minutes and handcrafted by us in a few weeks.
      .imgBox
        img(src='https://res.cloudinary.com/ironabode/image/upload/v1663031585/banner-na-5_jcrydu.png' alt='')
section.nArrPrdt(v-if="!filters.length || filters.includes('Brackets')")
  .container
    .nAPrdtGrid
      ProductItem(
        title="Monty Bracket"
        type="Ceiling Mounted"
        price="$102"
        href="/monty-bracket/"
        imageUrl="https://res.cloudinary.com/ironabode/image/upload/v1663031603/new-arrival-21_o270or.png",
        imageAlt=""
      )
      ProductItem(
        title="Hugo Bracket"
        type="Wall Mounted"
        price="$102"
        href="/hugo-bracket/"
        imageUrl="https://res.cloudinary.com/ironabode/image/upload/v1663031604/new-arrival-22_dpaxca.png",
        imageAlt=""
      )
      ProductItem(
        title="Roux Bracket"
        type="Wall mounted and stabilized on floor or counter"
        price="$309"
        href="/roux-bracket/"
        imageUrl="https://res.cloudinary.com/ironabode/image/upload/v1663031604/new-arrival-23_jkfh5f.png",
        imageAlt=""
      )
    .btnBox.txtCenter
      a.btn.btnBg.btnWhiteBB(href='/shelf-brackets/') SEE MORE BRACKETS
section.nArrPrtBn.bgGray(v-if="!filters.length || filters.includes('Accessories')")
  .container(id="f-Accessories")
    .nAPrtBnB
      .nABnrTxt
        h3.fontSerif.fw400 Accessories
        p Luxury accessories are easily customized by you in minutes and handcrafted by us in a few weeks.
      .imgBox
        img(src='https://res.cloudinary.com/ironabode/image/upload/v1663031585/banner-na-4_p6ga0l.png' alt='')
section.nArrPrdt(v-if="!filters.length || filters.includes('Accessories')")
  .container
    .nAPrdtGrid
      ProductItem(
        title="Theo Ladder"
        type="Wall Mounted"
        price="$330"
        href="/theo-ladder/"
        imageUrl="https://res.cloudinary.com/ironabode/image/upload/v1677285307/fasdfasdf_rumkvy.jpg",
        imageAlt=""
      )
      ProductItem(
        title="Margot Ladder"
        type="Wall Mounted"
        price="$75"
        href="/margot-ladder/"
        imageUrl="https://res.cloudinary.com/ironabode/image/upload/v1677285366/awefasdfadfbade_fht22v.jpg",
        imageAlt=""
      )
      ProductItem(
        title="Modern Wall Hooks"
        type="Wall Mounted"
        price="$99"
        href="/modern-wall-hooks/"
        imageUrl="https://res.cloudinary.com/ironabode/image/upload/v1677285411/adsfaefahaea_efcxjp.jpg",
        imageAlt=""
      )
    .btnBox.txtCenter
      a.btn.btnBg.btnWhiteBB(href='/accessories/') SEE MORE ACCESSORIES

section.uniqSec(style='margin-top: 60px;')
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
    id: 'f-Shelving-Units',
    text: 'Shelving Units'
  },
  {
    id: 'f-Brackets',
    text: 'Brackets'
  },
  {
    id: 'f-Accessories',
    text: 'Accessories'
  }
]);
</script>