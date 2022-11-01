import {default as db} from '~/composables/db-tools.js';
import moment from 'moment-timezone';

export default defineEventHandler(async event => {
  let cart_id = getCookie(event, 'ia_cart');
  await db.up('carts', {coupon: null}, `cart_id='${cart_id}'`);

  return {removed: true}
})