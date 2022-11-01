<template lang="pug">
.odrQnPage.wrapper
Header
section.faqBanner
  img.imgRes(src='https://res.cloudinary.com/ironabode/image/upload/v1663031590/faq-banner_wzfzjl.png' alt='')
section.odrQnBox.faqBox
  .container
    .faqInner
      .faqTop.faqGrid
        h4.faqTitle.fontSerif Featured Articles
        .faqSearch
          input.frmInp(type='text' placeholder='Find Your Answer')
          img(src='https://res.cloudinary.com/ironabode/image/upload/v1663031619/search_tiew09.svg' alt='')
      .odrQnPrt
        h4.oQPrtTtl INSTALLATION GUIDES
        p.oQPrtTxt.fontSerif An Installation Guide is included with each purchase. However, our Installation Guides are also available online. Click here to view them.
      .odrQnPrt
        h4.oQPrtTtl WHERE CAN I FIND MY INSTALLATIONS?
        p.oQPrtTxt.fontSerif Inside your package is a clear envelope. Here you will find your Installation Instructions, hardware, and order information.
      .odrQnPrt
        h4.oQPrtTtl WHERE CAN I FIND MY HARDWARE?
        p.oQPrtTxt.fontSerif Inside your package is a clear envelope. Here you will find your Installation Instructions, hardware, and order information.
      .odrQnPrt
        h4.oQPrtTtl WHAT DOES THE 2-YEAR WARRANTY COVER?
        p.oQPrtTxt.fontSerif Your vertical brackets are warranted for two years from the original date of purchase under the terms and conditions of this warranty. This warranty covers manufacturing defects. Proof of purchase is required. This warranty is only applicable to the original owner and original delivery address. This warranty does not cover loss, damage, breakage, or changes in appearance due to normal wear, careless handling, or improper installation.
        br
        p.oQPrtTxt.fontSerif To make this warranty valid, please register your purchase #[a(href="/my-account/") here.]

      .btnBox.txtCenter
        a.btn.btnBg.btnGry.btnTxtWht(href='/faq') MAIN FAQS PAGE
section.breadcrumbBox
  .container
    ul.breadcrumb.flexBox.flexJcc.flexAic.noList
      li.bcItem
        a(href='/') Home
      li.bcItem
        a(href='/faq') FAQs
      li.bcItem.active Featured Articles




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