<template lang="pug">
.popupWrapper
  .popupBG(@click="$emit('close')")
  .popup.fullWidth
    //- a(@click="$emit('close')") x
    img(:src="image")
</template>

<script setup>
let {image} = defineProps(['image']);
</script>