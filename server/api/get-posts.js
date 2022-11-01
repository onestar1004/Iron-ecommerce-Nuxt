import {default as db} from '~/composables/db-tools.js';

export default defineEventHandler(async event => {
  let {filters} = await useBody(event);

  console.log(filters, 'filters found');

  let filterArray = [];
  for(let filter of filters) {
    filterArray.push(` categories::TEXT ILIKE '%"category_id": "${filter.category_id}"%' `);
  }

  let query = `SELECT * FROM content WHERE type != 'Product' AND (${filterArray.join(' OR ')}) ORDER BY position ASC`;
  console.log(query, 'query found');

  let products = await db.getRows(query);

  return products;
})