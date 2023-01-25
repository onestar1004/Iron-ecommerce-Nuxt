<template lang="pug">
.prodGallery
  .pMainGall.prodGall
    .prodMainImg
      img(:src="getImage({image: mainImage.src, width: 600})" v-if="mainImage")
    .prodGlRow
      .prGlThumb(v-for="image in filteredGallery()")
        a(@click="mainImage = image"): img(:src="getImage({image: image.src, width: 100, height: 100, type: 'c_fill'})")


  .lifestyleGallery.xlMore.xl.lg.md.sm(v-if="content.lifestyle_gallery && content.lifestyle_gallery.length")
    Carousel(ref="mainCarousel" id="gallery" :items-to-show="1" :wrap-around="false" :wrapAround="true" @slide-end="v => mainSlideIndex = v.currentSlideIndex")
      template(#addons)
        Navigation
      Slide(v-for="(slide, index) in content.lifestyle_gallery" :key="`product-gallery-${index}`")
        .carousel__item.hero(:style="{ 'background-image': `url(${getImage({ image: slide.src, width: 600, height: 600, type: 'c_fill' })})` }")

    Carousel(ref="subCarousel" id="thumbnail" :items-to-show="4" :wrap-around="true" style="margin-top: 22px;" @slide-end="v => subSlideIndex = v.currentSlideIndex")
      Slide(v-for="(slide, index) in content.lifestyle_gallery" :key="`product-gallery-thumbnail-${index}`")
        .carousel__item.hero_thumbnail(
          @click="() => slideTo(index - 1)"
          :style="{ 'background-image': `url(${getImage({ image: slide.src, width: 100, height: 100, type: 'c_fill' })})` }"
        )

  //- .lifestyleGallery.xlMore.xl.lg.md.sm(v-if="content.lifestyle_gallery && content.lifestyle_gallery.length" style="display: none;")
    .glide
      .glide__track(data-glide-el="track")
        .glide__slides
          .slide.glide__slide(v-for="image of content.lifestyle_gallery")
            .image: img(:src="getImage({image: image.src, width: 600, height: 600, type: 'c_fill'})")
      .glide__arrows(data-glide-el="controls")
        button.glideArrowLeft.glide__arrow.glide__arrow--left(data-glide-dir="<"): i.fas.fa-chevron-left
        button.glideArrowRight.glide__arrow.glide__arrow--right(data-glide-dir=">"): i.fas.fa-chevron-right

    .clear(style="height: 10px;")

    .glideThumbnails
      .glide__track(data-glide-el="track")
        .glide__slides
          .glide__slide(@click="setLifestyleImage(index)" v-for="(image, index) of content.lifestyle_gallery")
            .image: img(:src="getImage({image: image.src, width: 100, height: 100, type: 'c_fill'})")
</template>

<script setup>
let {content, selectedOptions} = defineProps(['content', 'selectedOptions']);
let mainImage = $ref(filteredGallery()[0]);

let glideMain;
let glideThumbnails;
onMounted(() => {
  // setTimeout(() => {
  //   glideMain = new Glide('.glide').mount();
  //   glideThumbnails = new Glide('.glideThumbnails', { perView: content.lifestyle_gallery.length, bound: content.lifestyle_gallery.length }).mount();
  // }, 800);
})

function setLifestyleImage(index) {
  glideMain.go(`=${index}`);
}

const mainSlideIndex = ref(0)
const subSlideIndex = ref(0)

const mainCarousel = ref(null)
const subCarousel = ref(null)
const currentSlide = $ref(0)

const slideTo = function (val) {
  subSlideIndex.value = val
}

watch(mainSlideIndex, (value) => {
  subSlideIndex.value = value
  subCarousel.value.slideTo(subSlideIndex.value)
})

watch(subSlideIndex, (value) => {
  mainSlideIndex.value = value
  mainCarousel.value.slideTo(mainSlideIndex.value)
})

function filteredGallery() {
  return content.gallery.filter(image => {
    let show = true;
    if(image.rules && image.rules.length) {
      for(let rule of image.rules) {
        let allConditionsMet = true;

        for(let item of rule.conditions) {
          item.conditionMet = false;

          let optionValue = getOptionValue(item.option_id);
          let conditionValues = item.value.split('\n');

          if(item.condition == 'Contains') {
            if(conditionValues.includes(optionValue)) {
              item.conditionMet = true;
              break;
            }
          }

          if(item.condition == 'Not Contains') {
            if(!conditionValues.includes(optionValue)) {
              item.conditionMet = true;
              break;
            }  
          }
        }

        for(let item of rule.conditions) {
          if(!item.conditionMet) allConditionsMet = false;
        }

        if(allConditionsMet) {
          if(rule.operator == 'Exclude') {
            show = false;
          }
          if(rule.operator == 'Include') {
            show = true;
          }
        }
      }
    }

    return show;
  })
}

function getOptionValue(option_id) {
  let optionValue = null;

  if(selectedOptions) {
    for(let option of selectedOptions) {
      if(option.id == option_id) {
        if(option.selection && option.selection.label) {
          optionValue = option.selection.label;
        }
        break;
      }
    }
  }

  return optionValue;
}

</script>