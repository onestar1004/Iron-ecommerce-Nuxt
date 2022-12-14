<template lang="pug">
.guide.wrapper
section.nArrBnr
  .nABnrTxt
    h3.fontSerif.fw400 Shelving Units
    p Luxury shelving units easily customized by you in minutes and handcrafted by us in a few weeks.
  .nAbnrImg
    img(src='https://res.cloudinary.com/ironabode/image/upload/v1663031631/banner-na-1_hzk1wx.png' alt='')
section.nArrFltr.filterBox
  .container
    .fltrAll
      h4 FILTERS
      .fltrList.flexBox.flexWrap
        .fltrOptn
          a(@click="smoothScroll({element: '.ceilingMountedSection'})") Ceiling Mounted Units
        .fltrOptn
          a(href='#') Wall Mounted Units
        .fltrOptn
          a(href='#') Standing Units
        .fltrOptn
          a(href='#') Hidden Bracket Units
        //- .fltrOptn
        //-   label
        //-     input.fCheckbox(type='checkbox' v-model="filters" value="Shelving")
        //-     span WALL-MOUNTED
        //- .fltrOptn
        //-   label
        //-     input.fCheckbox(type='checkbox'  v-model="filters" value="Brackets")
        //-     span CEILING-MOUNTED
        //- .fltrOptn
        //-   label
        //-     input.fCheckbox(type='checkbox' v-model="filters" value="Accessories")
        //-     span STANDING UNITS
        //- .fltrOptn
        //-   label
        //-     input.fCheckbox(type='checkbox'  v-model="filters" value="Ready")
        //-     span HIDDEN BRACKETS
        //- .fltrOptn
        //-   label
        //-     input.fCheckbox(type='checkbox'  v-model="filters" value="Ready")
        //-     span GLASS SHELVES
        //- .fltrOptn
        //-   label
        //-     input.fCheckbox(type='checkbox'  v-model="filters" value="Ready")
        //-     span METAL SHELVES
        //- .fltrOptn
        //-   label
        //-     input.fCheckbox(type='checkbox'  v-model="filters" value="Ready")
        //-     span WALNUT SHELVES

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
section.nArrPrtBn(v-show="!filters.length || filters.includes('Shelving')")
  .container.ceilingMountedSection
    .nAPrtBnB
      .nABnrTxt
        h3.fontSerif.fw400 Ceiling Mounted Units
        p Browse our selection of ceiling-mounted shelving units. Click on your favorite style below to start customizing your own unit.
      .imgBox
        img(src='https://res.cloudinary.com/ironabode/image/upload/v1663031585/banner-na-2_dohl0x.png' alt='')
section.nArrPrdt(v-show="!filters.length || filters.includes('Shelving')")
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
        href="/riviera-shelving-unit/"
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
    //- .btnBox.txtCenter
    //-   a.btn.btnBg.btnWhiteBB(href='#') SEE MORE SHELVING UNITS
section.nArrPrtBn.bgGray(v-show="!filters.length || filters.includes('Brackets')")
  .container
    .nAPrtBnB
      .nABnrTxt
        h3.fontSerif.fw400 Wall Mounted Units
        p Browse our selection of wall-mounted shelving units. Click on your favorite style below to start customizing.
      .imgBox
        img(src='https://res.cloudinary.com/ironabode/image/upload/v1664474296/Hugo-Half-Bracket-Black-_dinasdigs_yedbiv.png' alt='')
section.nArrPrdt(v-show="!filters.length || filters.includes('Brackets')")
  .container
    .nAPrdtGrid
      ProductItem(
        title="Hugo Unit"
        type="Wall Mounted"
        price="$102"
        href="/hugo-shelving-unit/"
        imageUrl="https://res.cloudinary.com/ironabode/image/upload/v1664474639/Black-Hugo-Metal-Half__62841.1647549925_yy5dz9.png",
        imageAlt=""
      )
      ProductItem(
        title="Esme Unit"
        type="Wall Mounted"
        price="$102"
        href="/esme-shelving-unit/"
        imageUrl="https://res.cloudinary.com/ironabode/image/upload/v1664474639/aged-brassEsme-One-Glass-Front_rqqsvz.png",
        imageAlt=""
      )
      ProductItem(
        title="Leo Unit"
        type="Wall Mounted but Stabilized on the Ceiling"
        price="$309"
        href="/leo-shelving-unit/"
        imageUrl="https://res.cloudinary.com/ironabode/image/upload/v1664474639/aged-brassEsme-One-Glass-Front_rqqsvz.png",
        imageAlt=""
      )
    //- .btnBox.txtCenter
    //-   a.btn.btnBg.btnWhiteBB(href='#') SEE MORE BRACKETS
section.nArrPrtBn.bgGray(v-show="!filters.length || filters.includes('Accessories')")
  .container
    .nAPrtBnB
      .nABnrTxt
        h3.fontSerif.fw400 Standing Units
        p Browse our selection of standing shelving units. Click on your favorite style below to start customizing.
      .imgBox
        img(src='https://res.cloudinary.com/ironabode/image/upload/v1664474399/roux-glass-unit_20_thesmittencollective_o48ka2.png' alt='')
section.nArrPrdt(v-show="!filters.length || filters.includes('Accessories')")
  .container
    .nAPrdtGrid
      ProductItem(
        title="Roux Unit"
        type="Wall mounted and stabilized on floor or counter"
        price="$330"
        href="/roux-shelving-unit/"
        imageUrl="https://res.cloudinary.com/ironabode/image/upload/v1664474814/Roux-glass-unit-BLACK-all-colors-Recovered_bkusn1.png",
        imageAlt=""
      )
      ProductItem(
        title="Faye Unit"
        type="Wall mounted and stabilized on floor or counter"
        price="$75"
        href="/faye-shelving-unit/"
        imageUrl="https://res.cloudinary.com/ironabode/image/upload/v1664474814/faye-black-brackets-glass-whitebackground_2_qoc9it.png",
        imageAlt=""
      )
      ProductItem(
        title="Simon Unit"
        type="Wall mounted and stabilized on floor or counter"
        price="$99"
        href="/simon-shelving-unit/"
        imageUrl="https://res.cloudinary.com/ironabode/image/upload/v1664474814/SIMON-GLASS-SHELVING-SHELF-UNIT_ixy0to.png",
        imageAlt=""
      )
    //- .btnBox.txtCenter
    //-   a.btn.btnBg.btnWhiteBB(href='#') SEE MORE ACCESSORIES
section.nArrPrtBn.bgGray(v-show="!filters.length || filters.includes('Ready')")
  .container
    .nAPrtBnB
      .nABnrTxt
        h3.fontSerif.fw400 Hidden Brackets Units
        p Browse our selection of shelving units with hidden mounting brackets. Click on your favorite style below to start customizing.
      .imgBox
        img(src='https://res.cloudinary.com/ironabode/image/upload/v1663031585/banner-na-5_jcrydu.png' alt='')
section.nArrPrdt(v-show="!filters.length || filters.includes('Ready')")
  .container
    .nAPrdtGrid
      ProductItem(
        title="Felix Glass Unit"
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

if(useRoute().query.scroll) {
  setTimeout(() => {
    smoothScroll({element: `.${useRoute().query.scroll}`});
  }, 1);
}
</script>