import {default as db} from '~/composables/db-tools.js';

export default defineEventHandler(async event => {
  let {} = await readBody(event);
  await db.query(`SELECT * FROM users`);
})