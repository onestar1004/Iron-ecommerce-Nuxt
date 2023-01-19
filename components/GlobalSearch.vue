<template lang="pug">
.siteSearch
  .input
    input(type="text" ref="searchInput" v-model="search" @input="startSearch()" placeholder="Search")

  .results(v-if="search && results")
    .searching(v-if="is('searchingSite')"): i.fal.fa-spin.fa-spinner
    slot(v-if="!is('searchingSite')")
      .noResults.fullResults(v-if="!results.length") - Nothing Found -
      .fullResults(v-if="results.length")
        NuxtLink.item(v-for="product in results" :to="'/'+product.url")
          .image
            img(:src="getImage({image: product.gallery[0].src, width: 500, height: 300, type: 'c_fill'})" v-if="product.gallery && product.gallery[0] && product.gallery[0].src")
          .details
            .title {{product.title}}
</template>

<script setup>
let search = $ref(null);
let searchInput = $ref(null);
let debounce = createDebounce();
let results = $ref([]);

onMounted(() => {
  setTimeout(() => {
    searchInput.focus();
  }, 10);
})

function startSearch() {
  startLoad('searchingSite');
  debounce(() => {
    POST('/api/search-site', {search})
    .then(response => {
      results = response;
      endLoad('searchingSite');
    })
  })
}
</script>