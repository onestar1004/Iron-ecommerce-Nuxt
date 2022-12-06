<template lang="pug">
div.reamazeBtnWrapper
  a(href="#" data-reamaze-lightbox="contact")
    img(src="/reamazeBtn.png" width="48px" height="auto")
</template>

<script setup>
useHead({
  script: [
    {
      children:
        `var _support = _support || { 'ui': {}, 'user': {} }; _support['account'] = 'iron-abode'; _support['ui']['contactMode'] = 'default'; _support['ui']['enableKb'] = 'true'; _support['ui']['styles'] = { widgetColor: 'rgb(45, 74, 82)', }; _support['ui']['shoutboxFacesMode'] = 'default'; _support['ui']['shoutboxHeaderLogo'] = true; _support['apps'] = { faq: {"enabled":true,"header":"Quickly find the answers you need"}, recentConversations: {}, orders: {"enabled":true} }; `
    }
  ]
})
</script>
