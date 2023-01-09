<template lang="pug">
.faq.wrapper
  section.faqBanner
    img.imgRes(src='https://res.cloudinary.com/ironabode/image/upload/v1663031590/faq-banner_wzfzjl.png' alt='')
  section.faqBox
    .container
      .faqInner
        .faqTop.faqGrid
          h4.faqTitle.fontSerif Hello, How can we help?
          .faqSearch
            input.frmInp(type='text' placeholder='Find Your Answer' v-model="valueSearch")
            img(src='https://res.cloudinary.com/ironabode/image/upload/v1663031619/search_tiew09.svg' alt='')
        template(v-for="(sectionItem, sectionIndex) in faq || []")
          .faqPart(
            v-if="!valueSearch || sectionItem.q.filter(x => x.text.trim().toLowerCase().includes(valueSearch.trim().toLowerCase())).length"
            :key="`faq-page-section-${sectionIndex}`"
          )
            h5.faqPrtTtl {{ sectionItem.text }}
            .faqGrid
              template(v-for="(qItem, qIndex) in sectionItem.q || []")
                a.faqBar(
                  v-if="!valueSearch || qItem.text.trim().toLowerCase().includes(valueSearch.trim().toLowerCase())"
                  :key="`faq-page-section-${sectionIndex}-${qIndex}`" :href='qItem.routePath'
                )
                  | {{ qItem.text }}
  
  section.breadcrumbBox
    .container
      ul.breadcrumb.flexBox.flexJcc.flexAic.noList
        li.bcItem
          a(href='#') Home
        li.bcItem.active FAQs
  
  
  
  
  Footer
  
  
</template>
  
<script setup>
  const valueSearch = ref('')
  
  const faq = ref([
    {
      text: "FEATURED ARTICLES",
      q: [
        { text: 'Installation Guides', routePath: '/featured-articles/' },
        { text: 'Where can I find my installations?', routePath: '/featured-articles/' },
        { text: 'Where can I find my hardware?', routePath: '/featured-articles/' },
        { text: 'What does the 2-Year Warranty Cover?', routePath: '/featured-articles/' }
      ]
    },
    {
      text: "ORDERING QUESTIONS",
      q: [
        { text: 'Can I expedite the production and/or shipping of my order?', routePath: '/ordering-questions/' },
        { text: 'Can I cancel my order?', routePath: '/ordering-questions/' },
        { text: 'Can I make changes to my order after placing it?', routePath: '/ordering-questions/' },
        { text: 'Do you offer financing options?', routePath: '/ordering-questions/' }
      ]
    },
    {
      text: "MANUFACTURING QUESTIONS",
      q: [
        { text: 'Where are IRON ABODE products made?', routePath: '/manufacturing-questions/' },
        { text: 'What materials do you use?', routePath: '/manufacturing-questions/' }
      ]
    },
    {
      text: "CLEANING",
      q: [
        { text: 'How do I clean my glass shelving unit?', routePath: '/cleaning/' },
        { text: 'How do I clean my wood shelving unit?', routePath: '/cleaning/' }
      ]
    }
  ])
</script>
  