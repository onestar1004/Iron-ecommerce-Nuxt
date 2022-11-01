import {default as db} from '~/composables/db-tools.js';

export default defineEventHandler(async event => {
  let {} = await useBody(event);
  await db.query(`SELECT * FROM users`);
})