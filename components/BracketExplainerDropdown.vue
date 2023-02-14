<template lang="pug">
.explainerDropdown
  .heading
    .selection
      .value(@click="showDropdown = !showDropdown") {{quantity}}
      .explainer #[span(@click="showDropdown = !showDropdown") Bracket#[span(v-if="quantity > 1") s]]
        //- span.icon(@mouseenter="hovering = true;" @mouseleave="hovering = false;" @click="showTooltip = !showTooltip") #[span &nbsp;]#[i.fas.fa-question-circle]
        //- span.infoHover(v-if="hovering && !showTooltip") Click for more information
        .infoPopup(v-if="showTooltip")
          p Bracket Messaging Here
    .dropper(@click="showDropdown = !showDropdown"): i.fal.fa-chevron-down
  .options(v-if="showDropdown")
    .option(:value="n" v-for="n in [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]" @click="quantity = n; $emit('change', quantity); showDropdown = false") {{n}}
</template>

<script setup>
let props = defineProps(['quantity']);
let showDropdown = $ref(false);
let showTooltip = $ref(false);
let hovering = $ref(false);
</script>