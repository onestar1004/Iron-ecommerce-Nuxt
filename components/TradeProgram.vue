<template lang="pug">
.tradePage.wrapper
section.tradeTop.pageTopSec
  .container
    .secTop.txtCenter
      h3.pageTitle Trade Program
      p.fontSerif Our artisan-made shelving + decor is truly one-of-a-kind and will instantly transform your projects to the next level. Scroll down to view the exclusive discounts and perks you get from joining the IRON ABODE Trade Program.
      a.btn.btnBg.btnWhiteBB(href='#perks') VIEW THE PERKS
  
  Carousel(:items-to-show="2.5" :wrap-around="true" style="margin-bottom: 100px;")
    Slide(v-for="(slide, index) in slides" :key="`trade-program-section-1-image-index-${index}`")
      .carousel__item(:style="{ 'background-image': `url(${slide})` }")
    template(#addons)
      Navigation

section.trdPerks
  .container
    .secTop.txtCenter
      h3.secTitle#perks Exclusive Discounts and Perks
    .trPrkGrid
      .trPrkCd
        .imgBox
          img.imgRes(src='https://res.cloudinary.com/ironabode/image/upload/v1663031615/perks-1_whvslv.png' alt='')
        .infoBox
          h5 RESIDENTIAL DESIGN
          p.fontSerif 10% off your purchases on any of our standard products.
          p.fontSerif Free Trade Program Collection*
          p.fontSerif Free Shipping and Extended 90 returns or exchanges on standard sized bracket orders.
          p.fontSerif Unlimited access to our design team
          a.btn.btnBg.btnWhiteBB(href='#join') JOIN NOW
          //- a.btn.btnBg.btnWhiteBB(href='#') JOIN NOW
      .trPrkCd
        .imgBox
          img.imgRes(src='https://res.cloudinary.com/ironabode/image/upload/v1663031617/perks-2_dj3dg9.png' alt='')
        .infoBox
          h5 COMMERCIAL DESIGN
          p.fontSerif Exclusive custom options for large commercial orders.
          p.fontSerif 10% off your purchases on any of our standard products.
          p.fontSerif Free Trade Program Collection*
          p.fontSerif Free Shipping and Extended 90 returns or exchanges on standard sized bracket orders.
          p.fontSerif Unlimited access to our design team
          a.btn.btnBg.btnWhiteBB(href='#join') JOIN NOW
          //- a.btn.btnBg.btnWhiteBB(href='#') JOIN NOW
section.trdColl
  .container
    .trCollBox.flexBox.flexJcc
      .imgBox.txtCenter
        img.imgRes(src='https://res.cloudinary.com/ironabode/image/upload/v1663031588/collection_hrqrcj.png' alt='')
      .infoBox
        h5.secTitle Trade Program Collection
        p.fontSerif Enjoy a free wood and finish sample pack. 
        p.fontSerif Click below to add our Trade Program Package to your cart, the collection will be sent to you as soon as you are accepted into the program. 
        p.fontSerif *Only available for Designers in the Contiguous U.S
        a.btn.btnBg.btnGry.btnTxtWht(href='/trade-program-collection/') GET THE COLLECTION
section.trdForm.formSec
  .container
    .secTop.txtCenter(style="margin-bottom: 120px;")
      p.fontSerif
        b Thank you for your Interest in partnering with us!
      p.fontSerif We will be in touch with you soon.
    .frmBox
      h4.frmTtl#join JOIN THE IRON ABODE TRADE PROGRAM
      form(action='')
        .frmGrid2
          .frmGrp
            label.frmLbl.frmLblFlt First Name*
            input.frmInp(type='text' placeholder='Type your answer here')
          .frmGrp
            label.frmLbl.frmLblFlt Last Name*
            input.frmInp(type='text' placeholder='Type your answer here')
        .frmGrp
          label.frmLbl.frmLblFlt Email (you will use this to log into your account*)
          input.frmInp(type='text' placeholder='John.doe@example.net')
        .frmGrp
          label.frmLbl.frmLblFlt Phone Number
          input.frmInp(type='tel' placeholder='(201) 555-0123')
        .frmGrp
          label.frmLbl.frmLblFlt Business Name*
          input.frmInp(type='text' placeholder='Type your answer here')
        .frmGrp
          label.frmLbl.frmLblFlt Business Website (if applicable)
          input.frmInp(type='text' placeholder='Type your answer here')
        .frmGrp
          label.frmLbl.frmLblFlt Instagram Handle*
          input.frmInp(type='text' placeholder='Type your answer here')
        .frmGrp
          label.frmLbl.frmLblFlt How did you hear about IRON ABODE?
          select.frmInp.cSelect
            option(selected='' hidden='')
            option(value='') Google
            option(value='') Facebook
            option(value='') Instagram
            option(value='') Pinterest
            option(value='') Etsy
        .frmTxt
          h5 TRADE PROGRAM SAMPLE PACK
          p.fontSerif Open this #[a(href="/trade-program-collection/") link] in a new tab to order one today. The pack will be sent as soon as you have been accepted into the program. 
          p.fontSerif *Only available to the Contiguous U.S.
          h5 Tax Exemption (optional)
          p.fontSerif For designers who purchase merchandise for resale, we require a valid Resale or Sales Tax Certificate.
        .frmGrp
          label.frmLbl Upload your tax exempt form here.
          .dropZone.flexBox.flexJcc.flexAic
            p.dropZoneTxt Choose files or drag here
            input(type='file')
        .btnBox
          button.btn.btnBg.btnGry.btnTxtWht SUBMIT
WhatMakesUnique
//- section.breadcrumbBox
//-   .container
//-     ul.breadcrumb.flexBox.flexJcc.flexAic.noList
//-       li.bcItem
//-         a(href='#') Home
//-       li.bcItem.active Trade Program



Footer


</template>

<script setup>
const slides = ref([
  'https://res.cloudinary.com/ironabode/image/upload/v1663031627/trade-1_pefxr1.png',
  'https://res.cloudinary.com/ironabode/image/upload/v1663031626/trade-2_yyspic.png',
  'https://res.cloudinary.com/ironabode/image/upload/v1663031627/trade-3_ejhxi3.png',
  'https://res.cloudinary.com/ironabode/image/upload/v1663031628/trade-4_cipnzc.png',
  'https://res.cloudinary.com/ironabode/image/upload/v1666909890/modends_tcvalz.png'
])
</script>

<style scoped>
.carousel__item {
  height: 565px;
  width: 557px;
}
</style>
