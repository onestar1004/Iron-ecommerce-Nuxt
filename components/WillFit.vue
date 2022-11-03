<template lang="pug">
.guide.wrapper
Header
section.pageHead
  .container
    .secTop.txtCenter
      h3.pageTitle IRON ABODE GUIDE | CUSTOMIZING YOUR SHELVING UNIT
section.guideSec
  .container
    .gdGrid.cmnPgGrid
      .gdSdNav.cmnSdNav
        ul.noList.listGuide
          li
            a(href='#gKitchen') KITCHEN
          li
            a(href='#gLiving') DINING OR LIVING ROOM
          li
            a(href='#gBar') BAR
          li
            a(href='#gBathroom') BATHROOM
      .gdMain
        .gdMnTop
          h3.secTitle.biggerTitle How to Pick the Right Size For Your Space
          p.gSbTxt Now that you know what style of shelving unit you want, you will need to select the right size for your space. Scroll down to learn more.
          p.gSbTxt However, if you still are unsure about which style you want, click here to take our quiz: Which Shelving Style Will Work in My Space?
          h4.gPrtTtl WHERE WILL YOU INSTALL THIS UNIT?
          .gTopPrt
            h5.gPrtSbTtl KITCHEN
            p.fontSerif Over a Countertop
            p.fontSerif Over an Island
          .gTopPrt
            h5.gPrtSbTtl DINING OR LIVING ROOM
            p.fontSerif Over a Credenza
          .gTopPrt
            h5.gPrtSbTtl BAR
            p.fontSerif Over a Countertop
          .gTopPrt
            h5.gPrtSbTtl BATHROOM
            p.fontSerif Over a Bathtub
            p.fontSerif Over a Toilet
            p.fontSerif On the Floor
        #gKitchen.gdAccCntr
          .gdAccInfo
            h4.gPrtTtl KITCHEN
            h5.gPrtSbTtl Over a Countertop
          .gdAccBox.cmnAccBox
            .cmnAccdn
              .accHead(@click="selectItem('CeilingMounted')" :class="{'active': activeItem == 'CeilingMounted'}") MEASURING FOR A CEILING-MOUNTED UNIT
              .accList(v-if="activeItem == 'CeilingMounted'")
                .cmnAccLst
                  p.fontSerif 1. Measure from the top of your counter to your ceiling.
                  p.fontSerif
                    | 2. Subtract at least 18&rdquo; from this measurement (we suggest at least 18&rdquo; between your countertop and the bottom of your shelving unit).
                  p.fontSerif
                    | 3. The measurement you are left with is the maximum overall height you should select for your shelving unit.
                  p.fontSerif
                    | Please Note: Make sure you take into account crown molding, if you have crown molding our ceiling-mounted units will not work for you so we suggest looking at our wall-mounted Leo Unit instead.
                  p.fontSerif
                    | We offer many overall height options with each of our shelving units and shelf brackets to accommodate many homes.
                  p.fontSerif
                    | If our standard options don&rsquo;t work for you, we also specialize in custom work and can customize any of our products further. To customize one of our units further, simply go on the product listing and click on the &ldquo;Customize Further&rdquo; button- located right below the &ldquo;Add to Cart&rdquo; button.
                  img(src='https://res.cloudinary.com/ironabode/image/upload/v1667507350/Kitchen_gggnz1.svg' alt='')
            .cmnAccdn
              .accHead(@click="selectItem('WallMountedUnit')" :class="{'active': activeItem == 'WallMountedUnit'}") MEASURING FOR A WALL-MOUNTED UNIT
              .accList(v-if="activeItem == 'WallMountedUnit'")
                .cmnAccLst
                  p.fontSerif 1. Measure from the top of your counter to your ceiling.
                  p.fontSerif
                    | 2. Subtract at least 18&rdquo; from this measurement (we suggest at least 18&rdquo; between your countertop and the bottom of your shelving unit).
                  p.fontSerif
                    | 3. The measurement you are left with is the maximum overall height you should select for your shelving unit.
                  p.fontSerif
                    | 4. Select the 12&rdquo; spacing option on the listing- this will give the illusion that this unit is mounted to the ceiling.
                  p.fontSerif
                    | Disclaimer: We don&rsquo;t suggest this option if you have crown molding, if you have crown molding, the only wall-mounted unit that will work for your space is our Leo Unit. If you don&rsquo;t care to have your wall-mounted unit touch the ceiling, see the next option below.
                  img(src='https://res.cloudinary.com/ironabode/image/upload/v1667507350/Kitchen_gggnz1.svg' alt='')
            .cmnAccdn
              .accHead(@click="selectItem('CelingUnit')" :class="{'active': activeItem == 'CelingUnit'}") FOR WALL-MOUNTED UNITS THAT WILL NOT TOUCH THE CEILING
              .accList(v-if="activeItem == 'CelingUnit'")
                .cmnAccLst
                  p.fontSerif 1. Find another focal point in your space (cabinets, window, art,etc.)
                  p.fontSerif
                    | 2. Measure the height of this other focal point- from the top of the counter to the top of this focal point.
                  p.fontSerif
                    | 3. Take this measurement and subtract 18&rdquo; from it (we suggest at least 18&rdquo; between your countertop and the bottom of your shelving unit).
                  p.fontSerif
                    | 4. The measurement you are left with is the maximum overall height you should select for your shelving unit.
                  p.fontSerif
                    | We offer many overall height options with each of our shelving units and shelf brackets to accommodate many homes.
                  p.fontSerif
                    | If our standard options don&rsquo;t work for you, we also specialize in custom work and can customize any of our products further. To customize one of our units further, simply go on the product listing and click on the &ldquo;Customize Further&rdquo; button- located right below the &ldquo;Add to Cart&rdquo; button.
                  img(src='https://res.cloudinary.com/ironabode/image/upload/v1667507350/Kitchen_gggnz1.svg' alt='')
          .gdAccPrtInfo
            h5.gPrtSbTtl Over an Island
          .gdAccBox.cmnAccBox
            .cmnAccdn
              .accHead(@click="selectItem('Measuring1')" :class="{'active': activeItem == 'Measuring1'}") MEASURING FOR A CEILING-MOUNTED UNIT
              .accList(v-if="activeItem == 'Measuring1'")
                .cmnAccLst
                  p.fontSerif 1. Measure from the top of your island to your ceiling.
                  p.fontSerif
                    | 2. Subtract at least 30&rdquo; from this measurement (we suggest at least 30&rdquo; between your island and the bottom of your shelving unit).
                  p.fontSerif
                    | 3. The measurement you are left with is the maximum overall height you should select for your shelving unit.
                  p.fontSerif
                    | We offer many overall height options with each of our shelving units and shelf brackets to accommodate many homes.
                  p.fontSerif
                    | If our standard options don&rsquo;t work for you, we also specialize in custom work and can customize any of our products further. To customize one of our units further, simply go on the product listing and click on the &ldquo;Customize Further&rdquo; button- located right below the &ldquo;Add to Cart&rdquo; button.
                  img(src='https://res.cloudinary.com/ironabode/image/upload/v1667507350/Kitchen_gggnz1.svg' alt='')
        #gLiving.gdAccCntr
          .gdAccInfo
            h4.gPrtTtl DINING OR LIVING ROOM
            h5.gPrtSbTtl Over a Credenza
          .gdAccBox.cmnAccBox
            .cmnAccdn
              .accHead(@click="selectItem('Credenza1')" :class="{'active': activeItem == 'Credenza1'}") MEASURING FOR A CEILING-MOUNTED UNIT
              .accList(v-if="activeItem == 'Credenza1'")
                .cmnAccLst
                  p.fontSerif 1. Measure from the top of your counter to your ceiling.
                  p.fontSerif
                    | 2. Subtract at least 12&rdquo;-16&rdquo; from this measurement (we suggest at least 12&rdquo;-16&rdquo; between your credenza and the bottom of your shelving unit).
                  p.fontSerif
                    | 3. The measurement you are left with is the maximum overall height you should select for your shelving unit.
                  p.fontSerif
                    | Pro Tip: Make sure you take into account crown molding, if you have crown molding our ceiling-mounted units will not work for you so we suggest looking at our wall-mounted Leo Unit instead.
                  p.fontSerif
                    | We offer many overall height options with each of our shelving units and shelf brackets to accommodate many homes.
                  p.fontSerif
                    | If our standard options don&rsquo;t work for you, we also specialize in custom work and can customize any of our products further. To customize one of our units further, simply go on the product listing and click on the &ldquo;Customize Further&rdquo; button- located right below the &ldquo;Add to Cart&rdquo; button.
                  img(src='https://res.cloudinary.com/ironabode/image/upload/v1667507350/Dining_sqh9rp.svg' alt='')
            .cmnAccdn
              .accHead(@click="selectItem('Credenza2')" :class="{'active': activeItem == 'Credenza2'}") MEASURING FOR A WALL-MOUNTED UNIT
              .accList(v-if="activeItem == 'Credenza2'")
                .cmnAccLst
                  p.fontSerif To have your wall-mounted unit give the illusion of being ceiling-mounted:
                  h5.fontSerif Choosing the Right Overall Height:
                  p.fontSerif
                    | 1.Measure from the top of your counter to your ceiling. 
                    br
                    | &#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;2. Subtract at least 12&rdquo;-16&rdquo; from this measurement (we suggest at least 18&rdquo; between your countertop and the bottom of your shelving unit). 
                    br
                    | &#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;3. The measurement you are left with is the maximum overall height you should select for your shelving unit.
                  h5.fontSerif Choosing the Right Shelf Spacing:
                  p.fontSerif
                    | 1. Select the 12&rdquo; spacing option on the listing- this will give the illusion that this unit is mounted to the ceiling. However, if you have certain items you will be storing on these shelves, we suggest measuring the height of these items and selecting the shelf spacing that will best accommodate these items.
                  p.fontSerif
                    | Disclaimer: We don&rsquo;t suggest this option if you have crown molding, if you have crown molding, the only wall-mounted unit that will work for your space is our Leo Unit. If you don&rsquo;t care to have your wall-mounted unit touch the ceiling, see the next option below.
                  img(src='https://res.cloudinary.com/ironabode/image/upload/v1667507350/Dining_sqh9rp.svg' alt='')
            .cmnAccdn
              .accHead(@click="selectItem('Credenza3')" :class="{'active': activeItem == 'Credenza3'}") FOR WALL-MOUNTED UNITS THAT WILL NOT TOUCH THE CEILING
              .accList(v-if="activeItem == 'Credenza3'")
                .cmnAccLst
                  h5.fontSerif Choosing the Right Overall Height:
                  p.fontSerif
                    | 1. Find another focal point in your space (cabinets, window, art,etc.) 
                    br
                    | &#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;2. Measure the height of this other focal point- from the top of the counter to the top of this focal point. 
                    br
                    | &#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;3. Take this measurement and subtract 18&rdquo; from it (we suggest at least 18&rdquo; between your countertop and the bottom of your shelving unit). 
                    br
                    | &#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;4. The measurement you are left with is the maximum overall height you should select for your shelving unit.
                  h5.fontSerif Choosing the Right Shelf Spacing:
                  p.fontSerif
                    | 1. Our most popular shelf spacing option for wall-mounted units is our &ldquo;Equal Spacing&rdquo; option. However, if you have certain items you will be storing on these shelves, we suggest measuring the height of these items and selecting the shelf spacing that will best accommodate these items.
                  p.fontSerif
                    | We offer many overall height options with each of our shelving units and shelf brackets to accommodate many homes.
                  p.fontSerif
                    | If our standard options don&rsquo;t work for you, we also specialize in custom work and can customize any of our products further. To customize one of our units further, simply go on the product listing and click on the &ldquo;Customize Further&rdquo; button- located right below the &ldquo;Add to Cart&rdquo; button.
                  img(src='https://res.cloudinary.com/ironabode/image/upload/v1667507350/Dining_sqh9rp.svg' alt='')
        #gBar.gdAccCntr
          .gdAccInfo
            h4.gPrtTtl BAR
            h5.gPrtSbTtl Over a Countertop
          .gdAccBox.cmnAccBox
            .cmnAccdn
              .accHead(@click="selectItem('Bar1')" :class="{'active': activeItem == 'Bar1'}") MEASURING FOR A CEILING-MOUNTED UNIT
              .accList(v-if="activeItem == 'Bar1'")
                .cmnAccLst
                  p.fontSerif 1. Measure from the top of your counter to your ceiling.
                  p.fontSerif
                    | 2. Subtract at least 16&rdquo;-18&rdquo; from this measurement (we suggest at least 16&rdquo;-18&rdquo; between your countertop and the bottom of your shelving unit).
                  p.fontSerif
                    | 3. The measurement you are left with is the maximum overall height you should select for your shelving unit.
                  p.fontSerif
                    | Please Note: Make sure you take into account crown molding, if you have crown molding our ceiling-mounted units will not work for you so we suggest looking at our wall-mounted Leo Unit instead.
                  p.fontSerif
                    | We offer many overall height options with each of our shelving units and shelf brackets to accommodate many homes.
                  p.fontSerif
                    | If our standard options don&rsquo;t work for you, we also specialize in custom work and can customize any of our products further. To customize one of our units further, simply go on the product listing and click on the &ldquo;Customize Further&rdquo; button- located right below the &ldquo;Add to Cart&rdquo; button.
                  img(src='https://res.cloudinary.com/ironabode/image/upload/v1667507351/Roux_Bar_bwmy5d.png' alt='')
            .cmnAccdn
              .accHead(@click="selectItem('Bar2')" :class="{'active': activeItem == 'Bar2'}") MEASURING FOR A WALL-MOUNTED UNIT
              .accList(v-if="activeItem == 'Bar2'")
                .cmnAccLst
                  p.fontSerif 1. Measure from the top of your counter to your ceiling.
                  p.fontSerif
                    | 2. Subtract at least 16&rdquo;-18&rdquo; from this measurement (we suggest at least 16&rdquo;-18&rdquo; between your countertop and the bottom of your shelving unit).
                  p.fontSerif
                    | 3. The measurement you are left with is the maximum overall height you should select for your shelving unit.
                  p.fontSerif
                    | 4. Select the 12&rdquo; spacing option on the listing- this will give the illusion that this unit is mounted to the ceiling.
                  p.fontSerif
                    | Disclaimer: We don&rsquo;t suggest this option if you have crown molding, if you have crown molding, the only wall-mounted unit that will work for your space is our Leo Unit. If you don&rsquo;t care to have your wall-mounted unit touch the ceiling, see the next option below.
                  img(src='https://res.cloudinary.com/ironabode/image/upload/v1667507351/Roux_Bar_bwmy5d.png' alt='')
            .cmnAccdn
              .accHead(@click="selectItem('Bar3')" :class="{'active': activeItem == 'Bar3'}") FOR WALL-MOUNTED UNITS THAT WILL NOT TOUCH THE CEILING
              .accList(v-if="activeItem == 'Bar3'")
                .cmnAccLst
                  p.fontSerif 1. Find another focal point in your space (cabinets, window, art,etc.)
                  p.fontSerif
                    | 2. Measure the height of this other focal point- from the top of the counter to the top of this focal point.
                  p.fontSerif
                    | 3. Take this measurement and subtract 16&rsquo;-18&rdquo; from it (we suggest at least 16&rdquo;-18&rdquo; between your countertop and the bottom of your shelving unit).
                  p.fontSerif
                    | 4. The measurement you are left with is the maximum overall height you should select for your shelving unit.
                  p.fontSerif
                    | We offer many overall height options with each of our shelving units and shelf brackets to accommodate many homes.
                  p.fontSerif
                    | If our standard options don&rsquo;t work for you, we also specialize in custom work and can customize any of our products further. To customize one of our units further, simply go on the product listing and click on the &ldquo;Customize Further&rdquo; button- located right below the &ldquo;Add to Cart&rdquo; button.
                  img(src='https://res.cloudinary.com/ironabode/image/upload/v1667507351/Roux_Bar_bwmy5d.png' alt='')
        #gBathroom.gdAccCntr
          .gdAccInfo
            h4.gPrtTtl BATHROOM
            h5.gPrtSbTtl Over a Bathtub
          .gdAccBox.cmnAccBox
            .cmnAccdn
              .accHead(@click="selectItem('Bath1')" :class="{'active': activeItem == 'Bath1'}") MEASURING FOR A CEILING-MOUNTED UNIT
              .accList(v-if="activeItem == 'Bath1'")
                .cmnAccLst
                  p.fontSerif 1. Measure from the top of your counter to your ceiling.
                  p.fontSerif
                    | 2. Subtract at least 36&rdquo; from this measurement (we suggest at least 36&rdquo; between the top of the bathtub and the bottom of your shelving unit).
                  p.fontSerif
                    | 3. The measurement you are left with is the maximum overall height you should select for your shelving unit.
                  p.fontSerif
                    | Please Note: Make sure you take into account crown molding, if you have crown molding our ceiling-mounted units will not work for you so we suggest looking at our wall-mounted Leo Unit instead.
                  p.fontSerif
                    | We offer many overall height options with each of our shelving units and shelf brackets to accommodate many homes.
                  p.fontSerif
                    | If our standard options don&rsquo;t work for you, we also specialize in custom work and can customize any of our products further. To customize one of our units further, simply go on the product listing and click on the &ldquo;Customize Further&rdquo; button- located right below the &ldquo;Add to Cart&rdquo; button.
                  img(src='https://res.cloudinary.com/ironabode/image/upload/v1667507350/Bathroom_qimlcd.png' alt='')
          .gdAccPrtInfo
            h5.gPrtSbTtl Over a Toilet
          .gdAccBox.cmnAccBox
            .cmnAccdn
              .accHead(@click="selectItem('Bath2')" :class="{'active': activeItem == 'Bath2'}") MEASURING FOR A CEILING-MOUNTED UNIT
              .accList(v-if="activeItem == 'Bath2'")
                .cmnAccLst
                  p.fontSerif 1. Measure from the top of your counter to your ceiling.
                  p.fontSerif
                    | 2. Subtract at least 24&rdquo; from this measurement (we suggest at least 24&rdquo; between the top of the toilet&rsquo;s tank and the bottom of your shelving unit).
                  p.fontSerif
                    | 3. The measurement you are left with is the maximum overall height you should select for your shelving unit.
                  p.fontSerif
                    | Please Note: Make sure you take into account crown molding, if you have crown molding our ceiling-mounted units will not work for you so we suggest looking at our wall-mounted Leo Unit instead.
                  p.fontSerif
                    | We offer many overall height options with each of our shelving units and shelf brackets to accommodate many homes. If our standard options don&rsquo;t work for you, we also specialize in custom work and can customize any of our products further. To customize one of our units further, simply go on the product listing and click on the &ldquo;Customize Further&rdquo; button- located right below the &ldquo;Add to Cart&rdquo; button.
                  img(src='https://res.cloudinary.com/ironabode/image/upload/v1667507350/Bathroom_qimlcd.png' alt='')
            .cmnAccdn
              .accHead(@click="selectItem('Bath3')" :class="{'active': activeItem == 'Bath3'}") MEASURING FOR A WALL-MOUNTED UNIT
              .accList(v-if="activeItem == 'Bath3'")
                .cmnAccLst
                  p.fontSerif To have your wall-mounted unit give the illusion of being ceiling-mounted:
                  p.fontSerif 1. Measure from the top of your counter to your ceiling.
                  p.fontSerif
                    | 2. Subtract at least 24&rdquo; from this measurement (we suggest at least 24&rdquo; between the top of the toilet&rsquo;s tank and the bottom of your shelving unit).
                  p.fontSerif
                    | 3. The measurement you are left with is the maximum overall height you should select for your shelving unit.
                  p.fontSerif
                    | 4. Select the 12&rdquo; spacing option on the listing- this will give the illusion that this unit is mounted to the ceiling.
                  p.fontSerif
                    | Disclaimer: We don&rsquo;t suggest this option if you have crown molding, if you have crown molding, the only wall-mounted unit that will work for your space is our Leo Unit. If you don&rsquo;t care to have your wall-mounted unit touch the ceiling, see the next option below.
                  img(src='https://res.cloudinary.com/ironabode/image/upload/v1667507350/Bathroom_qimlcd.png' alt='')
            .cmnAccdn
              .accHead(@click="selectItem('Bath4')" :class="{'active': activeItem == 'Bath4'}") FOR WALL-MOUNTED UNITS THAT WILL NOT TOUCH THE CEILING
              .accList(v-if="activeItem == 'Bath4'")
                .cmnAccLst
                  p.fontSerif 1. Find another focal point in your space (cabinets, window, art,etc.)
                  p.fontSerif
                    | 2. Measure the height of this other focal point- from the top of the counter to the top of this focal point.
                  p.fontSerif
                    | 3. Take this measurement and subtract 24&rdquo; from it (we suggest at least 24&rdquo; between the top of the toilet&rsquo;s tank and the bottom of your shelving unit).
                  p.fontSerif
                    | 4. The measurement you are left with is the maximum overall height you should select for your shelving unit.
                  p.fontSerif
                    | We offer many overall height options with each of our shelving units and shelf brackets to accommodate many homes.
                  p.fontSerif
                    | If our standard options don&rsquo;t work for you, we also specialize in custom work and can customize any of our products further. To customize one of our units further, simply go on the product listing and click on the &ldquo;Customize Further&rdquo; button- located right below the &ldquo;Add to Cart&rdquo; button.
                  img(src='https://res.cloudinary.com/ironabode/image/upload/v1667507350/Bathroom_qimlcd.png' alt='')    
section.breadcrumbBox
  .container
    ul.breadcrumb.flexBox.flexJcc.flexAic.noList
      li.bcItem
        a(href='/') Home
      li.bcItem
        a(href='#') Collections
      li.bcItem
        a(href='#') Product Page
      li.bcItem.active Will It Fit? Article


Footer


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