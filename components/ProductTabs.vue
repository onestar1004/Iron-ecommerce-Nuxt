<template lang="pug">
section.prodTabs
  .container
    .tabLinks.flexBox
      button.tabLink(@click="activeTab = 'Included'" :class="{'on': activeTab == 'Included'}" v-if="content.whats_included") WHAT'S INCLUDED
      button.tabLink(@click="activeTab = 'Description'" :class="{'on': activeTab == 'Description'}" v-if="content.description") DESCRIPTION
      button.tabLink(@click="activeTab = 'Dimensions'" :class="{'on': activeTab == 'Dimensions'}" v-if="content.dimensions") DIMENSIONS
      button.tabLink(@click="activeTab = 'Installation'" :class="{'on': activeTab == 'Installation'}" v-if="content.installation") INSTALLATION
      button.tabLink(@click="activeTab = 'Policies'" :class="{'on': activeTab == 'Policies'}" v-if="content.policies") SHIPPING AND RETURN POLICIES
  .pdTabBox
    .container
      .tabContent
        #tabInclude.tabPanel.active(v-if="activeTab == 'Included'" :class="{'active': activeTab == 'Included'}")
          v-runtime-template(:template="content.whats_included" @openPopup="value => $emit('openPopup', value)")
        #tabInclude.tabPanel.active(v-if="activeTab == 'Description'" :class="{'active': activeTab == 'Description'}")
          v-runtime-template(:template="content.description" @openPopup="value => $emit('openPopup', value)")
        #tabInclude.tabPanel.active(v-if="activeTab == 'Dimensions'" :class="{'active': activeTab == 'Dimensions'}")
          v-runtime-template(:template="content.dimensions" @openPopup="value => $emit('openPopup', value)")
          //- RenderVueString(:html="content.dimensions" @openPopup="value => $emit('openPopup', value)")
        #tabInclude.tabPanel.active(v-if="activeTab == 'Installation'" :class="{'active': activeTab == 'Installation'}")
          v-runtime-template(:template="content.installation" @openPopup="value => $emit('openPopup', value)")
        #tabInclude.tabPanel.active(v-if="activeTab == 'Policies'" :class="{'active': activeTab == 'Policies'}")
          v-runtime-template(:template="content.policies" @openPopup="value => $emit('openPopup', value)")
</template>

<script setup>
let {content} = defineProps(['content']);
let activeTab = $ref('Included');
</script>

<script>
// Use ui in case you need variables inside of the runtime templates
export default {
  data() {
    return {
      ui: {}
    }
  }
}
</script>