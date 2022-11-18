<template lang="pug">
.prodGallery
  .pMainGall.prodGall
    .prodMainImg
      img(:src="getImage({image: mainImage.src, width: 600})" v-if="mainImage")
    .prodGlRow
      .prGlThumb(v-for="image in filteredGallery()")
        a(@click="mainImage = image"): img(:src="getImage({image: image.src, width: 100, height: 100, type: 'c_fill'})")

  .lifestyleGallery.xl.lg.md.sm(v-if="content.lifestyle_gallery && content.lifestyle_gallery.length")
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
    //- .pMainGall.prodGall
    //-   .prodMainImg
    //-     .arrowLeft: i.fal.fa-chevron-left
    //-     .image: img(:src="getImage({image: lifestyleImage.src, width: 600, height: 600, type: 'c_fill'})" v-if="lifestyleImage")
    //-     .arrowRight: i.fal.fa-chevron-right
    //-   .prodGlRow
    //-     .prGlThumb(v-for="image in content.lifestyle_gallery")
    //-       a(@click="lifestyleImage = image"): img(:src="getImage({image: image.src, width: 100, height: 100, type: 'c_fill'})")
</template>

<script setup>
let {content, selectedOptions} = defineProps(['content', 'selectedOptions']);
let mainImage = $ref(filteredGallery()[0]);

let glideMain;
let glideThumbnails;
onMounted(() => {
  setTimeout(() => {
    glideMain = new Glide('.glide').mount();
    glideThumbnails = new Glide('.glideThumbnails', { perView: content.lifestyle_gallery.length, bound: content.lifestyle_gallery.length }).mount();
  }, 100);
})

function setLifestyleImage(index) {
  glideMain.go(`=${index}`);
}

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