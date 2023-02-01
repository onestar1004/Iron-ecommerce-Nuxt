<template lang="pug">
.addressFields
  label Address
    input(type="text" @input="$emit('update', data)" required v-model="data.address")
  label Address 2
    input(type="text" @input="$emit('update', data)" v-model="data.address2")
  label City
    input(type="text" @input="$emit('update', data)" required v-model="data.city")
  label State
    select(v-model="data.state" required)
      option(v-for="state in states" :value="state.abbreviation") {{state.name}}
  label Zip
    input(type="text" @input="$emit('update', data)" required v-model="data.zip")
</template>

<script setup>
let {modelData} = defineProps(['modelData']);
console.log(modelData, 'modeldata found');
let data = $ref({});
if(modelData && modelData.address) {
  data = modelData;
}
</script>