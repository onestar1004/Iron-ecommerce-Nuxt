import {default as db} from '~/composables/db-tools.js';

export default defineEventHandler(async event => {
  let {product_ids} = await useBody(event);

  if(!product_ids.length) return [];

  let query = `SELECT * FROM content WHERE id IN (${product_ids.join(',')})`;

  console.log(query, 'query found');

  let products = await db.getRows(query);

  return products;
})