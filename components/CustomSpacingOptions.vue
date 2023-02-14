<template lang="pug">
.popupWrapper
  .popupBG(@click="$emit('close')")
  .popup
    .customSpacingOptions
      .title Custom Spacing
      slot(v-if="shelvesOption && shelvesOption.selection && shelvesOption.selection.label")
        .numShelves Number of shelves: {{shelvesOption.selection.label}}
        .overallHeight Overall Height: {{overallHeight}} IN
        .height(v-for="(height, index) in shelfHeights")
          .num {{shelfNum(index)}}
          .input
            input(type="text" v-model="height.value")
          .postfix IN
          .spacingExplainer {{spacingExplainer(index)}}

        a.primaryBTN(@click="saveSpacing()") Save

      slot(v-if="shelvesOption && (!shelvesOption.selection || (shelvesOption.selection && !shelvesOption.selection.label))")
        .noShelf - Please Choose Number Of Shelves Before Selecting Custom Spacing -

</template>

<script setup>
let {content} = defineProps(['content']);
let $emit = defineEmits(['save']);

function saveSpacing() {
  for(let height of shelfHeights) {
    if(!height.value) {
      Swal.fire({
        icon: 'error',
        text: 'You must provide a height for each shelf'
      })
    }
  }
  $emit('save', shelfHeights)
}

function spacingExplainer(index) {
  let num = parseFloat(index) + 1;
  let explainer = '';

  if(num == 1) {
    explainer = `(Top to ${shelfNum(index)} shelf)`;
  }
  if(num == 2) {
    explainer = `(1st to ${shelfNum(index)} shelf)`;
  }
  if(num >= 3) {
    explainer = `(${shelfNum(index - 1)} to bottom shelf)`;
  }

  return explainer;
}

function shelfNum(index) {
  let num = parseFloat(index) + 1;
  let postfix = 'th';
  if(num == 1) {
    postfix = 'st';
  }
  if(num == 2) {
    postfix = 'nd';
  }
  if(num == 3) {
    postfix = 'rd';
  }

  return num + postfix;
}

let shelfHeights = $ref([]);

let shelvesOption = $computed(() => {
  return content.options.find(option => {return option.label == 'Choose Number Of Shelves'});
})

let numShelves = $computed(() => {
  if(shelvesOption && shelvesOption.selection && shelvesOption.selection.label) {
    return parseFloat(shelvesOption.selection.label);
  } else {
    return 0;
  }
})

onMounted(() => {
  for(let i = 1; i <= numShelves; i++) {
    shelfHeights.push({value: 0});
  }
});

let overallHeight = $computed(() => {
  let overallHeight = 0;
  for(let height of shelfHeights) {
    overallHeight += parseFloat(height.value);
  }
  return overallHeight;
})
</script>