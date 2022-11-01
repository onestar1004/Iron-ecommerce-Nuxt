<template lang="pug">
.odrQnPage.wrapper
Header
section.faqBanner
  img.imgRes(src='https://res.cloudinary.com/ironabode/image/upload/v1663031590/faq-banner_wzfzjl.png' alt='')
section.odrQnBox.faqBox
  .container
    .faqInner
      .faqTop.faqGrid
        h4.faqTitle.fontSerif Ordering Questions
        .faqSearch
          input.frmInp(type='text' placeholder='Find Your Answer')
          img(src='https://res.cloudinary.com/ironabode/image/upload/v1663031619/search_tiew09.svg' alt='')
      .odrQnPrt
        h4.oQPrtTtl CAN I EXPEDITE THE PRODUCTION AND/OR SHIPPING OF MY ORDER?
        p.oQPrtTxt.fontSerif Yes, there is an option to rush production for an additional fee on each listing. 
        p.oQPrtTxt.fontSerif If you would like to order rush shipping for your order, the price will vary depending on which products/ options you choose. For bracket orders, the price for expedited shipping to a domestic address starts at an additional $60. For unit orders, the price for expedited shipping to a domestic address begins at an additional $120
      .odrQnPrt
        h4.oQPrtTtl CAN I MAKE CHANGES TO MY ORDER AFTER PLACING IT?
        p.oQPrtTxt.fontSerif Your order will be handcrafted just for you. Therefore, the time to change your order after placing it is minimal. Please view the categories below to see how much time is allowed to change your order.
        .cmnAccBox
          .odrQnAcc.cmnAccdn
            .accHead(@click="selectItem('q1')" :class="{'active': activeItem == 'q1'}") BRACKETS
            .accList(v-if="activeItem == 'q1'")
              .cmnAccLst
                p.dotBfr.fontSerif You have 24 hours to cancel or change your order unless it is rushed.
                p.dotBfr.fontSerif If you ordered over 24 hours ago and need to cancel your bracket order, you will be charged a 10% manufacturing fee or a 20% manufacturing fee for custom brackets.
                p.dotBfr.fontSerif Click here to cancel/ change your order.
          .odrQnAcc.cmnAccdn
            .accHead(@click="selectItem('q22')" :class="{'active': activeItem == 'q22'}") COMPLETE UNITS
            .accList(v-if="activeItem == 'q22'")
              .cmnAccLst
                p.dotBfr.fontSerif You have 72 hours to cancel or change your order, unless it was rushed.
                p.dotBfr.fontSerif If you ordered over 72 hours ago, you will be charged a 20% manufacturing fee for a standard unit or 30% for a custom unit.
                p.dotBfr.fontSerif Click here to cancel/ change your order.
          .odrQnAcc.cmnAccdn
            .accHead(@click="selectItem('q2')" :class="{'active': activeItem == 'q2'}") RUSHED BRACKETS
            .accList(v-if="activeItem == 'q2'")
              .cmnAccLst
                p.dotBfr.fontSerif You have 12 hours to cancel or change your order.
                p.dotBfr.fontSerif If you ordered over 12 hours ago, you will be charged a 10% manufacturing fee or a 20% manufacturing fee for custom brackets.
                p.dotBfr.fontSerif Click here to cancel/ change your order.
          .odrQnAcc.cmnAccdn
            .accHead(@click="selectItem('q3')" :class="{'active': activeItem == 'q3'}") RUSHED UNITS
            .accList(v-if="activeItem == 'q3'")
              .cmnAccLst
                p.dotBfr.fontSerif You have 24 hours to cancel or change your order.
                p.dotBfr.fontSerif If you ordered over 24 hours ago, you will be charged a 20% manufacturing fee for a standard unit or 30% for a custom unit.
                p.dotBfr.fontSerif Click here to cancel/ change your order.
      .odrQnPrt
        h4.oQPrtTtl CAN I CANCEL MY ORDER?
        p.oQPrtTxt Your order will be handcrafted just for you. Therefore, the time to change your order after placing it is minimal. 
        p Please view the categories below to see how much time is allowed to change your order.
        .cmnAccBox
          .odrQnAcc.cmnAccdn
            .accHead(@click="selectItem('q4')" :class="{'active': activeItem == 'q4'}") BRACKETS
            .accList(v-if="activeItem == 'q4'")
              .cmnAccLst
                p.dotBfr.fontSerif You have 24 hours to cancel or change your order unless it is rushed.
                p.dotBfr.fontSerif If you ordered over 24 hours ago and need to cancel your bracket order, you will be charged a 10% manufacturing fee or a 20% manufacturing fee for custom brackets.
                p.dotBfr.fontSerif Click here to cancel/ change your order.
          .odrQnAcc.cmnAccdn
            .accHead(@click="selectItem('q5')" :class="{'active': activeItem == 'q5'}") COMPLETE UNITS
            .accList(v-if="activeItem == 'q5'")
              .cmnAccLst
                p.dotBfr.fontSerif You have 72 hours to cancel or change your order, unless it was rushed.
                p.dotBfr.fontSerif If you ordered over 72 hours ago, you will be charged a 20% manufacturing fee for a standard unit or 30% for a custom unit.
                p.dotBfr.fontSerif Click here to cancel/ change your order.
          .odrQnAcc.cmnAccdn
            .accHead(@click="selectItem('q6')" :class="{'active': activeItem == 'q6'}") RUSHED BRACKETS
            .accList(v-if="activeItem == 'q6'")
              .cmnAccLst
                p.dotBfr.fontSerif You have 12 hours to cancel or change your order.
                p.dotBfr.fontSerif If you ordered over 12 hours ago, you will be charged a 10% manufacturing fee or a 20% manufacturing fee for custom brackets.
                p.dotBfr.fontSerif Click here to cancel/ change your order.
          .odrQnAcc.cmnAccdn
            .accHead(@click="selectItem('q7')" :class="{'active': activeItem == 'q7'}") RUSHED UNITS
            .accList(v-if="activeItem == 'q7'")
              .cmnAccLst
                p.dotBfr.fontSerif You have 24 hours to cancel or change your order.
                p.dotBfr.fontSerif If you ordered over 24 hours ago, you will be charged a 20% manufacturing fee for a standard unit or 30% for a custom unit.
                p.dotBfr.fontSerif Click here to cancel/ change your order.
      .odrQnPrt
        h4.oQPrtTtl DO YOU OFFER FINANCING OPTIONS?
        p.oQPrtTxt Yes! We offer various financing options through Affirm.
      .btnBox.txtCenter
        a.btn.btnBg.btnGry.btnTxtWht(href='/faq') MAIN FAQS PAGE
section.breadcrumbBox
  .container
    ul.breadcrumb.flexBox.flexJcc.flexAic.noList
      li.bcItem
        a(href='/') Home
      li.bcItem
        a(href='/faq') FAQs
      li.bcItem.active Ordering Questions




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