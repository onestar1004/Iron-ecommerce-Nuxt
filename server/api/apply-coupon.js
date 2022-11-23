import {default as db} from '~/composables/db-tools.js';
import moment from 'moment-timezone';

export default defineEventHandler(async event => {
  let {coupon} = await readBody(event);

  let couponData = await db.getOne(`SELECT * FROM coupons WHERE code ILIKE '${coupon}'`);
  if(!couponData) return {error: 'Coupon not found'}

  if(couponData.start_date && moment().unix() < moment(couponData.start_date).unix()) return {error: 'Coupon is not active yet'}
  if(couponData.end_date && moment().unix() > moment(couponData.end_date).unix()) return {error: 'Coupon has expired'}

  let cart_id = getCookie(event, 'ia_cart');
  await db.up('carts', {coupon: coupon}, `cart_id='${cart_id}'`);

  return {applied: true}
})