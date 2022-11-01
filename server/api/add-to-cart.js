import {default as db} from '~/composables/db-tools.js';
import {generateID} from '~/composables/tools.js';
import moment from 'moment';

export default defineEventHandler(async event => {
  let {item} = await useBody(event);
  
  let cart_id = getCookie(event, 'ia_cart');
  let cartExists = false;
  let cartData;

  // See if cart exists
  if(cart_id) {
    cartData = await db.getOne(`SELECT * FROM carts WHERE cart_id='${cart_id}' LIMIT 1`);

    if(cartData) {
      cartExists = true;
    } else {
      setCookie(event, 'ia_cart', null);
    }
  }

  // Creating a new cart
  if(!cartExists) {
    let cart_id = generateID();

    let parameters = {
      cart_id: cart_id,
      cart: [item],
      created: moment().format(),
    }

    await db.in('carts', parameters);

    setCookie(event, 'ia_cart', cart_id, {expires: moment().add(30, 'days').toDate()});
  }

  // Adding to exsiting cart
  if(cartExists) {
    cartData.cart.push(item);

    await db.up('carts', {cart: cartData.cart}, `cart_id='${cart_id}'`);
  }

  return {done: true}
})