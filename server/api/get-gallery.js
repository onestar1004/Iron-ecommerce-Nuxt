import {default as db} from '~/composables/db-tools.js';

export default defineEventHandler(async event => {
  let gallery = await db.getRows(`SELECT * FROM gallery ORDER BY position ASC`);

  return gallery;
})