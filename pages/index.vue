<template lang="pug">
.homePage.wrapper
  Header(light=true)

  section.bannerSec
    .bannerTxt
      h2.fontSerif.fw400 ELEVATE
      h2.fontSerif.fw400 YOUR DESIGN
      p.fontSerif With one-of-a-kind shelving made by artisans in the U.S.A.
      a.btn.btnBg.btnBrwn.btnTxtWht(href='/about-us/') LEARN MORE
    .bannerImg
      img(src='https://res.cloudinary.com/ironabode/image/upload/v1663031629/banner-1_z1okc9.png' alt='')
  section.byCat
    .container
      .secTop.txtCenter
        h3.secTitle SHOP BY CATEGORY
      .byCatList
        a.btn.btnBg.btnBlGry(href='/complete-shelving-units/') CEILING SHELVING
        a.btn.btnBg.btnBlGry(href='/complete-shelving-units/') WALL SHELVING
        a.btn.btnBg.btnBlGry(href='/shelf-brackets/') SHELF BRACKETS
        a.btn.btnBg.btnBlGry(href='/accessories/') ACCESSORIES
        //- a.btn.btnBg.btnBlGry(href='#') READY TO SHIP
        //- a.btn.btnBg.btnBlGry(href='#') ADD-ONS
  section.theDiff
    .container
      .secTop
        h3.secTitle THE DIFFERENCE IS CLEAR
      .theDiffBox
        .theDiffCard
          .tDifImg
            img(src='https://res.cloudinary.com/ironabode/image/upload/v1663031626/theDiff-1_gk4n4m.png' alt='')
          .tDifInfo
            h4
              span.fontSerif BEFORE | 
              span MAINSTREAM SHELVING
            p There's no focal point in this space. Also, there's too much of the same color and material (wood) which makes the space feel a little bland.
            // <a href="#" class="txtLink">Read More</a>
        .theDiffCard
          .tDifImg
            img(src='https://res.cloudinary.com/ironabode/image/upload/v1663031625/theDiff-2_q6xynv.png' alt='')
          .tDifInfo
            h4
              span.fontSerif AFTER | 
              span IRON ABODE SHELVING
            p Our shelving elongates the space- making the ceilings look taller. Also the mix of materials and colors give the space a more timeless look.
  section.bstSlr
    .container
      .secTop
        h3.secTitle.txtCenter BEST SELLERS
      .bSlrBox.flexBox
        a(href='/hugo-shelving-unit/').bSlrCard
          .bSlCrdImg
            img(src='https://res.cloudinary.com/ironabode/image/upload/v1663031585/bestSeller-1_v3jcpo.png' alt='')
          .bSlCrdInfo
            h5 HUGO SHELVING UNIT
            .bSlCrdStar
              img(src='https://res.cloudinary.com/ironabode/image/upload/v1663031624/stars_lh28ui.svg' alt='')
        a(href='/roux-shelving-unit/').bSlrCard
          .bSlCrdImg
            img(src='https://res.cloudinary.com/ironabode/image/upload/v1663031585/bestSeller-2_egocgu.png' alt='')
          .bSlCrdInfo
            h5 ROUX SHELVING UNIT
            .bSlCrdStar
              img(src='https://res.cloudinary.com/ironabode/image/upload/v1663031624/stars_lh28ui.svg' alt='')
        a(href='/oslo-shelving-unit/').bSlrCard
          .bSlCrdImg
            img(src='https://res.cloudinary.com/ironabode/image/upload/v1663031585/bestSeller-3_bxbndy.png' alt='')
          .bSlCrdInfo
            h5 OSLO SHELVING UNIT
            .bSlCrdStar
              img(src='https://res.cloudinary.com/ironabode/image/upload/v1663031624/stars_lh28ui.svg' alt='')
        a(href='/riviera-shelving-unit/').bSlrCard
          .bSlCrdImg
            img(src='https://res.cloudinary.com/ironabode/image/upload/v1663031586/bestSeller-4_xtbrlc.png' alt='')
          .bSlCrdInfo
            h5 RIVIERA SHELVING UNIT
            .bSlCrdStar
              img(src='https://res.cloudinary.com/ironabode/image/upload/v1663031624/stars_lh28ui.svg' alt='')
      //- .btnBox.txtCenter
      //-   a.btn.btnBg.btnWhiteBB.btnResp(href='#') SEE MORE BEST SELLERS
  section.howSec
    .container
      .secTop
        h3.secTitle HOW IT WORKS
      .howSBox
        .howSVideo
          .videoBox
            .videoLink
              iframe(src='https://www.youtube.com/embed/428GSCXCMoE' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture' allowfullscreen='' width='560' height='315' frameborder='0')
          .btnBox.txtCenter
            a.btn.btnBg.btnBlGry.btnTxtWht(href='/complete-shelving-units/') BUILD YOUR OWN
        .howSInfo
          .howSInCard
            div
              img(src='https://res.cloudinary.com/ironabode/image/upload/v1663031593/howStep-1_m85fnf.svg' alt='')
            h5 CHOOSE YOUR STYLE
            p.fontSerif Choose from our selection of 12 different styles of modern, classic shelving.
          .howSInCard
            div
              img(src='https://res.cloudinary.com/ironabode/image/upload/v1663031593/howStep-2_xie0qa.svg' alt='')
            h5 CHOOSE YOUR SHELVES
            p.fontSerif Choose timeless glass shelves, sleek metal shelves, or natural wood shelves.
          .howSInCard
            div
              img(src='https://res.cloudinary.com/ironabode/image/upload/v1663031593/howStep-3_qkzw9f.svg' alt='')
            h5 CHOOSE YOUR FINISH AND ADD-ONS
            p.fontSerif Add finishing touches to your dream unit by choosing from our 7 powder coated finishes and adding a custom mount.
          .howSInCard
            div
              img(src='https://res.cloudinary.com/ironabode/image/upload/v1663031594/howStep-4_izwjdk.svg' alt='')
            h5 CHOOSE YOUR SIZE
            p.fontSerif With shelves by the inch in height, depth, and width&mldr; you can make a unit that fits your space perfectly.
  section.shopSpace

    GalleryImageProducts(v-if="showProducts" :galleryItem="showProducts" @close="showProducts = null")

    .container
      .secTop.flexBox.flexJcc
        div
          p.subTitle GET INSPIRED
          h3.secTitle SHOP THESE REAL LIFE SPACES
    .shSpTabs
      .tabLinks.flexBox
        button.tabLink(@click="selectItem('Monty4')" :class="{'on': activeItem == 'Monty4'}") BATHROOM
        button.tabLink(@click="selectItem('Monty5')" :class="{'on': activeItem == 'Monty5'}") KITCHEN
        button.tabLink(@click="selectItem('Monty6')" :class="{'on': activeItem == 'Monty6'}") HOME BAR
        button.tabLink(@click="selectItem('Monty7')" :class="{'on': activeItem == 'Monty7'}") LIVING AREA
      .tabContent
        #tabBathroom.tabPanel.active(v-if="activeItem == 'Monty4'")
          .pdImgSlide.fadeEffect.flexBox
            .pdImgCd
              a(@click="selectItem2('Monty')")
                img(src='https://res.cloudinary.com/ironabode/image/upload/v1663031623/space-bathroom-1_ypzfsa.png' alt='')
                span.imgTag(@click="showProducts = {products: [{product_id: 73}, {product_id: 72}]}") TAP TO VIEW PRODUCTS
              .hotSpot(style='top: 31%; right: 18%')
                .hotSpotDot(@click="selectItem2('Monty')" :class="{'show': activeItem2 == 'Monty'}")
                .hotSpotInfo(v-if="activeItem2 == 'Monty'")
                  h5.fontSerif Monty 1/2in Glass Unit
                  p 42in Overall Height 
                  p 2 Shelf- 10in Shelf Depth 
                  p Black 
                  p Design: @Ironabode
            .pdImgCd
              a(@click="selectItem2('Monty2')")
                img(src='https://res.cloudinary.com/ironabode/image/upload/v1663031622/space-bathroom-2_fxy6mh.png' alt='')
                span.imgTag TAP TO VIEW PRODUCTS
              .hotSpot(style='top: 35%; right: 32%')
                .hotSpotDot(@click="selectItem2('Monty2')" :class="{'show': activeItem2 == 'Monty2'}")
                .hotSpotInfo(v-if="activeItem2 == 'Monty2'")
                  h5.fontSerif Roux 1in Glass Unit
                  p 42in Overall Height 
                  p 2 Shelf- 12in Shelf Depth 
                  p Brass 
                  p Design: @SwMckenney
            .pdImgCd
              a(@click="selectItem2('Monty3')")
                img(src='https://res.cloudinary.com/ironabode/image/upload/v1663031622/space-bathroom-3_usazf0.png' alt='')
                span.imgTag TAP TO VIEW PRODUCTS
              .hotSpot(style='top: 42%; right: 23%')
                .hotSpotDot(@click="selectItem2('Monty3')" :class="{'show': activeItem2 == 'Monty3'}")
                .hotSpotInfo(v-if="activeItem2 == 'Monty3'")
                  h5.fontSerif Monty 1/2in Whitewashed White Oak Unit
                  p 30in Overall Height 
                  p 2 Shelf- 10in Shelf Depth 
                  p Black 
                  p design: @ourpnw_home
        #tabKitchen.tabPanel.active(v-if="activeItem == 'Monty5'")
          .pdImgSlide.fadeEffect.flexBox
            .pdImgCd
              a(@click="selectItem2('kit1')")
                img(src='https://res.cloudinary.com/ironabode/image/upload/v1663031622/space-kitchen-1_bhd3nn.png' alt='')
                span.imgTag TAP TO VIEW PRODUCTS
              .hotSpot(style='top: 44%; right: 11%')
                .hotSpotDot(@click="selectItem2('kit1')" :class="{'show': activeItem2 == 'kit1'}")
                .hotSpotInfo(v-if="activeItem2 == 'kit1'")
                  h5.fontSerif Roux 1/2in Glass Unit
                  p 60.5in Overall Height 
                  p 3 Shelf- 10in Shelf Depth 
                  p Light Brass 
                  p Design: @ thesmittencollective
            .pdImgCd
              a(@click="selectItem2('kit2')")
                img(src='https://res.cloudinary.com/ironabode/image/upload/v1663031623/space-kitchen-2_nfzgyk.png' alt='')
                span.imgTag TAP TO VIEW PRODUCTS
              .hotSpot(style='top: 42%; right: 35%')
                .hotSpotDot(@click="selectItem2('kit2')" :class="{'show': activeItem2 == 'kit2'}")
                .hotSpotInfo(v-if="activeItem2 == 'kit2'")
                  h5.fontSerif Oslo 1/2in Glass Unit
                  p 42in Overall Height 
                  p 2 Shelf- 12in Shelf Depth 
                  p Black with added railings 
                  p Design: @Ironabode
            .pdImgCd
              a(@click="selectItem2('kit3')")
                img(src='https://res.cloudinary.com/ironabode/image/upload/v1663031623/space-kitchen-3_ugifep.png' alt='')
                span.imgTag TAP TO VIEW PRODUCTS
              .hotSpot(style='top: 41%; right: 23%')
                .hotSpotDot(@click="selectItem2('kit3')" :class="{'show': activeItem2 == 'kit3'}")
                .hotSpotInfo(v-if="activeItem2 == 'kit3'")
                  h5.fontSerif Oslo 1in Glass Unit
                  p 42in Overall Height 
                  p 3 Shelf- 12in Shelf Depth 
                  p Aged brass 
                  p Design: @rachelstellarinteriors 
                  p Photo: @melissamellor6
            .pdImgCd
              a(@click="selectItem2('kit4')")
                img(src='https://res.cloudinary.com/ironabode/image/upload/v1663031623/space-kitchen-4_ic4kcu.png' alt='')
                span.imgTag TAP TO VIEW PRODUCTS
              .hotSpot(style='top: 23%; right: 29%')
                .hotSpotDot(@click="selectItem2('kit4')" :class="{'show': activeItem2 == 'kit4'}")
                .hotSpotInfo(v-if="activeItem2 == 'kit4'")
                  h5.fontSerif Monty 1/2in Walnut Unit
                  p 54in Overall Height 
                  p 3 Shelf- 12in Shelf Depth 
                  p Black 
                  p DEsign: @elizabethmillerreich 
                  p Photo: @Stacy ZaringGoldberg
        #tabBar.tabPanel.active(v-if="activeItem == 'Monty6'")
          .pdImgSlide.fadeEffect.flexBox
            .pdImgCd
              a(@click="selectItem2('kit5')")
                img(src='https://res.cloudinary.com/ironabode/image/upload/v1663031621/space-bar-1_d5wb3r.png' alt='')
                span.imgTag TAP TO VIEW PRODUCTS
              .hotSpot(style='top: 28%; right: 30%')
                .hotSpotDot(@click="selectItem2('kit5')" :class="{'show': activeItem2 == 'kit5'}")
                .hotSpotInfo(v-if="activeItem2 == 'kit5'")
                  h5.fontSerif Faye 1in Glass Unit
                  p 52in Overall Height 
                  p 3 Shelf- 10in Shelf Depth 
                  p Black 
                  p design: @louhome_
            .pdImgCd
              a(@click="selectItem2('kit6')")
                img(src='https://res.cloudinary.com/ironabode/image/upload/v1663031621/space-bar-2_dnbu6i.png' alt='')
                span.imgTag TAP TO VIEW PRODUCTS
              .hotSpot(style='top: 54%; right: 34%')
                .hotSpotDot(@click="selectItem2('kit6')" :class="{'show': activeItem2 == 'kit6'}")
                .hotSpotInfo(v-if="activeItem2 == 'kit6'")
                  h5.fontSerif Oslo 1/2in Glass Unit
                  p 42in Overall Height 
                  p 2 Shelf- 12in Shelf Depth 
                  p Black with added railings 
                  p Design: @tykarges 
                  p Photo: @jeanbai
            .pdImgCd
              a(@click="selectItem2('kit7')")
                img(src='https://res.cloudinary.com/ironabode/image/upload/v1663031622/space-bar-3_wh7fud.png' alt='')
                span.imgTag TAP TO VIEW PRODUCTS
              .hotSpot(style='top: 30%; right: 42%')
                .hotSpotDot(@click="selectItem2('kit7')" :class="{'show': activeItem2 == 'kit7'}")
                .hotSpotInfo(v-if="activeItem2 == 'kit7'")
                  h5.fontSerif Monty 1/2in Whitewashed White Oak Unit
                  p 42in Overall Height 
                  p 3 Shelf- 12in Shelf Depth 
                  p Black 
                  p Design: @Ironabode
            .pdImgCd
              a(@click="selectItem2('kit8')")
                img(src='https://res.cloudinary.com/ironabode/image/upload/v1663031622/space-bar-4_euvwzp.png' alt='')
                span.imgTag TAP TO VIEW PRODUCTS
              .hotSpot(style='top: 38%; right: 17%')
                .hotSpotDot(@click="selectItem2('kit8')" :class="{'show': activeItem2 == 'kit8'}")
                .hotSpotInfo(v-if="activeItem2 == 'kit8'")
                  h5.fontSerif Hugo 1/2in Glass Unit
                  p 42in Overall Height 
                  p 3 Shelf- 10in Shelf Depth 
                  p Aged Brass 
                  p Design: @Jillwhitedesigns 
                  p Photo: @chadwickturnerphotos
        #tabLiving.tabPanel.active(v-if="activeItem == 'Monty7'")
          .pdImgSlide.fadeEffect.flexBox
            .pdImgCd
              a(@click="selectItem2('kit9')")
                img(src='https://res.cloudinary.com/ironabode/image/upload/v1663031624/space-living-1_qsxpox.png' alt='')
                span.imgTag TAP TO VIEW PRODUCTS
              .hotSpot(style='top: 44%; right: 28%')
                .hotSpotDot(@click="selectItem2('kit9')" :class="{'show': activeItem2 == 'kit9'}")
                .hotSpotInfo(v-if="activeItem2 == 'kit9'")
                  h5.fontSerif Hugo 1/2in Brackets
                  p 52in Overall Height 
                  p 3 Shelf- 12in Shelf Depth 
                  p Black 
                  p Design: @eichleberry
            .pdImgCd
              a(@click="selectItem2('kit10')")
                img(src='https://res.cloudinary.com/ironabode/image/upload/v1663031624/space-living-2_itkmor.png' alt='')
                span.imgTag TAP TO VIEW PRODUCTS
              .hotSpot(style='top: 47%; right: 30%')
                .hotSpotDot(@click="selectItem2('kit10')" :class="{'show': activeItem2 == 'kit10'}")
                .hotSpotInfo(v-if="activeItem2 == 'kit10'")
                  h5.fontSerif Faye 1in Glass Unit
                  p 42in Overall Height 
                  p 3 Shelf- 12in Shelf Depth 
                  p Black 
                  p Design: @ironabode
            .pdImgCd
              a(@click="selectItem2('kit11')")
                img(src='https://res.cloudinary.com/ironabode/image/upload/v1663031624/space-living-3_vhm9qo.png' alt='')
                span.imgTag TAP TO VIEW PRODUCTS
              .hotSpot(style='top: 31%; left: 18%')
                .hotSpotDot(@click="selectItem2('kit11')" :class="{'show': activeItem2 == 'kit11'}")
                .hotSpotInfo.hsfRight(v-if="activeItem2 == 'kit11'")
                  h5.fontSerif Hugo 1/2in Bracket
                  p 30in Overall Height 
                  p 2 Shelf- 10in Shelf Depth 
                  p Black 
                  p Design: @dinasdigs
            .pdImgCd
              a(@click="selectItem2('kit12')")
                img(src='https://res.cloudinary.com/ironabode/image/upload/v1663031624/space-living-4_lpkqks.png' alt='')
                span.imgTag TAP TO VIEW PRODUCTS
              .hotSpot(style='top: 26%; left: 28%')
                .hotSpotDot(@click="selectItem2('kit12')" :class="{'show': activeItem2 == 'kit12'}")
                .hotSpotInfo.hsfRight(v-if="activeItem2 == 'kit12'")
                  h5.fontSerif Monty 1/2in Walnut Unit
                  p 54in Overall Height 
                  p 3 Shelf- 12in Shelf Depth 
                  p Black 
                  p design: @oliviaruth_interiors
  section.msgBanner
    .container
      .msgBnrBox.txtCenter
        h3.clrWhite 100% HANDCRAFTED BY ARTISANS IN THE U.S.A
        a.btn.btnBg.btnWhite.btnResp(href='/about-us/') LEARN MORE

  HomeReviews
  
  Footer
</template>

<script setup>
let activeItem = $ref(null);
let showProducts = $ref(null);

useHead({
  title: 'IRON ABODE | High-end, Designer Shelving',
  description: 'Easily customize your own glass, metal, or wood shelving unit online.',
})

function selectItem(item) {
  if(activeItem != item) {
    activeItem = item;
  } else {
    activeItem = null;
  }
}
selectItem('Monty4');

let activeItem2 = $ref(null);

function selectItem2(item) {
  if(activeItem2 != item) {
    activeItem2 = item;
  } else {
    activeItem2 = null;
  }
}
</script>