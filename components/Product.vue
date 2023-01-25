<template lang="pug">
.productPage.wrapper

  //- RenderVueString(html=`<p>Testing out {{'Rendered Output'}} <a @click="$emit('openPopup', 'https://res.cloudinary.com/ironabode/image/upload/v1663031629/banner-1_z1okc9.png')">Open</a></p>` @openPopup="value => openPopup(value)")

  Breadcrumbs(:content="content")

  ExplainerPopup(v-if="explainerPopup" @close="explainerPopup = null" :popup="explainerPopup")

  section.prodBox
    .container
      .prodDtlsBox
        ProductGallery(:content="content" :selectedOptions="selectedOptions" :key="renderKey")

        .prodDtls
          ProductAbout(:content="content" :showCustom="showCustom")

          ProductOptions(:content="content" v-if="content && content.options" @change="newContent => setupContent(newContent)" @showCustom="value => showCustom = value")

  //- .lifestyleGallery.xs(v-if="content.lifestyle_gallery && content.lifestyle_gallery.length" style="margin-top: -240px;")
    .glide
      .glide__track(data-glide-el="track")
        .glide__slides
          .slide.glide__slide(v-for="image of content.lifestyle_gallery")
            .image: img(:src="getImage({image: image.src, width: 600, height: 600, type: 'c_fill'})")
      .glide__arrows(data-glide-el="controls")
        button.glide__arrow.glide__arrow--left(data-glide-dir="<"): i.fas.fa-chevron-left
        button.glide__arrow.glide__arrow--right(data-glide-dir=">"): i.fas.fa-chevron-right

  ProductTabs(:content="content" @openPopup="value => openPopup(value)")

  //- What Makes Our Shelving Unique
  WhatMakesUnique

  //- Iron Abode In Real Life
  IronAbodeRealLife

  //- Customer Reviews
  CustomerReviews(:reviews="productReviews")

  //- Shop the collection
  RecommendedCollection(:content="content")

  Footer
</template>

<script setup>
let {content} = defineProps(['content']);
let selectedOptions = $ref(null);
let renderKey = $ref(0); // Force rerender
let showCustom = $ref(false);
const { productReviews } = useActivity()

function setupContent(newContent) {
  selectedOptions = newContent.options;
  renderKey++; // Force a re-render of any component with key
}

onMounted(() => {
  if(useCookie(useRuntimeConfig().public.auth_cookie).value) {
    fetchPost('/api/track-pageview', {content});
  }
})

let activeItem = $ref(null);

function selectItem(item) {
  if(activeItem != item) {
    activeItem = item;
  } else {
    activeItem = null;
  }
}

let explainerPopup = $ref(null);
function openPopup(value) {
  explainerPopup = value;
}
</script>