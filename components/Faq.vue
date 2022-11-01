<template lang="pug">
.faq.wrapper
Header
section.faqBanner
  img.imgRes(src='https://res.cloudinary.com/ironabode/image/upload/v1663031590/faq-banner_wzfzjl.png' alt='')
section.faqBox
  .container
    .faqInner
      .faqTop.faqGrid
        h4.faqTitle.fontSerif Hello, How can we help?
        .faqSearch
          input.frmInp(type='text' placeholder='Find Your Answer')
          img(src='https://res.cloudinary.com/ironabode/image/upload/v1663031619/search_tiew09.svg' alt='')
      .faqPart
        h5.faqPrtTtl FEATURED ARTICLES
        .faqGrid
          a.faqBar(href='/featured-articles/') Installation Guides
          a.faqBar(href='/featured-articles/') Where can I find my installations?
          a.faqBar(href='/featured-articles/') Where can I find my hardware?
          a.faqBar(href='/featured-articles/') What does the 2-Year Warranty Cover?
      .faqPart
        h5.faqPrtTtl ORDERING QUESTIONS
        .faqGrid
          a.faqBar(href='/ordering-questions/') Can I expedite the production and/or shipping of my order? 
          a.faqBar(href='/ordering-questions/') Can I cancel my order?
          a.faqBar(href='/ordering-questions/') Can I make changes to my order after placing it?
          a.faqBar(href='/ordering-questions/') Do you offer financing options?
      .faqPart
        h5.faqPrtTtl MANUFACTURING QUESTIONS
        .faqGrid
          a.faqBar(href='/manufacturing-questions/') Where are IRON ABODE products made?
          a.faqBar(href='/manufacturing-questions/') What materials do you use?
      .faqPart
        h5.faqPrtTtl CLEANING
        .faqGrid
          a.faqBar(href='/cleaning/') How do I clean my glass shelving unit?
          a.faqBar(href='/cleaning/ ') How do I clean my wood shelving unit?
section.breadcrumbBox
  .container
    ul.breadcrumb.flexBox.flexJcc.flexAic.noList
      li.bcItem
        a(href='#') Home
      li.bcItem.active FAQs




Footer


</template>