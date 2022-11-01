<template lang="pug">
.AppWrapper
  NuxtPage
</template>

<script setup>
// Default Title / Meta
useHead({
  title: 'IronAbode',
  viewport: 'width=device-width, initial-scale=1, maximum-scale=1',
  charset: 'utf-8',
})

// Initialize first cart grab
if(useCookie('ia_cart') && useRoute().path != '/cart') {
  refreshCart();
}

// Data Store initilization & authorization check
if(useCookie(useRuntimeConfig().public.auth_cookie).value) {
  await refreshUser();
}

// // Make sure user is logged in for unopen routes
checkAuth();
function checkAuth() {
  let authRoutes = ['/my-account'];
  if(authRoutes.includes(useRoute().path)) {
    if(!useCookie(useRuntimeConfig().public.auth_cookie).value) {
      navigateTo('/sign-in');
    }
  }
}

// watch(() => useRoute().path, (newPath) => {
//   checkAuth();
// })
</script>
