<template lang="pug">
.blogPage.wrapper
section.pageTopBox
  .container
    ul.breadcrumb.flexBox.flexAic.noList
      li.bcItem
        a(href='/') Home
      li.bcItem.active Blog
    .ttlBox
      h3.pageTitle.txtCenter IRON ABODE BLOG
section.blogMain
  .container
    .blogMnGd
      .blogList
        //- pre {{posts}}
        .blogCd(v-for="post in posts")
          .imgBox
            img.imgRes(:src="getImage({image: post.gallery[0].src, width: 400, height: 316, type: 'c_fill'})" v-if="post.gallery[0]")
          .infoBox.fontSerif
            h2.blgTtl {{post.title}}
            h5.blgSbTtl(v-if="post.sub_title") {{post.sub_title}}
            p.blgBy(style="text-transform: uppercase;") POSTED {{monthOnly(post.created)}}. 
              span {{dateFragment(post.created)}}
            .blgTxt {{excerpt(post.copy)}}
          NuxtLink.blgRead(:to="'/'+post.url") Read more
        
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
if(content.posts && content.posts.length) posts = content.posts;

function excerpt(html) {
  return html.replace(/(<([^>]+)>)/ig,"").slice(0, 800);
}
</script>