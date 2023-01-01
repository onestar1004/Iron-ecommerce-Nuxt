<template lang="pug">
.nAPdCd(
  @mouseenter="() => onHover = true"
  @mouseleave="() => onHover = false"
)
  a(:href="href")
    img(:src="imageUrl" :alt="imageAlt || ''")
  .nAPdCdTxt
    h5 {{ title }}
    p.smallTxt {{ type }}
    p From {{ price }}

  .hover-content(:show="onHover")
    a(:href="href")
      img(:src="imageUrl" :alt="imageAlt || ''")
    .nAPdCdTxt
      h5 {{ title }}
      p.smallTxt {{ type }}
      p From {{ price }}
      .flexInline.flexGap2.flexAic
        p 5 Shelf Options
        .flexInline.flexGap2
          div.prdctOptionTile(
            :style="{ backgroundImage: `url(${'/demo-style-patterns/st1.jpg'})`}"
          )
          div.prdctOptionTile(
            :style="{ backgroundImage: `url(${'/demo-style-patterns/st2.jpg'})`}"
          )
          div.prdctOptionTile(
            :style="{ backgroundImage: `url(${'/demo-style-patterns/st3.jpg'})`}"
          )
          div.prdctOptionTile(
            :style="{ backgroundImage: `url(${'/demo-style-patterns/st4.jpg'})`}"
          )
          div.prdctOptionTile(
            :style="{ backgroundImage: `url(${'/demo-style-patterns/st1.jpg'})`}"
          )

      .flexInline.flexGap2.flexAic
        p 7 Finish Options
        .flexInline.flexGap2
          div.prdctOptionTile(
            :style="{ backgroundImage: `url(${'/demo-style-patterns/st2.jpg'})`}"
          )
          div.prdctOptionTile(
            :style="{ backgroundImage: `url(${'/demo-style-patterns/st1.jpg'})`}"
          )
          div.prdctOptionTile(
            :style="{ backgroundImage: `url(${'/demo-style-patterns/st3.jpg'})`}"
          )
          div.prdctOptionTile(
            :style="{ backgroundImage: `url(${'/demo-style-patterns/st4.jpg'})`}"
          )
          div.prdctOptionTile(
            :style="{ backgroundImage: `url(${'/demo-style-patterns/st1.jpg'})`}"
          )
          div.prdctOptionTile(
            :style="{ backgroundImage: `url(${'/demo-style-patterns/st2.jpg'})`}"
          )
      p(v-for="item in listInfo" :key="`product-item-${$uuid()}`") {{ item }}
</template>

<script setup>
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
