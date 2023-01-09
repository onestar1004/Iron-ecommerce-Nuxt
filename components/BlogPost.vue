blog<template lang="pug">
.articlePage.wrapper
section.pageTopBox
  .container
    ul.breadcrumb.flexBox.flexAic.noList
      li.bcItem
        a(href='/') Home
      li.bcItem
        a(href='/blog') Blog
      li.bcItem.active {{content.title}}
    .ttlBox
      h3.pageTitle.txtCenter {{content.title}}
section.articMain.blogMain
  .container
    .blogMnGd
      .articBox.blogList
        .aTxtGrp
          .aTxtGrp.fontSerif
            h5.artSbTtl(v-if="content.sub_title") {{content.sub_title}}
            p.artBy POSTED {{monthOnly(content.created)}}. {{dateFragment(content.created)}}
          .contentCopy(v-html="content.copy" v-if="content.copy")
      .blogRcnt.fontSerif
        .blgRcB
          h4 RECENT POSTS
          ul.blgRcLst.noList
            li(v-for="post in posts.slice(0, 3)")
              NuxtLink(:to="'/'+post.url") {{post.title}}
        .smplCard.txtCenter
          .imgBox
            img(src='https://res.cloudinary.com/ironabode/image/upload/v1663031588/collection_hrqrcj.png' alt='')
          .txtBox
            h5 Not sure what to choose?
            a(href='/finish-samples/') Order Free Samples
            p Shipped to you in 2-5 business days.
section.alsoLike.bstSlr
  .container
    .secTop
      h3.secTitle.txtCenter YOU MAY ALSO LIKE
    .bSlrBox.flexBox
      a(href='/hugo-shelving-unit/').bSlrCard
        .bSlCrdImg
          img(src='https://res.cloudinary.com/ironabode/image/upload/v1663031585/bestSeller-1_v3jcpo.png' alt='')
        .bSlCrdInfo
          h5 HUGO SHELVING UNIT
      a(href='/roux-shelving-unit/').bSlrCard
        .bSlCrdImg
          img(src='https://res.cloudinary.com/ironabode/image/upload/v1663031585/bestSeller-2_egocgu.png' alt='')
        .bSlCrdInfo
          h5 ROUX SHELVING GLASS UNIT
      a(href='/oslo-shelving-unit/').bSlrCard
        .bSlCrdImg
          img(src='https://res.cloudinary.com/ironabode/image/upload/v1663031585/bestSeller-3_bxbndy.png' alt='')
        .bSlCrdInfo
          h5 OSLO SHELVING WALNUT UNIT
      a(href='/riviera-shelving-unit/').bSlrCard
        .bSlCrdImg
          img(src='https://res.cloudinary.com/ironabode/image/upload/v1663031586/bestSeller-4_xtbrlc.png' alt='')
        .bSlCrdInfo
          h5 RIVIERA SHELVING GLASS UNIT

WhatMakesUnique


Footer


</template>

<script setup>
let {content} = defineProps(['content']);

let posts = $ref([]);
posts = await fetchPost('/api/get-posts', {filters: [{category_id: 2}]});
</script>