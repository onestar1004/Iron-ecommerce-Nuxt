export const fetchPost = async (url, body = {}, headers = {}) => {
  return await $fetch(url, {method: 'post', body, headers})
}

export const fetchLazy = async (url, body = {}, headers = {}) => {
  let response = useLazyFetch(url, {method: 'post', server: false, initialCache: false, body, headers});
  return response;
}

export const fetchAsync = async (url, body = {}, headers = {}) => {
  let response = await useAsyncData(() => $fetch(url, {method: 'post', body, headers}));
  return response.data.value;
}