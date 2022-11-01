import {default as db} from '~/composables/db-tools.js';

export default defineEventHandler(async event => {
  let categories = await db.getRows(`SELECT * FROM categories WHERE gallery_category = TRUE ORDER BY position ASC`);

  return categories;
})