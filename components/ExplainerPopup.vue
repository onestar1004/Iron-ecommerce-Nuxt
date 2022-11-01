<template lang="pug">
.popupWrapper
  .popupBG(@click="$emit('close')")
  .popup

    // IMAGE POPUP
    .imagePopup(v-if="isImage()")
      img(:src="popup")

    // CUSTOM POPUPS
    .customPopup(v-if="popup == 'customPopup'")
      p This is a custom popup here

</template>

<script setup>
let {popup} = defineProps(['popup']);

function isImage() {
  return /\.(jpg|jpeg|png|webp|avif|gif|svg)$/.test(popup)
}
</script>