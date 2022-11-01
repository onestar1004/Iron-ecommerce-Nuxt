import {default as db} from '~/composables/db-tools.js';

export default defineEventHandler(async event => {
  let {url} = await useBody(event);

  let content = await db.getOne(`SELECT * FROM content WHERE url='${url}'`);

  if(!content) {
    return {error: 404}
  }

  return content;
})