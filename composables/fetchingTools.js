export const fetchPost = async (url, body = {}, headers = {}) => {
  return await $fetch(url, {method: 'post', body, headers})
}

export const POST = async(url, body = {}, headers = {}) => {
  return new Promise((resolve, reject) => {
    $fetch(url, {method: 'post', body, headers, credentials: 'include'})
    .then(response => {
      return resolve(response);
    })
    .catch(error => {
      console.error(error.message, 'error response');
      return reject({message: error.message});
      // return reject({
      //   message: error.response['_data'].message,
      //   data: error.response['_data'].data,
      //   status: error.response.status,
      //   all: error,
      // })
    })
  })
  // return await $fetch(useRuntimeConfig().public.api_url + url, {method: 'post', body, headers});
}

export const PUT = async(url, body = {}, headers = {}) => {
  return new Promise((resolve, reject) => {
    $fetch(url, {method: 'put', body, headers, credentials: 'include'})
    .then(response => {
      return resolve(response);
    })
    .catch(error => {
      return reject({
        message: error.response['_data'].message,
        data: error.response['_data'].data,
        status: error.response.status,
        all: error,
      })
    })
  })
  // return await $fetch(useRuntimeConfig().public.api_url + url, {method: 'post', body, headers});
}

export const GET = async (url, body = {}, headers = {}) => {
  return new Promise((resolve, reject) => {
    if(Object.keys(body).length) {
      url += '?';
      for(let i in Object.keys(body)) {
        let key = Object.keys(body)[i];
        if(typeof body[key] == 'object') {
          body[key] = JSON.stringify(body[key]);
        }
        url += `${key}=${body[key].toString()}`;

        if(i != Object.keys(body).length - 1) {
          url += `&`;
        }
      }
    }

    $fetch(url, {method: 'get', headers, credentials: 'include'})
    .then(response => {
      return resolve(response);
    })
    .catch(error => {
      return reject({
        message: error.response['_data'].message,
        data: error.response['_data'].data,
        status: error.response.status,
        all: error,
      })
    })

    // return await $fetch(useRuntimeConfig().public.api_url + url, {method: 'get', headers, credentials: 'include'});
  })
}

export const fetchGet = async (url, body = {}, headers = {}) => {
  if(Object.keys(body).length) {
    url += '?';
    for(let key of Object.keys(body)) {
      if(typeof body[key] == 'object') {
        body[key] = JSON.stringify(body[key]);
      }
      console.log(body[key], 'key body found');
      url += `${key}=${body[key].toString()}`;
    }
  }
  return await $fetch(url, {method: 'get', headers, credentials: 'include'});
}

export const fetchLazy = async (url, body = {}, headers = {}) => {
  let response = useLazyFetch(url, {method: 'post', server: false, initialCache: false, body, headers});
  return response;
}

export const fetchAsync = async (url, body = {}, headers = {}) => {
  let response = await useAsyncData(() => $fetch(url, {method: 'post', body, headers}));
  return response.data.value;
}