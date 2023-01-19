<template lang="pug">
.guide.wrapper
  ImagePopup(v-if="popupImage" :image="popupImage" @close="popupImage=null")
  section.instSec
    .container
      .instTop
        .instVdo
          .videoBox
            .videoLink
              iframe(src='https://www.youtube.com/embed/YrArtcmADmU' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture' allowfullscreen='' width='560' height='315' frameborder='0')
        .instnfo.txtCenter
          h3.pageTitle MONTY INSTALLATION INSTRUCTIONS
          p Click the tabs below to view what's included with your brackets or unit as well as how to install your brackets or unit.
      .instPart
        h4.iPrtTtl.txtCenter WALL MOUNTED MONTY
        .instAccBox.cmnAccBox
          .cmnAccdn
            .accHead(@click="selectItem('Inst1')" :class="{'active': activeItem == 'Inst1'}") WHAT'S INCLUDED
            .accList(v-if="activeItem == 'Inst1'")
              .cmnAccLst
                img.imgRes(@click="popupImage = 'https://res.cloudinary.com/ironabode/image/upload/v1663031598/instructions-1_jbf2kp.png'" src='https://res.cloudinary.com/ironabode/image/upload/v1663031598/instructions-1_jbf2kp.png' alt='')
          .cmnAccdn
            .accHead(@click="selectItem('Inst2')" :class="{'active': activeItem == 'Inst2'}") BRACKET INSTRUCTIONS
            .accList(v-if="activeItem == 'Inst2'")
              .cmnAccLst
                img.imgRes(src='https://res.cloudinary.com/ironabode/image/upload/v1663031598/instructions-2_gohdao.png' alt='')
          .cmnAccdn
            .accHead(@click="selectItem('Inst3')" :class="{'active': activeItem == 'Inst3'}") WOOD UNIT INSTRUCTIONS
            .accList(v-if="activeItem == 'Inst3'")
              .cmnAccLst
                img.imgRes(src='https://res.cloudinary.com/ironabode/image/upload/v1663031599/instructions-3_aporvg.png' alt='')
          .cmnAccdn
            .accHead(@click="selectItem('Inst4')" :class="{'active': activeItem == 'Inst4'}") GLASS UNIT INSTRUCTIONS
            .accList(v-if="activeItem == 'Inst4'")
              .cmnAccLst
                img.imgRes(src='https://res.cloudinary.com/ironabode/image/upload/v1663031599/instructions-4_tojheb.png' alt='')
          .cmnAccdn
            .accHead(@click="selectItem('Inst5')" :class="{'active': activeItem == 'Inst5'}") 3 BRACKET UNIT INSTRUCTIONS
            .accList(v-if="activeItem == 'Inst5'")
              .cmnAccLst
                img.imgRes(src='https://res.cloudinary.com/ironabode/image/upload/v1663031599/instructions-5_o7m3qg.png' alt='')
      .instPart
        h4.iPrtTtl.txtCenter CEILING MOUNTED MONTY
        .instAccBox.cmnAccBox
          .cmnAccdn
            .accHead(@click="selectItem('Inst6')" :class="{'active': activeItem == 'Inst6'}") WHAT'S INCLUDED
            .accList(v-if="activeItem == 'Inst6'")
              .cmnAccLst
                img.imgRes(src='https://res.cloudinary.com/ironabode/image/upload/v1663031598/instructions-1_jbf2kp.png' alt='')
          .cmnAccdn
            .accHead(@click="selectItem('Inst7')" :class="{'active': activeItem == 'Inst7'}") BRACKET INSTRUCTIONS
            .accList(v-if="activeItem == 'Inst7'")
              .cmnAccLst
                img.imgRes(src='https://res.cloudinary.com/ironabode/image/upload/v1663031598/instructions-2_gohdao.png' alt='')
          .cmnAccdn
            .accHead(@click="selectItem('Inst8')" :class="{'active': activeItem == 'Inst8'}") WOOD UNIT INSTRUCTIONS
            .accList(v-if="activeItem == 'Inst8'")
              .cmnAccLst
                img.imgRes(src='https://res.cloudinary.com/ironabode/image/upload/v1663031599/instructions-3_aporvg.png' alt='')
          .cmnAccdn
            .accHead(@click="selectItem('Inst9')" :class="{'active': activeItem == 'Inst9'}") GLASS UNIT INSTRUCTIONS
            .accList(v-if="activeItem == 'Inst9'")
              .cmnAccLst
                img.imgRes(src='https://res.cloudinary.com/ironabode/image/upload/v1663031599/instructions-4_tojheb.png' alt='')
          .cmnAccdn
            .accHead(@click="selectItem('Inst10')" :class="{'active': activeItem == 'Inst10'}") 3 BRACKET UNIT INSTRUCTIONS
            .accList(v-if="activeItem == 'Inst10'")
              .cmnAccLst
                img.imgRes(src='https://res.cloudinary.com/ironabode/image/upload/v1663031599/instructions-5_o7m3qg.png' alt='')
      .instTxtBox
        p.fontSerif.disclaimerInc Due to every home being unique (varying construction materials and methods), IRON ABODE's products must be installed by licenced professionals to ensure their products will work for your specific application. Incorrect installation of our products could result in sagging shelves, damage, injury, or death. IRON ABODE is not liable for the incorrect installation of their products.
  //- section.breadcrumbBox
  //-   .container
  //-     ul.breadcrumb.flexBox.flexJcc.flexAic.noList
  //-       li.bcItem
  //-         a(href='/') Home
  //-       li.bcItem
  //-         a(href='#') Collections
  //-       li.bcItem
  //-         a(href='#') Product Page
  //-       li.bcItem.active Monty Installation Instructions



  Footer


</template>

<script setup>
let activeItem = $ref(null);
let popupImage = $ref(null);

function selectItem(item) {
  if(activeItem != item) {
    activeItem = item;
  } else {
    activeItem = null;
  }
}
</script>