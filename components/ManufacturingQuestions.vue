<template lang="pug">
.odrQnPage.wrapper
section.faqBanner
  img.imgRes(src='https://res.cloudinary.com/ironabode/image/upload/v1663031590/faq-banner_wzfzjl.png' alt='')
section.odrQnBox.faqBox
  .container
    .faqInner
      .faqTop.faqGrid
        h4.faqTitle.fontSerif Manufacturing Questions
        .faqSearch
          input.frmInp(type='text' placeholder='Find Your Answer')
          img(src='https://res.cloudinary.com/ironabode/image/upload/v1663031619/search_tiew09.svg' alt='')
      .odrQnPrt
        h4.oQPrtTtl WHERE ARE IRON ABODE PRODUCTS MADE?
        p.oQPrtTxt.fontSerif All of our products are thoughtfully designed and handcrafted by artisans in Eastern Idaho.
      .odrQnPrt
        h4.oQPrtTtl WHAT MATERIALS ARE USED?
        p.oQPrtTxt.fontSerif We exclusively source our materials from U.S suppliers concerned about quality and sustainability. 
        p.oQPrtTxt.fontSerif We acquire our steel from numerous U.S. steel mills that specialize in providing carefully selected, high quality steel that is 100% recyclable. This steel is then powder coated in our facility for long-term durability.
        p.oQPrtTxt.fontSerif We craft our wood shelves from hardwood slabs. We source these slabs from U.S suppliers who are FSC (Forest Stewardship Council) certified.


      .btnBox.txtCenter
        a.btn.btnBg.btnGry.btnTxtWht(href='/faq') MAIN FAQS PAGE
section.breadcrumbBox
  .container
    ul.breadcrumb.flexBox.flexJcc.flexAic.noList
      li.bcItem
        a(href='/') Home
      li.bcItem
        a(href='/faq') FAQs
      li.bcItem.active Manufacturing Questions




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