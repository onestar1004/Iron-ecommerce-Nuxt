<template lang="pug">
section.breadcrumbBox(v-if="content.breadcrumbs && content.breadcrumbs.length")
  .container
    ul.breadcrumb.flexBox.flexAic.noList
      li.bcItem(v-for="(crumb, index) in content.breadcrumbs" :class="{'active': index >= content.breadcrumbs.length - 1}")
        NuxtLink(:to="crumb.url") {{crumb.label}}
</template>

<script setup>
let {content} = defineProps(['content']);
</script>