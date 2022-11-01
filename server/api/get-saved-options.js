import {default as db} from '~/composables/db-tools.js';

export default defineEventHandler(async event => {
  let {saved_id} = await useBody(event);
  let savedData = await db.getOne(`SELECT * FROM saved_product_configs WHERE saved_id='${saved_id}'`);

  if(savedData && savedData.options) {
    return savedData.options;
  } else {
    return {error: 'No saved data found'}
  }
})