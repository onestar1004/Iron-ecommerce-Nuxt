<template lang="pug">
.guide.wrapper
Header
section.nArrBnr
  .nABnrTxt
    h3.fontSerif.fw400 Ready to Ship
    p These items are in-stock and ready to ship in only 4-6 days for no additional cost.
  .nAbnrImg
    img(src='https://res.cloudinary.com/ironabode/image/upload/v1663031631/banner-na-1_hzk1wx.png' alt='')
section.nArrFltr.filterBox
  .container
    .fltrAll
      h4 FILTERS
      .fltrList.flexBox.flexWrap
        .fltrOptn(v-for="item in filterItems" :key="item.id")
          a(href='#') {{ item.text }}
section.nArrHow
  .container
    .secTop.txtCenter
      h3.secTitle HOW IT WORKS
    .nAHowBox.flexBox.flexJcc.flexWrap
      .nAHowCd
        div
          img(src='https://res.cloudinary.com/ironabode/image/upload/v1663031593/howStep-1_m85fnf.svg' alt='')
        h5 CHOOSE YOUR UNIT STYLE
      .nAHowCd(style="display: none;")
        div
          img(src='https://res.cloudinary.com/ironabode/image/upload/v1663031593/howStep-2_xie0qa.svg' alt='')
        h5 CHOOSE YOUR SHELVES
      .nAHowCd
        div
          img(src='https://res.cloudinary.com/ironabode/image/upload/v1668598240/Group_783_xmp9lk.png' alt='')
        h5 CHOOSE YOUR FINISH
      .nAHowCd
        div
          img(src='https://res.cloudinary.com/ironabode/image/upload/v1663031594/howStep-4_izwjdk.svg' alt='')
        h5 CHOOSE YOUR SIZE
section.nArrPrtBn(v-if="!filters.length || filters.includes('Shelving')")
  .container
    .nAPrtBnB
      .nABnrTxt
        h3.fontSerif.fw400 Ceiling Mounted
        p Browse our selection of ceiling-mounted shelving brackets below. Each bracket is sold individually.
      .imgBox
        img(src='https://res.cloudinary.com/ironabode/image/upload/v1668598317/Oslo-One-Black_Ironabode_sbozxd.png' alt='')
section.nArrPrdt(v-if="!filters.length || filters.includes('Shelving')")
  .container
    .nAPrdtGrid
      .nAPdCd
        a(href='/riviera-shelving-unit/')
          img(src='https://res.cloudinary.com/ironabode/image/upload/v1668598630/riviera-glass-unit-with-round-mounts-iron-abode_zn6iqe.png' alt='')
        .nAPdCdTxt
          h5 Riviera Bracket
          p.smallTxt Ceiling Mounted
          p From $116
      .nAPdCd
        a(href='/monty-shelving-unit/')
          img(src='https://res.cloudinary.com/ironabode/image/upload/v1668598663/black-monty-brackets-halfinch_cu76hr.png' alt='')
        .nAPdCdTxt
          h5 Monty Bracket
          p.smallTxt Ceiling Mounted
          p From $107
      .nAPdCd
        a(href='/oslo-shelving-unit/')
          img(src='https://res.cloudinary.com/ironabode/image/upload/v1668598695/Black-Oslo-1inch-Brackets-4_sacamw.png' alt='')
        .nAPdCdTxt
          h5 Oslo Bracket
          p.smallTxt Ceiling Mounted
          p From $107
    .btnBox.txtCenter
      a.btn.btnBg.btnWhiteBB(href='/complete-shelving-units/') SEE MORE SHELVING UNITS
section.nArrPrtBn.bgGray(v-if="!filters.length || filters.includes('Brackets')")
  .container
    .nAPrtBnB
      .nABnrTxt
        h3.fontSerif.fw400 Wall Mounted
        p Browse our selection of ceiling-mounted shelving brackets below. Each bracket is sold individually.
      .imgBox
        img(src='https://res.cloudinary.com/ironabode/image/upload/v1668598444/Hugo-Half-Bracket-Black-_dinasdigs_lryrcx.png' alt='')
section.nArrPrdt(v-if="!filters.length || filters.includes('Brackets')")
  .container
    .nAPrdtGrid
      .nAPdCd
        a(href='/monty-bracket/')
          img(src='https://res.cloudinary.com/ironabode/image/upload/v1668598843/Black-Hugo-1inch-Brackets-5_whddry.png' alt='')
        .nAPdCdTxt
          h5 Hugo Bracket
          p.smallTxt Wall Mounted
          p From $107
      .nAPdCd
        a(href='/hugo-bracket/')
          img(src='https://res.cloudinary.com/ironabode/image/upload/v1668598799/Esme-brackets-black-2-2_xshfla.png' alt='')
        .nAPdCdTxt
          h5 Esme Bracket
          p.smallTxt Wall Mounted
          p From $218
      .nAPdCd
        a(href='/roux-bracket/')
          img(src='https://res.cloudinary.com/ironabode/image/upload/v1668598817/Black-Leo-Brass-1_Inch-Brackets-4_sgemva.png' alt='')
        .nAPdCdTxt
          h5 Leo Bracket
          p.smallTxt Wall Mounted but Stabilized in the Ceiling
          p From $107
    .btnBox.txtCenter
      a.btn.btnBg.btnWhiteBB(href='/shelf-brackets/') SEE MORE BRACKETS
section.nArrPrtBn.bgGray(v-if="!filters.length || filters.includes('Accessories')")
  .container
    .nAPrtBnB
      .nABnrTxt
        h3.fontSerif.fw400 Blanket Ladders
        p Browse our selection of ceiling-mounted shelving units. Click on your favorite style below to start customizing.
      .imgBox
        img(src='https://res.cloudinary.com/ironabode/image/upload/v1668598922/Blanket_Ladder-78_-Black-Aug_egonrc.png' alt='')
section.nArrPrdt(v-if="!filters.length || filters.includes('Accessories')")
  .container
    .nAPrdtGrid
      .nAPdCd
        a(href='/78-round-iron-blanket-ladder/')
          img(src='https://res.cloudinary.com/ironabode/image/upload/v1663031604/new-arrival-31_tjkfoy.png' alt='')
        .nAPdCdTxt
          h5 Margot Blanket Ladder
          p.smallTxt Wall Mounted
          p From $347
      .nAPdCd
        a(href='/fitz-potrack-towel-holder/')
          img(src='https://res.cloudinary.com/ironabode/image/upload/v1668599137/Minimalist_Ladder-White_Background_l5wfvn.png' alt='')
        .nAPdCdTxt
          h5 Theo Blanket Ladder
          p.smallTxt Ceiling Mounted
          p From $161
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
section.nArrPrtBn.bgGray(v-if="!filters.length || filters.includes('Accessories')")
  .container
    .nAPrtBnB
      .nABnrTxt
        h3.fontSerif.fw400 Wine &amp; Pot Racks
        p Browse our selection of wall-mounted shelving units. Click on your favorite style below to start customizing.
      .imgBox
        img(src='https://res.cloudinary.com/ironabode/image/upload/v1668599414/Hugo-Half-Bracket-Black-_dinasdigs_mkp9iz.png' alt='')
section.nArrPrdt(v-if="!filters.length || filters.includes('Accessories')")
  .container
    .nAPrdtGrid
      .nAPdCd
        a(href='/78-round-iron-blanket-ladder/')
          img(src='https://res.cloudinary.com/ironabode/image/upload/v1668599499/New_Wine_Rack_1-white_background_nttsds.png' alt='')
        .nAPdCdTxt
          h5 René Wine Rack
          p.smallTxt Wall Mounted
          p From $21
      .nAPdCd
        a(href='/fitz-potrack-towel-holder/')
          img(src='https://res.cloudinary.com/ironabode/image/upload/v1668599536/Pot_Holder_Black-_White_Backgroud_hruvfw.png' alt='')
        .nAPdCdTxt
          h5 Fitz Pot/ Towel Bar
          p.smallTxt Wall Mounted
          p From $75
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
section.nArrPrtBn.bgGray(v-if="!filters.length || filters.includes('Accessories')")
  .container
    .nAPrtBnB
      .nABnrTxt
        h3.fontSerif.fw400 Wall Hooks
        p Browse our selection of standing shelving units. Click on your favorite style below to start customizing.
      .imgBox
        img(src='https://res.cloudinary.com/ironabode/image/upload/v1668599592/roux-glass-unit_20_thesmittencollective_mb3wcb.png' alt='')
section.nArrPrdt(v-if="!filters.length || filters.includes('Accessories')")
  .container
    .nAPrdtGrid
      .nAPdCd
        a(href='/78-round-iron-blanket-ladder/')
          img(src='https://res.cloudinary.com/ironabode/image/upload/v1668599788/Roux-glass-unit-BLACK-all-colors-Recovered_crukft.png' alt='')
        .nAPdCdTxt
          h5 Remi Wall Hook
          p.smallTxt Wall Mounted
          p From $104
      .nAPdCd
        a(href='/fitz-potrack-towel-holder/')
          img(src='https://res.cloudinary.com/ironabode/image/upload/v1668599755/Roux-glass-unit-BLACK-all-colors-Recovered-2_ao1q4v.png' alt='')
        .nAPdCdTxt
          h5 Wall Hook
          p.smallTxt Wall Mounted
          p From $35
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
    id: 'f-Wall-Mounted',
    text: 'Wall-Mounted'
  },
  {
    id: 'f-Ceiling-Mounted',
    text: 'Ceiling-Mounted'
  },
  {
    id: 'f-Accessories',
    text: 'Accessories'
  }
]);
</script>
  