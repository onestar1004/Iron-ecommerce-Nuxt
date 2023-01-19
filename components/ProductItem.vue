<template lang="pug">
.nAPdCd(
  @mouseenter="() => onHover = true"
  @mouseleave="() => onHover = false"
)
  img(:src="imageUrl" :alt="imageAlt || ''")
  .nAPdCdTxt
    h5 {{ title }}
    p.smallTxt {{ type }}
    p From {{ price }}

  a.hover-content(:show="onHover" :href="href")
    img(:src="imageUrl" :alt="imageAlt || ''")
    .nAPdCdTxt
      h5 {{ title }}
      p.smallTxt {{ type }}
      p From {{ price }}
      .flexInline.flexGap2.flexAic
        p 5 Shelf Options
        .flexInline.flexGap2
          div.prdctOptionTile(v-for="(item, index) in shelfOptions" :key="`product-item-shelf-options-${uuidv4()}-${index}`" :style="{ backgroundImage: `url(${item.url})` }")

      .flexInline.flexGap2.flexAic
        p 7 Finish Options
        .flexInline.flexGap2
          div.prdctOptionTile(v-for="(item, index) in swatches" :key="`product-item-shelf-options-${uuidv4()}-${index}`" :style="{ backgroundImage: `url(${item.url})` }")
      p(v-for="item in listInfo" :key="`product-item-${$uuid()}`") {{ item }}
</template>

<script setup>
import { v4 as uuidv4 } from 'uuid'
import { shelfOptions, swatches } from '@/lib/product-values/shared/product-options'

const props = defineProps({
  title: {
    type: String,
    default: ''
  },
  type: {
    type: String,
    default: '',
  },
  price: {
    type: String,
    default: ''
  },
  imageUrl: {
    type: String,
    default: ''
  },
  href: {
    type: String,
    default: ''
  },
  imageAlt: {
    type: String,
    default: ''
  },
  listInfo: {
    type: Array,
    default: []
  }
})

const onHover = ref(false)
</script>
