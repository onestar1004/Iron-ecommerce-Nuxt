<template lang="pug">
.guide.wrapper
section.nArrBnr
  .nABnrTxt
    h3.fontSerif.fw400 Walnut Shelving Units
    p Luxury walnut shelving units easily customized by you in minutes and handcrafted by us in a few weeks.
  .nAbnrImg
    img(src='https://res.cloudinary.com/ironabode/image/upload/v1668163265/esme_walnut-_shelf_styling-2_q6mrrf.png' alt='')
section.nArrFltr.filterBox
  .container
    .fltrAll
      h4 FILTERS
      .fltrList.flexBox.flexWrap
        .fltrOptn(v-for="item in filterItems" :key="item.id")
          a(v-if="'routePath' in item" :href="item.routePath") {{ item.text }}
          a(v-else :href="`#${item.id}`") {{ item.text }}
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
  .container(id="f-Ceiling-Mounted")
    .nAPrtBnB
      .nABnrTxt
        h3.fontSerif.fw400 Ceiling Mounted Units
        p Browse our selection of ceiling-mounted shelving units. Click on your favorite style below to start customizing your own unit.
      .imgBox
        img(src='https://res.cloudinary.com/ironabode/image/upload/v1668596000/Black-Monty-One-Inch-Walnut-Thick-Wood_yx97mc.png' alt='')
section.nArrPrdt(v-if="!filters.length || filters.includes('Shelving')")
  .container
    .nAPrdtGrid
      ProductItem(
        title="Riviera Unit"
        type="Ceiling Mounted"
        price="$543"
        href="/riviera-shelving-unit/"
        imageUrl="https://res.cloudinary.com/ironabode/image/upload/v1669519907/Black-Riviera-_oneinch-_Walnut_pxlryr.png",
        imageAlt=""
      )
      ProductItem(
        title="Monty Unit"
        type="Ceiling Mounted"
        price="$528"
        href="/monty-shelving-unit/"
        imageUrl="https://res.cloudinary.com/ironabode/image/upload/v1669519942/Repeat_Grid_1_zaaqd7.png",
        imageAlt=""
      )
      ProductItem(
        title="Oslo Unit"
        type="Ceiling Mounted"
        price="$528"
        href="/oslo-shelving-unit/"
        imageUrl="https://res.cloudinary.com/ironabode/image/upload/v1669519965/Oslo-Black-half-walnut-2_x5hfvr.png",
        imageAlt=""
      )
    .btnBox.txtCenter
      a.btn.btnBg.btnWhiteBB(href='/complete-shelving-units/') SEE MORE SHELVING UNITS
section.nArrPrtBn.bgGray(v-if="!filters.length || filters.includes('Brackets')")
  .container(id="f-Wall-Mounted")
    .nAPrtBnB
      .nABnrTxt
        h3.fontSerif.fw400 Wall Mounted Units
        p Browse our selection of wall-mounted shelving units. Click on your favorite style below to start customizing.
      .imgBox
        img(src='https://res.cloudinary.com/ironabode/image/upload/v1663031585/banner-na-5_jcrydu.png' alt='')
section.nArrPrdt(v-if="!filters.length || filters.includes('Brackets')")
  .container
    .nAPrdtGrid
      ProductItem(
        title="Hugo Unit"
        type="Wall Mounted"
        price="$528"
        href="/monty-bracket/"
        imageUrl="https://res.cloudinary.com/ironabode/image/upload/v1668597583/Black-hugo-half-walnut-shelves_ftipta.png",
        imageAlt=""
      )
      ProductItem(
        title="Esme Unit"
        type="Wall Mounted"
        price="$1,063"
        href="/hugo-bracket/"
        imageUrl="https://res.cloudinary.com/ironabode/image/upload/v1668597610/ESME-BLACK-BRACKETS-WALNUT-UNIT_nr4z1o.png",
        imageAlt=""
      )
      ProductItem(
        title="Leo Unit"
        type="Wall Mounted But Stabilized in the Ceiling"
        price="$528"
        href="/roux-bracket/"
        imageUrl="https://res.cloudinary.com/ironabode/image/upload/v1668597634/black-walnut-leo-one-shelf-unit_z4msxo.png",
        imageAlt=""
      )
    .btnBox.txtCenter
      a.btn.btnBg.btnWhiteBB(href='/shelf-brackets/') SEE MORE BRACKETS
section.nArrPrtBn.bgGray(v-if="!filters.length || filters.includes('Accessories')")
  .container(id="f-Standing-Units")
    .nAPrtBnB
      .nABnrTxt
        h3.fontSerif.fw400 Standing Units
        p Browse our selection of standing shelving units. Click on your favorite style below to start customizing.
      .imgBox
        img(src='https://res.cloudinary.com/ironabode/image/upload/v1668597764/Black-faye-half-walnut-shelves_jiohd1.png' alt='')
section.nArrPrdt(v-if="!filters.length || filters.includes('Accessories')")
  .container
    .nAPrdtGrid
      ProductItem(
        title="Roux Unit"
        type="Wall Mounted but Stabilized on the Floor"
        price="$1,265"
        href="/78-round-iron-blanket-ladder/"
        imageUrl="https://res.cloudinary.com/ironabode/image/upload/v1668597924/Roux-glass-unit-BLACK-all-colors-Recovered_mrofhp.png",
        imageAlt=""
      )
      ProductItem(
        title="Faye Unit"
        type="Wall Mounted but Stabilized on the Floor"
        price="$1,111"
        href="/fitz-potrack-towel-holder/"
        imageUrl="https://res.cloudinary.com/ironabode/image/upload/v1668597953/leo-1-inch-walnut-flatlay_cm7e12.png",
        imageAlt=""
      )
    .btnBox.txtCenter
      a.btn.btnBg.btnWhiteBB(href='/accessories/') SEE MORE ACCESSORIES
//- section.nArrPrtBn.bgGray(v-if="!filters.length || filters.includes('Ready')")
//-   .container
//-     .nAPrtBnB
//-       .nABnrTxt
//-         h3.fontSerif.fw400 Ready to Ship
//-         p These items are in-stock and ready to ship in only 3-4 days for no additional cost.
//-       .imgBox
//-         img(src='https://res.cloudinary.com/ironabode/image/upload/v1663031585/banner-na-5_jcrydu.png' alt='')
//- section.nArrPrdt(v-if="!filters.length || filters.includes('Ready')")
//-   .container
//-     .nAPrdtGrid
//-       .nAPdCd
//-         div
//-           img(src='https://res.cloudinary.com/ironabode/image/upload/v1663031605/new-arrival-41_jjjvq4.png' alt='')
//-         .nAPdCdTxt
//-           h5 Riviera Bracket
//-           p.smallTxt Ceiling Mounted
//-           p From $110
//-       .nAPdCd
//-         div
//-           img(src='https://res.cloudinary.com/ironabode/image/upload/v1663031605/new-arrival-42_edhwd6.png' alt='')
//-         .nAPdCdTxt
//-           h5 Monty Bracket
//-           p.smallTxt Ceiling Mounted
//-           p From $102
//-       .nAPdCd
//-         div
//-           img(src='https://res.cloudinary.com/ironabode/image/upload/v1663031605/new-arrival-43_xs8qwa.png' alt='')
//-         .nAPdCdTxt
//-           h5 Oslo Bracket
//-           p.smallTxt Ceiling Mounted
//-           p From $102
//-     .btnBox.txtCenter
//-       a.btn.btnBg.btnWhiteBB(href='#') SEE MORE READY TO SHIP
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
    id: 'f-Ceiling-Mounted',
    text: 'Ceiling-Mounted'
  },
  {
    id: 'f-Wall-Mounted',
    text: 'Wall-Mounted'
  },
  {
    id: 'f-Standing-Units',
    text: 'Standing Units'
  },
  {
    id: 'f-Glass-Shelves',
    text: 'Glass Shelves'
  },
  {
    id: 'f-Metal-Shelves',
    text: 'Metal Shelves'
  },
  {
    id: 'f-Walnut-Shelves',
    text: 'Walnut Shelves'
  }
]);
</script>
  