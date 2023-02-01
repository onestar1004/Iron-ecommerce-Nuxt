import Taxjar from 'taxjar';
import {totalPrice} from '~/composables/priceCalculations.js';

export default defineEventHandler(async event => {
  let {cartData, checkout} = await readBody(event);
  if(!cartData || !checkout) return {tax: 0}

  const client = new Taxjar({
    apiKey: process.env.TAXJAR_API_KEY
  });

  let line_items = [];
  for(let item of cartData.cart) {
    line_items.push({
      id: item.product_id,
      quantity: item.quantity,
      unit_price: totalPrice(item),
    })
  }

  let taxParameters = {
    from_country: 'US',
    from_zip: '83448',
    from_state: 'ID',
    from_city: 'Sugar City',
    from_street: '473 Business Loop',
    to_country: 'US',
    to_zip: checkout.shipping.zip,
    to_state: checkout.shipping.state,
    to_city: checkout.shipping.city,
    to_street: checkout.shipping.address,
    amount: cartData.grandTotal,
    shipping: 0,
    // line_items: line_items
  }

  console.log(taxParameters, 'taxParameters');

  let taxResponse = await client.taxForOrder(taxParameters);
  return {tax: taxResponse.tax.amount_to_collect}
});