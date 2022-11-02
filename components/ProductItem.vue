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
      p 70+ Length, Depth, and Height Options
      P 2 Bracket Thickness Options
</template>

<script setup>
const props = defineProps([
  'title',
  'type',
  'price',
  'imageUrl',
  'href',
  'imageAlt'
])
const onHover = ref(false)

</script>
