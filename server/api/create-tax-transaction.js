import Taxjar from 'taxjar';
import moment from 'moment';
import {totalPrice} from '~/composables/priceCalculations.js';

export default defineEventHandler(async event => {
  let {cartData, checkout, orderParameters} = await readBody(event);

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
    transaction_id: orderParameters.order_id,
    transaction_reference_id: orderParameters.transaction_id,
    transaction_date: moment().format('YYYY/MM/DD'),
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
    amount: cartData.grandTotal - cartData.tax,
    shipping: 0,
    sales_tax: cartData.tax,
    // line_items: line_items,
  }

  console.log(taxParameters, 'taxParameters');

  let orderResponse = await client.createOrder(taxParameters);

  console.log(orderResponse, 'order response');

  return orderResponse;
});