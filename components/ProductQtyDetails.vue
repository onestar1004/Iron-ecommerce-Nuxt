<template lang="pug">
div.menu-wrapper
  .infoBox(ref="refInfoBox")
    .grid
      .item-info
        slot(name="text")
      .item-img
        slot(name="meta")
  a(ref="refTriggerBtn").p-info(@click="show") Please see the details
</template>

<script setup>
const refInfoBox = ref(null)
const refTriggerBtn = ref(null)

const show = function () {
  refInfoBox.value.style.display = "block"
}

onMounted(() => {
  nextTick(() => {
    document.addEventListener('click', (e) => {
      if (refTriggerBtn.value.contains(e.target)) {
        return
      }
      if (!refInfoBox.value.contains(e.target)) {
        refInfoBox.value.style.display = "none"
      }
    })
  })
})
</script>

<style scoped lang="scss">
.menu-wrapper {
  position: relative;
}
.infoBox {
  display: none;
  position: absolute;
  top: 120%;
  height: auto;
  background: rgb(255, 255, 255);
  filter: drop-shadow((-5px) -5px 6px rgba(0, 0, 0, 0.16));
  padding: 40px;
  z-index: 600;
  width: 512px;
  height: auto;

  &::before {
    content: "";
    position: absolute;

    /* left: calc(50% - 5px); */
    left: 20px;
    top: -5px;
    width: 10px;
    height: 10px;
    background-color: #fff;
    transform: rotate(45deg);
  }

  .grid {
    display: grid;
    grid-template-columns: repeat(12, minmax(0, 1fr));
    gap: 12px;

    .item-info {
      grid-column: span 7 / span 7;
      font-size: 18px;
      font-weight: lighter;
    }

    .item-img {
      grid-column: span 5 / span 5;

      img {
        height: auto;
        width: 100%;
      }

      .tip {
        background-color: #B6B2AD;
        width: 100%;
        padding: 2px auto;
        font-size: 10px;
        text-align: center;
      }
    }
  }
}

.p-info {
  text-align: center;
  font-size: 9px;
  margin-top: 3px;
}
</style>