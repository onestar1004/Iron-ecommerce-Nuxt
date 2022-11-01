import {default as db} from '~/composables/db-tools.js';
import {fetchPost} from '~/composables/fetchingTools.js';

export default defineEventHandler(async event => {
  let user = await fetchPost('/api/get-user', {authToken: getCookie(event, useRuntimeConfig().public.auth_cookie)});
  let orders = await db.getRows(`SELECT * FROM orders WHERE email='${user.email}'`);

  return orders;
})