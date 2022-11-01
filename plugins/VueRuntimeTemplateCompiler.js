import VRuntimeTemplate from "vue3-runtime-template";

export default defineNuxtPlugin(nuxtApp => {
  nuxtApp.vueApp.component('v-runtime-template', VRuntimeTemplate);
});

// IMPORTANT: This also needs hooks in nuxt.config.js
// Docs: https://www.npmjs.com/package/vue3-runtime-template