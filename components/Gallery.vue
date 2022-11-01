<template lang="pug">
.gallery.wrapper
  Header

  GalleryImageProducts(v-if="showProducts" :galleryItem="showProducts" @close="showProducts = null")

  section.pageHead
    .container
      .secTop
        h3.pageTitle.txtCenter IRON ABODE, IN REAL LIFE
  section.galSec
    .galFilter.filterBox
      .container
        .galFltr.fltrAll
          h4 FILTERS
          .fltrList.flexBox.flexWrap
            .fltrOptn(v-for="category in categories")
              label
                input.fCheckbox(type='checkbox' v-model="filters" :value="category.id")
                span {{category.label}}
    .galBox
      .galImg(v-for="item in filteredGallery()" @click="showProducts = item")
        img(:src="getImage({image: item.image, width: 500, height: 500, type: 'c_fill'})")
        span.imgTag(v-if="item.products && item.products.length") CLICK TO VIEW PRODUCTS
    //- .btnBox.txtCenter
    //-   button.btn.btnBg.btnGry.btnTxtWht.btnResp VIEW MORE
  section.breadcrumbBox
    .container
      ul.breadcrumb.flexBox.flexJcc.flexAic.noList
        li.bcItem
          a(href='#') Home
        li.bcItem.active Gallery

  Footer
</template>

<script setup>
let categories = $ref([]);
categories = await fetchPost('/api/get-gallery-categories', );
let filters = $ref([]);
let gallery = $ref([]);
gallery = await fetchPost('/api/get-gallery');
let showProducts = $ref(null);

function filteredGallery() {
  return gallery.filter(item => {
    let showItem = true;

    let hasOneCategory = false;
    for(let filter of filters) {
      for(let category of item.categories) {
        if(category.category_id == filter) {
          hasOneCategory = true;
          break;
        }
      }
    }
    if(!hasOneCategory && filters.length) showItem = false;

    return showItem;
  })
}
</script>