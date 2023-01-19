<template lang="pug">
.fltrAll
  h4 FILTERS
  .fltrList.flexBox.flexWrap
    .fltrOptn(v-for="item in items" :key="item.id")
      .flexBox
        a(v-if="'routePath' in item" :href="item.routePath")
          .flexBox(style="align-items: center; gap: 10px;")
            .box
            span.text {{ item.text }}
        a(v-else :href="`#${item.id}`")
          .flexBox(style="align-items: center; gap: 10px;")
            .box(:filled="filledItems.findIndex(x => x === (item.text || '').toUpperCase()) > -1")
            span.text {{ item.text }}
</template>

<script setup>
const props = defineProps({
  items: {
    type: Array,
    default: []
  },
  filledItems: {
    type: Array,
    default: []
  }
})
</script>