import {default as db} from '~/composables/db-tools.js';

export default defineEventHandler(async event => {
  let {order_id} = await useBody(event);
  let order = await db.getOne(`SELECT * FROM orders WHERE order_id='${order_id}'`);
  return order;
})