<template lang="pug">
.dialog-wrapper(ref="refDialog")
  .content(ref="refDialogContent")
    .container
      .close-btn-wrapper
        a.close-btn(@click="hide")
          img(src="/icon-close.svg" width="24" height="24")
      .title
        a(href='tel:2082589733' style="font-weight: 500;") CALL NOW AT:
        p(style="font-family: 'Cormorant Garamond', serif;") 208-258-9733
      .info
        p Our office hours are 9 am to 5 pm MST. If calling outside these hours, please leave a voicemail and we will get back to you as soon as possible.
</template>

<script setup>
const refDialog = ref(null)
const refDialogContent = ref(null)

const hide = function () {
  refDialog.value.style.display = 'none'
}

const show = function () {
  refDialog.value.style.display = 'block'
}

defineExpose({ show, hide })
</script>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400;500;600;700&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700&display=swap");

.dialog-wrapper {
  display: none;
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgb(0,0,0);
  background-color: rgba(0,0,0,0.4);
  color: black;
  z-index: 600;

  .content {
    position: relative;
    background-color: #fefefe;
    margin: 15% auto;
    border: 1px solid #888;
    width: 100%;
    max-width: 650px;
    border-radius: 5px;
    filter: drop-shadow(0 10px 8px rgb(0 0 0 / 0.04)) drop-shadow(0 4px 3px rgb(0 0 0 / 0.1));

    .container {
      display: grid;
      grid-template-columns: repeat(12, minmax(0, 1fr));
      gap: 0.75rem;
      padding: 72px;

      .close-btn-wrapper {
        position: absolute;
        top: 0;
        right: 0;
        margin: 20px;

        .close-btn {
          background-color: transparent;
        }
      }

      & .title {
        font-family: "Avenir", sans-serif;
        grid-column: span 5 / span 5;
        font-size: 24px;
      }

      & .info {
        font-family: "Avenir", sans-serif;
        grid-column: span 7 / span 7;
        font-size: 14px;
      }

      // Display breakpoint for extra small screen
      @media (max-width: 600px) {
        .title { grid-column: span 12 / span 12; }
        .info { grid-column: span 12 / span 12; }
      }

      // Display breakpoint for small screen
      @media (min-width: 600px) and (max-width: 960px) {
        .title { grid-column: span 12 / span 12; }
        .info { grid-column: span 12 / span 12; }
      }
    }
  }
}
</style>