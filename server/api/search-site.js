import {default as db} from '~/composables/db-tools.js';

export default defineEventHandler(async event => {
  let {search} = await readBody(event);
  if(!search) return [];

  let content = await db.getRows(`SELECT * FROM content WHERE title ILIKE '%${search}%' AND type = 'Product'`);

  return content;
})