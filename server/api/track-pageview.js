import {default as db} from '~/composables/db-tools.js';
import {fetchPost} from '~/composables/fetchingTools.js';
import moment from 'moment-timezone';

export default defineEventHandler(async event => {
  let {content} = await readBody(event);
  let user = await fetchPost('/api/get-user', {authToken: getCookie(event, useRuntimeConfig().public.auth_cookie)});

  let parameters = {
    title: content.title,
    image: content.gallery[0] ? content.gallery[0].src : null,
    content: content,
    url: content.url,
    type: content.type,
    created: moment(),
    content_id: content.id,
    user_id: user.id,
  }

  await db.in('pageviews', parameters);

  return {tracked: true}
})