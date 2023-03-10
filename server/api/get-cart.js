import {default as db} from '~/composables/db-tools.js';
import {totalPrice} from '~/composables/priceCalculations.js';
import {fetchPost} from '~/composables/fetchingTools.js';

export default defineEventHandler(async event => {
  let {cart_id, checkout} = await readBody(event);
  if(!cart_id) {
    cart_id = getCookie(event, 'ia_cart');
  }

  let cartData = await db.getOne(`SELECT * FROM carts WHERE cart_id='${cart_id}'`);

  if(cartData) {

    // Calculate amounts
    let subTotal = 0;
    for(let item of cartData.cart) {
      subTotal += (parseFloat(totalPrice(item)) || 0) * item.quantity;
    }
    cartData.subTotal = subTotal;
    cartData.tax = 0;
    cartData.couponDiscount = 0;

    // Factor in coupon
    if(cartData.coupon) {
      let couponData = await db.getOne(`SELECT * FROM coupons WHERE code ILIKE '${cartData.coupon}'`);
      if(couponData) {
        if(couponData.type == 'Percentage') {
          cartData.couponDiscount = (parseFloat(parseFloat(cartData.subTotal) * (parseFloat(couponData.amount) / 100)) || 0);
        }
        if(couponData.type == 'Flat') {
          cartData.couponDiscount = ((parseFloat(couponData.amount)) || 0);
        }
        cartData.couponDiscount = (parseFloat(parseFloat(cartData.couponDiscount).toFixed(2)) || 0);

        cartData.couponApplied = cartData.coupon;
      }
    }
    cartData.grandTotal = subTotal - cartData.couponDiscount;

    // Calculate tax
    if(checkout && checkout.shipping && checkout.shipping.address && checkout.shipping.city && checkout.shipping.state && checkout.shipping.zip) {
      let taxData = await fetchPost('/api/calculate-tax', {checkout, cartData});
      cartData.tax = taxData.tax;
    }

    // Calculate Grand Total
    cartData.grandTotal = parseFloat(cartData.tax) + parseFloat(cartData.grandTotal);
    if(cartData.grandTotal < 0) cartData.grandTotal = 0;

    return cartData;
  } else {
    return {
      error: 'No Cart Found',
      cart: [],
    };
  }
})