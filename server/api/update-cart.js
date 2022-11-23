import {default as db} from '~/composables/db-tools.js';

export default defineEventHandler(async event => {
  let cart_id = getCookie(event, 'ia_cart');

  let cartData = await db.getOne(`SELECT * FROM carts WHERE cart_id='${cart_id}'`);

  let {newCart} = await readBody(event);

  await db.up('carts', {cart: newCart.cart}, `cart_id='${cart_id}'`);

  return {done: true}
})