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
        .nAPdCd
          a(href='/78-round-iron-blanket-ladder/')
            img(src='https://res.cloudinary.com/ironabode/image/upload/v1665179574/Round-Ladder-Black-Front-View-Whitebackground_ycj5y0.png' alt='')
          .nAPdCdTxt
            h5 Blanket Ladder
            p.smallTxt Wall Mounted
            p From $521
  section.nArrPrtBn.bgGray(v-if="!filters.length || filters.includes('Brackets')")
    .container(id="f-Wine-Pot-Racks")
      .nAPrtBnB
        .nABnrTxt
          h3.fontSerif.fw400 Wine & Pot Racks
          p Luxury racks are easily customized by you in minutes and handcrafted by us in a few weeks.
        .imgBox
          img(src='https://res.cloudinary.com/ironabode/image/upload/v1665179710/Hugo-Half-Brasscket-Black-_dinasdigs_pg2lae.png' alt='')
  section.nArrPrdt(v-if="!filters.length || filters.includes('Brackets')")
    .container
      .nAPrdtGrid
        .nAPdCd
          a(href='/wine-rack/')
            img(src='https://res.cloudinary.com/ironabode/image/upload/v1665179797/New_Wine_Rack_1-white_background_iivn2d.png' alt='')
          .nAPdCdTxt
            h5 Rene Wine Rack
            p.smallTxt Wall Mounted
            p From $102
        .nAPdCd
          a(href='/fitz-potrack-towel-holder/')
            img(src='https://res.cloudinary.com/ironabode/image/upload/v1665179796/Pot_Holder_Black-_White_Backgroud_diud4p.png' alt='')
          .nAPdCdTxt
            h5 Fitz Pot / Towel Bar
            p.smallTxt Wall Mounted
            p From $102
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
        .nAPdCd
          a(href='/remi-wall-hook/')
            img(src='https://res.cloudinary.com/ironabode/image/upload/v1665179932/Roux-glass-unit-BLACKdd-all-colors-Recovered_ssdmdt.png' alt='')
          .nAPdCdTxt
            h5 Remi Wall Hook
            p.smallTxt Wall Mounted
            p From $330
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