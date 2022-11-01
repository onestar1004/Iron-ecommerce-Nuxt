<template lang="pug">
section.prodImg
  .container
    .secTop
      h3.secTitle IRON ABODE, IN REAL LIFE
      a.link.fontSerif(href='/gallery') VIEW THE GALLERY
  .prodImgBox
    .pdImgSlide.flexBox
      .pdImgCd
        a(href='#')
          img(src='https://res.cloudinary.com/ironabode/image/upload/v1663031622/space-kitchen-1_bhd3nn.png' alt='')
          span.imgTag TAP TO VIEW PRODUCTS
        .hotSpot(style='top: 44%; right: 11%')
          .hotSpotDot(@click="selectItem('Pro1')" :class="{'show': activeItem == 'Pro1'}")
          .hotSpotInfo(v-if="activeItem == 'Pro1'")
            h5.fontSerif Roux 1/2in Glass Unit
            p 60.5in Overall Height 
            p 3 Shelf- 10in Shelf Depth 
            p Light Brass 
            p Design: @ thesmittencollective
      .pdImgCd
        a(href='#')
          img(src='https://res.cloudinary.com/ironabode/image/upload/v1663031623/space-kitchen-2_nfzgyk.png' alt='')
          span.imgTag TAP TO VIEW PRODUCTS
        .hotSpot(style='top: 42%; right: 35%')
          .hotSpotDot(@click="selectItem('Pro2')" :class="{'show': activeItem == 'Pro2'}")
          .hotSpotInfo(v-if="activeItem == 'Pro2'")
            h5.fontSerif Oslo 1/2in Glass Unit
            p 42in Overall Height 
            p 2 Shelf- 12in Shelf Depth 
            p Black with added railings 
            p Design: @Ironabode
      .pdImgCd
        a(href='#')
          img(src='https://res.cloudinary.com/ironabode/image/upload/v1663031623/space-kitchen-3_ugifep.png' alt='')
          span.imgTag TAP TO VIEW PRODUCTS
        .hotSpot(style='top: 41%; right: 23%')
          .hotSpotDot(@click="selectItem('Pro3')" :class="{'show': activeItem == 'Pro3'}")
          .hotSpotInfo(v-if="activeItem == 'Pro3'")
            h5.fontSerif Oslo 1in Glass Unit
            p 42in Overall Height 
            p 3 Shelf- 12in Shelf Depth 
            p Aged brass 
            p Design: @rachelstellarinteriors 
            p Photo: @melissamellor6
      .pdImgCd
        a(href='#')
          img(src='https://res.cloudinary.com/ironabode/image/upload/v1663031623/space-kitchen-4_ic4kcu.png' alt='')
          span.imgTag TAP TO VIEW PRODUCTS
        .hotSpot(style='top: 23%; right: 29%')
          .hotSpotDot(@click="selectItem('Pro4')" :class="{'show': activeItem == 'Pro4'}")
          .hotSpotInfo(v-if="activeItem == 'Pro4'")
            h5.fontSerif Monty 1/2in Walnut Unit
            p 54in Overall Height 
            p 3 Shelf- 12in Shelf Depth 
            p Black 
            p DEsign: @elizabethmillerreich 
            p Photo: @Stacy ZaringGoldberg
</template>

<script setup>
let activeItem = $ref(null);

function selectItem(item) {
  if(activeItem != item) {
    activeItem = item;
  } else {
    activeItem = null;
  }
}
</script>