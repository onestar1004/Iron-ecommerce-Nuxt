export default defineNuxtRouteMiddleware(async (to, from) => {
  if(to.path == '/old-shirts') navigateTo('/shirts', {redirectCode: 301});
})