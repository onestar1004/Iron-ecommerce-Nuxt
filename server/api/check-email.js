import {default as db} from '~/composables/db-tools.js';

export default defineEventHandler(async event => {
  let {email} = await readBody(event);
  let user = await db.getOne(`SELECT id,email FROM users WHERE email='${email}'`);
  return user || false;
})