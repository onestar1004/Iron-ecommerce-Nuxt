import {default as db} from '~/composables/db-tools.js';
import {fetchPost} from '~/composables/fetchingTools.js';

export default defineEventHandler(async event => {
  let newData = await readBody(event);
  let user = await fetchPost('/api/get-user', {authToken: getCookie(event, useRuntimeConfig().public.auth_cookie)});

  await db.up('users', newData, `id=${user.id}`);

  return {saved: true};
})