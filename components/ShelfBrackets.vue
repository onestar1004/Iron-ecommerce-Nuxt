<template lang="pug">
.guide.wrapper
section.nArrBnr
  .nABnrTxt
    h3.fontSerif.fw400 Shelving Brackets
    p Luxury shelving brackets easily customized by you in minutes and handcrafted by us in a few weeks.
  .nAbnrImg
    img(src='https://res.cloudinary.com/ironabode/image/upload/v1663031631/banner-na-1_hzk1wx.png' alt='')
section.nArrFltr.filterBox
  .container
    .fltrAll
      h4 FILTERS
      .fltrList.flexBox.flexWrap
        .fltrOptn
          a(href='#') Ceiling Mounted Units
        .fltrOptn
          a(href='#') Wall Mounted Units
        .fltrOptn
          a(href='#') Standing Units
        .fltrOptn
          a(href='#') Hidden Bracket Units

//- section.nArrHow
//-   .container
//-     .secTop.txtCenter
//-       h3.secTitle HOW IT WORKS
//-     .nAHowBox.flexBox.flexJcc.flexWrap
//-       .nAHowCd
//-         div
//-           img(src='https://res.cloudinary.com/ironabode/image/upload/v1663031593/howStep-1_m85fnf.svg' alt='')
//-         h5 CHOOSE YOUR Bracket STYLE
//-       .nAHowCd
//-         div
//-           img(src='https://res.cloudinary.com/ironabode/image/upload/v1663031593/howStep-2_xie0qa.svg' alt='')
//-         h5 CHOOSE YOUR SHELVES
//-       .nAHowCd
//-         div
//-           img(src='https://res.cloudinary.com/ironabode/image/upload/v1663031593/howStep-3_qkzw9f.svg' alt='')
//-         h5 CHOOSE YOUR FINISH AND ADD-ONS
//-       .nAHowCd
//-         div
//-           img(src='https://res.cloudinary.com/ironabode/image/upload/v1663031594/howStep-4_izwjdk.svg' alt='')
//-         h5 CHOOSE YOUR SIZE
section.nArrPrtBn(v-if="!filters.length || filters.includes('Shelving')")
  .container
    .nAPrtBnB
      .nABnrTxt
        h3.fontSerif.fw400 Ceiling Mounted Brackets
        p Browse our selection of ceiling-mounted shelving Brackets. Click on your favorite style below to start customizing your own Bracket.
      .imgBox
        img(src='https://res.cloudinary.com/ironabode/image/upload/v1663031585/banner-na-2_dohl0x.png' alt='')
section.nArrPrdt(v-if="!filters.length || filters.includes('Shelving')")
  .container
    .nAPrdtGrid
      ProductItem(
        title="Riviera Bracket"
        type="Ceiling Mounted"
        price="$521"
        href="/riviera-bracket/"
        imageUrl="https://res.cloudinary.com/ironabode/image/upload/v1663031603/new-arrival-11_y9tago.png",
        imageAlt=""
      )
      ProductItem(
        title="Monty Bracket"
        type="Ceiling Mounted"
        price="$506"
        href="/monty-bracket/"
        imageUrl="https://res.cloudinary.com/ironabode/image/upload/v1663031603/new-arrival-12_gcq5lm.png",
        imageAlt=""
      )
      ProductItem(
        title="Oslo Bracket"
        type="Ceiling Mounted"
        price="$506"
        href="/oslo-bracket/"
        imageUrl="https://res.cloudinary.com/ironabode/image/upload/v1663031603/new-arrival-13_ze12vn.png",
        imageAlt=""
      )
    //- .btnBox.txtCenter
    //-   a.btn.btnBg.btnWhiteBB(href='#') SEE MORE SHELVING Brackets
section.nArrPrtBn.bgGray(v-if="!filters.length || filters.includes('Brackets')")
  .container
    .nAPrtBnB
      .nABnrTxt
        h3.fontSerif.fw400 Wall Mounted Brackets
        p Browse our selection of wall-mounted shelving Brackets. Click on your favorite style below to start customizing.
      .imgBox
        img(src='https://res.cloudinary.com/ironabode/image/upload/v1664474296/Hugo-Half-Bracket-Black-_dinasdigs_yedbiv.png' alt='')
section.nArrPrdt(v-if="!filters.length || filters.includes('Brackets')")
  .container
    .nAPrdtGrid
      ProductItem(
        title="Hugo Bracket"
        type="Wall Mounted"
        price="$102"
        href="/hugo-bracket/"
        imageUrl="https://res.cloudinary.com/ironabode/image/upload/v1664474639/Black-Hugo-Metal-Half__62841.1647549925_yy5dz9.png",
        imageAlt=""
      )
      ProductItem(
        title="Esme Bracket"
        type="Wall Mounted"
        price="$102"
        href="/esme-bracket/"
        imageUrl="https://res.cloudinary.com/ironabode/image/upload/v1664474639/aged-brassEsme-One-Glass-Front_rqqsvz.png",
        imageAlt=""
      )
      ProductItem(
        title="Leo Bracket"
        type="Wall Mounted but Stabilized on the Ceiling"
        price="$309"
        href="/leo-bracket/"
        imageUrl="https://res.cloudinary.com/ironabode/image/upload/v1664474638/Black-Leo-1inch-glass_qvif2y.png",
        imageAlt=""
      )
    //- .btnBox.txtCenter
    //-   a.btn.btnBg.btnWhiteBB(href='#') SEE MORE BRACKETS
section.nArrPrtBn.bgGray(v-if="!filters.length || filters.includes('Accessories')")
  .container
    .nAPrtBnB
      .nABnrTxt
        h3.fontSerif.fw400 Standing Brackets
        p Browse our selection of standing shelving units. Click on your favorite style below to start customizing.
      .imgBox
        img(src='https://res.cloudinary.com/ironabode/image/upload/v1664474399/roux-glass-unit_20_thesmittencollective_o48ka2.png' alt='')
section.nArrPrdt(v-if="!filters.length || filters.includes('Accessories')")
  .container
    .nAPrdtGrid
      ProductItem(
        title="Roux Bracket"
        type="Wall mounted and stabilized on floor or counter"
        price="$330"
        href="/roux-bracket/"
        imageUrl="https://res.cloudinary.com/ironabode/image/upload/v1664474814/Roux-glass-unit-BLACK-all-colors-Recovered_bkusn1.png",
        imageAlt=""
      )
      ProductItem(
        title="Faye Bracket"
        type="Wall mounted and stabilized on floor or counter"
        price="$75"
        href="/faye-bracket/"
        imageUrl="https://res.cloudinary.com/ironabode/image/upload/v1664474814/faye-black-brackets-glass-whitebackground_2_qoc9it.png",
        imageAlt=""
      )
      ProductItem(
        title="Simon Bracket"
        type="Wall mounted and stabilized on floor or counter"
        price="$99"
        href="/simon-bracket/"
        imageUrl="https://res.cloudinary.com/ironabode/image/upload/v1664474814/SIMON-GLASS-SHELVING-SHELF-UNIT_ixy0to.png",
        imageAlt=""
      )
    //- .btnBox.txtCenter
    //-   a.btn.btnBg.btnWhiteBB(href='#') SEE MORE ACCESSORIES
section.nArrPrtBn.bgGray(v-if="!filters.length || filters.includes('Ready')")
  .container
    .nAPrtBnB
      .nABnrTxt
        h3.fontSerif.fw400 Hidden Brackets Brackets
        p Browse our selection of shelving Brackets with hidden mounting brackets. Click on your favorite style below to start customizing.
      .imgBox
        img(src='https://res.cloudinary.com/ironabode/image/upload/v1663031585/banner-na-5_jcrydu.png' alt='')
section.nArrPrdt(v-if="!filters.length || filters.includes('Ready')")
  .container
    .nAPrdtGrid
      ProductItem(
        title="Felix Glass Bracket"
        type="Wall Mounted"
        price="$110"
        href="/felix-shelving-unit/"
        imageUrl="https://res.cloudinary.com/ironabode/image/upload/v1664474959/felix.black.6_2_vh27a8.png",
        imageAlt=""
      )
    //- .btnBox.txtCenter
    //-   a.btn.btnBg.btnWhiteBB(href='#') SEE MORE READY TO SHIP

UniqueProp

//- section.breadcrumbBox
//-   .container
//-     ul.breadcrumb.flexBox.flexJcc.flexAic.noList
//-       li.bcItem
//-         a(href='#') Home
//-       li.bcItem
//-         a(href='#') Collections
//-       li.bcItem.active New Arrivals




Footer


</template>

<script setup>
let filters = $ref([]);
</script>