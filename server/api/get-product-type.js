import {default as db} from '~/composables/db-tools.js';
import alasql from 'alasql';

export default defineEventHandler(async event => {
  let {id} = await readBody(event);

  let productType = await db.getOne(`SELECT * FROM product_types WHERE id=${id}`);

  // Now get the options
  let option_ids = [];
  for(let option of productType.options) {
    option_ids.push(option.option_id);
  }

  let options = await db.getRows(`SELECT * FROM options WHERE id IN (${option_ids.join(',')})`);

  for(let i = productType.options.length - 1; i >= 0; i--) {
    let option = productType.options[i];
    let optionData = alasql(`SELECT * FROM ? WHERE id='${option.option_id}'`, [options]);
    if(optionData && optionData[0]) {
      optionData = optionData[0];
      productType.options[i] = optionData;
    } else {
      productType.options.splice(i, 1);
    }
  }

  return productType;
})