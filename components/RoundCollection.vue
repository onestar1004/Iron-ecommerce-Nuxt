<template lang="pug">
.guide.wrapper
Header
section.nArrBnr
  .nABnrTxt
    h3.fontSerif.fw400 Round Collection
    p Luxury shelving units easily customized by you in minutes and handcrafted by us in a few weeks.
  .nAbnrImg
    img(src='https://res.cloudinary.com/ironabode/image/upload/v1663031631/banner-na-1_hzk1wx.png' alt='')
section.nArrFltr.filterBox
  .container
    .fltrAll
      h4 FILTERS
      .fltrList.flexBox.flexWrap
        .fltrOptn
          a(href='#') Shelving Units
        .fltrOptn
          a(href='#') Brackets
        .fltrOptn
          a(href='#') Accessories
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
        title="Esme Unit"
        type="Wall Mounted"
        price="$1,019"
        href="/monty-shelving-unit/"
        imageUrl="https://res.cloudinary.com/ironabode/image/upload/v1668592187/aged-brassEsme-One-Glass-Front_akqnwt.png",
        imageAlt=""
      )
      ProductItem(
        title="Roux Unit"
        type="Wall Mounted but Stabilized on the Floor"
        price="$1,221"
        href="/oslo-shelving-unit/"
        imageUrl="https://res.cloudinary.com/ironabode/image/upload/v1668592225/Roux-glass-unit-BLACK-all-colors-Recovered_luj8pv.png",
        imageAlt=""
      )
    .btnBox.txtCenter
      a.btn.btnBg.btnWhiteBB(href='/complete-shelving-units/') SEE MORE SHELVING UNITS
section.nArrPrtBn.bgGray(v-if="!filters.length || filters.includes('Brackets')")
  .container
    .nAPrtBnB
      .nABnrTxt
        h3.fontSerif.fw400 Brackets
        p Luxury shelving brackets are easily customized by you in minutes and handcrafted by us in a few weeks.
      .imgBox
        img(src='https://res.cloudinary.com/ironabode/image/upload/v1668592635/Hugo-Half-Bracket-Black-_dinasdigs_mrekhr.png' alt='')
section.nArrPrdt(v-if="!filters.length || filters.includes('Brackets')")
  .container
    .nAPrdtGrid
      ProductItem(
        title="Riviera Bracket"
        type="Ceiling Mounted"
        price="$116"
        href="/monty-bracket/"
        imageUrl="https://res.cloudinary.com/ironabode/image/upload/v1668592715/1_xmtmap.png",
        imageAlt=""
      )
      ProductItem(
        title="Esme Bracket"
        type="Wall Mounted"
        price="$208"
        href="/hugo-bracket/"
        imageUrl="https://res.cloudinary.com/ironabode/image/upload/v1668592768/Esme-brackets-black-2-2_hxitpz.png",
        imageAlt=""
      )
      ProductItem(
        title="Roux Bracket"
        type="Wall Mounted but Stabilized on the Floor"
        price="$309"
        href="/roux-bracket/"
        imageUrl="https://res.cloudinary.com/ironabode/image/upload/v1663031604/new-arrival-23_jkfh5f.png",
        imageAlt=""
      )
    .btnBox.txtCenter
      a.btn.btnBg.btnWhiteBB(href='/shelf-brackets/') SEE MORE BRACKETS
section.nArrPrtBn.bgGray(v-if="!filters.length || filters.includes('Accessories')")
  .container
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
        title="Margot Blanket Ladder"
        type="Wall Mounted"
        price="$330"
        href="/78-round-iron-blanket-ladder/"
        imageUrl="https://res.cloudinary.com/ironabode/image/upload/v1663031604/new-arrival-31_tjkfoy.png",
        imageAlt=""
      )
      ProductItem(
        title="Remi Wall Hook"
        type="Wall Mounted"
        price="$99"
        href="/remi-wall-hook/"
        imageUrl="https://res.cloudinary.com/ironabode/image/upload/v1663031605/new-arrival-33_erwbhq.png",
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
</script>