<template lang="pug">
.odrQnPage.wrapper
Header
section.faqBanner
  img.imgRes(src='https://res.cloudinary.com/ironabode/image/upload/v1663031590/faq-banner_wzfzjl.png' alt='')
section.odrQnBox.faqBox
  .container
    .faqInner
      .faqTop.faqGrid
        h4.faqTitle.fontSerif Cleaning Questions
        .faqSearch
          input.frmInp(type='text' placeholder='Find Your Answer')
          img(src='https://res.cloudinary.com/ironabode/image/upload/v1663031619/search_tiew09.svg' alt='')
      .odrQnPrt
        h4.oQPrtTtl HOW DO I CLEAN MY GLASS SHELVING?
        p.oQPrtTxt.fontSerif To clean the metal of your unit:
        p.oQPrtTxt.fontSerif Step 1: Mix a solution of mild dish soap and warm water.
        p.oQPrtTxt.fontSerif Step 2: Gently clean the surface with the solution immersed in a soft microfiber cloth or sponge.
        p.oQPrtTxt.fontSerif Important: Harsh chemicals/ mixtures and hard brushes should never be used to clean your unit, as they will damage the finish over time.
        br
        p.oQPrtTxt.fontSerif To clean the glass of your unit:
        p.oQPrtTxt.fontSerif Step 1: Start mixing mild dish soap with water and place it in a spray bottle.
        p.oQPrtTxt.fontSerif Step 2: Spray the mixture on the tempered glass surface.
        p.oQPrtTxt.fontSerif Step 3: Let it sit for a few minutes.
        p.oQPrtTxt.fontSerif Step 4: Take a sponge and use it to remove the solution.
        p.oQPrtTxt.fontSerif Step 5: Finally, take a soft microfiber towel and wipe the glass dry.
        p.oQPrtTxt.fontSerif Important: Harsh chemicals and hard brushes should never be used to clean your unit, as they will damage the glass over time.

      .odrQnPrt
        h4.oQPrtTtl HOW DO I CLEAN MY WOOD SHELVING?
        p.oQPrtTxt.fontSerif To clean the metal of your unit:
        p.oQPrtTxt.fontSerif Step 1: Mix a solution of mild dish soap and warm water.
        p.oQPrtTxt.fontSerif Step 2: Gently clean each shelf with a dampened sponge or microfiber cloth.
        p.oQPrtTxt.fontSerif Important: Harsh chemicals/ mixtures and hard brushes should never be used to clean your unit, as they will damage the wood over time.


      .btnBox.txtCenter
        a.btn.btnBg.btnGry.btnTxtWht(href='/faq') MAIN FAQS PAGE
section.breadcrumbBox
  .container
    ul.breadcrumb.flexBox.flexJcc.flexAic.noList
      li.bcItem
        a(href='/') Home
      li.bcItem
        a(href='/faq') FAQs
      li.bcItem.active Cleaning Questions




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