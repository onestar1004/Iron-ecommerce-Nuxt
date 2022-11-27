<template lang="pug">
.guide.wrapper
Header
section.nArrBnr
  .nABnrTxt
    h3.fontSerif.fw400 Metal Shelving Units
    p Luxury metal shelving units easily customized by you in minutes and handcrafted by us in a few weeks.
  .nAbnrImg
    img(src='https://res.cloudinary.com/ironabode/image/upload/v1668162748/metal-shelving-units_sdzxkd.png' alt='')
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
  .container
    .nAPrtBnB
      .nABnrTxt
        h3.fontSerif.fw400 Ceiling Mounted Units
        p Browse our selection of ceiling-mounted shelving units. Click on your favorite style below to start customizing your own unit.
      .imgBox
        img(src='https://res.cloudinary.com/ironabode/image/upload/v1668600872/Black-Monty-Half-Inch-Antique-Brass-Metal-Unit-2_bjgwxf.png' alt='')
section.nArrPrdt(v-if="!filters.length || filters.includes('Shelving')")
  .container
    .nAPrdtGrid
      ProductItem(
        title="Riviera Unit"
        type="Ceiling Mounted"
        price="$517"
        href="/riviera-shelving-unit/"
        imageUrl="https://res.cloudinary.com/ironabode/image/upload/v1663031603/new-arrival-11_y9tago.png",
        imageAlt=""
      )
      ProductItem(
        title="Monty Unit"
        type="Ceiling Mounted"
        price="$502"
        href="/monty-shelving-unit/"
        imageUrl="https://res.cloudinary.com/ironabode/image/upload/v1668600955/Black-Monty-Half-Inch-Antique-Brass-Metal-Unit-2_nqshjz.png",
        imageAlt=""
      )
      ProductItem(
        title="Oslo Unit"
        type="Ceiling Mounted"
        price="$502"
        href="/oslo-shelving-unit/"
        imageUrl="https://res.cloudinary.com/ironabode/image/upload/v1668600952/Black-oslo-metal-one-inch_qtwsdv.png",
        imageAlt=""
      )
    .btnBox.txtCenter
      a.btn.btnBg.btnWhiteBB(href='/complete-shelving-units/') SEE MORE SHELVING UNITS
section.nArrPrtBn.bgGray(v-if="!filters.length || filters.includes('Brackets')")
  .container
    .nAPrtBnB
      .nABnrTxt
        h3.fontSerif.fw400 Wall Mounted Units
        p Browse our selection of wall-mounted shelving units. Click on your favorite style below to start customizing.
      .imgBox
        img(src='https://res.cloudinary.com/ironabode/image/upload/v1668601020/black-Hugo-metal-one-inch_2_trpl8v.png' alt='')
section.nArrPrdt(v-if="!filters.length || filters.includes('Brackets')")
  .container
    .nAPrdtGrid
      ProductItem(
        title="Hugo Unit"
        type="Wall Mounted"
        price="$502"
        href="/monty-bracket/"
        imageUrl="https://res.cloudinary.com/ironabode/image/upload/v1668601143/Black-Hugo-Metal-Half__62841.1647549925_erpxjt.png",
        imageAlt=""
      )
      ProductItem(
        title="Esme Unit"
        type="Wall Mounted"
        price="$1,010"
        href="/hugo-bracket/"
        imageUrl="https://res.cloudinary.com/ironabode/image/upload/v1668601151/aged-brassEsme-One-Glass-Front_w9yvjh.png",
        imageAlt=""
      )
      ProductItem(
        title="Leo Unit"
        type="Wall Mounted but Stabilized in the Ceiling"
        price="$502"
        href="/roux-bracket/"
        imageUrl="https://res.cloudinary.com/ironabode/image/upload/v1668601148/Leo-Metal-black-shelf-unit-One_lxhguv.png",
        imageAlt=""
      )
    .btnBox.txtCenter
      a.btn.btnBg.btnWhiteBB(href='/shelf-brackets/') SEE MORE BRACKETS
section.nArrPrtBn.bgGray(v-if="!filters.length || filters.includes('Accessories')")
  .container
    .nAPrtBnB
      .nABnrTxt
        h3.fontSerif.fw400 Standing Units
        p Browse our selection of standing shelving units. Click on your favorite style below to start customizing.
      .imgBox
        img(src='https://res.cloudinary.com/ironabode/image/upload/v1668601254/black-faye-metal-one-inch_gtxsir.png' alt='')
section.nArrPrdt(v-if="!filters.length || filters.includes('Accessories')")
  .container
    .nAPrdtGrid
      ProductItem(
        title="Roux Unit"
        type="Wall Mounted but Stabilized on the Floor"
        price="$1,212"
        href="/78-round-iron-blanket-ladder/"
        imageUrl="https://res.cloudinary.com/ironabode/image/upload/v1668601408/Roux-glass-unit-BLACK-all-colors-Recovered_iprvnj.png",
        imageAlt=""
      )
      ProductItem(
        title="Faye Unit"
        type="Wall Mounted but Stabilized on the Floor"
        price="$1,058"
        href="/fitz-potrack-towel-holder/"
        imageUrl="https://res.cloudinary.com/ironabode/image/upload/v1668601429/black-faye-metal-one-inch_dzu0z4.png",
        imageAlt=""
      )
      ProductItem(
        title="Simon Unit"
        type="Wall Mounted but Stabilized on the Floor"
        price="$1,344"
        href="/remi-wall-hook/"
        imageUrl="https://res.cloudinary.com/ironabode/image/upload/v1668601446/SIMON-GLASS-SHELVING-SHELF-UNIT_pkyxkc.png",
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
    id: 'f-Wall-Mounted',
    text: 'Wall-Mounted'
  },
  {
    id: 'f-Ceiling-Mounted',
    text: 'Ceiling-Mounted'
  },
  {
    id: 'f-Standing-Units',
    text: 'Standing Units'
  },
  {
    id: 'f-Hidden-Brackets',
    text: 'Hidden Brackets'
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
