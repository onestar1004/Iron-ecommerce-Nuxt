import {h,compile} from 'vue';

export default defineNuxtPlugin(nuxtApp => {
  nuxtApp.vueApp.component('RenderVueString', {
    props: ['html'],
    render() {
      return h(compile(this.html), {$emit: this.$emit});
    }
  })
})