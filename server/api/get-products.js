import {default as db} from '~/composables/db-tools.js';

export default defineEventHandler(async event => {
  let {filters} = await useBody(event);

  let filterArray = [];
  if(filters) {
    for(let filter of filters) {
      filterArray.push(` categories::TEXT ILIKE '%"category_id": "${filter.category_id}"%' `);
    }
  }

  let query;
  if(filterArray.length) {
    query = `SELECT * FROM content WHERE type='Product' AND (${filterArray.join(' OR ')}) ORDER BY position ASC`;
  } else {
    query = `SELECT * FROM content WHERE type ='Product' ORDER BY position ASC`
  }

  let products = await db.getRows(query);

  return products;
})