import {default as db} from '~/composables/db-tools.js';
import {generateID, getImage, currency} from '~/composables/tools.js';
import {totalPrice} from '~/composables/priceCalculations.js';
import {fetchPost} from '~/composables/fetchingTools.js';
import moment from 'moment';
import {emailHeader, emailFooter, emailButton} from '~/composables/emailTemplates';
import postmark from 'postmark';
const mail = new postmark.Client(process.env.postmark_token);

export default defineEventHandler(async event => {
  let {cart_id, shipping, billing} = await useBody(event);
  if(!shipping) shipping = {};
  if(!billing) billing = {};
  if(!cart_id) {
    cart_id = getCookie(event, 'ia_cart');
  }
  let cartData = await fetchPost('/api/get-cart', {cart_id});

  if(billing.sameAsShipping) {
    billing.first_name = shipping.first_name;
    billing.last_name = shipping.last_name;
    billing.address = shipping.address;
    billing.address2 = shipping.address2 || null;
    billing.city = shipping.city;
    billing.state = shipping.state;
    billing.zip = shipping.zip;
  }

  let order_id = generateID();
  let orderParameters = {
    shipping,
    billing,
    cart: cartData,
    email: shipping.email,
    phone: shipping.phone,
    order_id: order_id,
    created: moment().format(),
    total: cartData.grandTotal,
    tax: cartData.tax,
    sub_total: cartData.subTotal,
    coupon: cartData.couponApplied,
    coupon_discount: cartData.couponDiscount,
  }

  let insertResponse = await db.in('orders', orderParameters);

  let cartTable = `
    <table border="0" cellpadding="2" cellspacing="2" style="width: 100%;">
  `;
  for(let item of cartData.cart) {
    cartTable += `
      <tr>
        <td style="width: 60px; text-align: center;"><img src="${getImage({image: item.image, width: 50, height: 50, type: 'c_fill'})}"></td>
        <td>
          <b style="font-size: 18px;">${item.title}</b>
    `;
    if(item.options && item.options.length) {
      for(let option of item.options) {
        cartTable += `<div style="font-size: 11px;"><b>${option.label}:</b> ${option.selection.label}`;
        if(option.selection.price) cartTable += `${currency(option.selection.price)}`;
        cartTable += `</div>`;
      }
    }
    cartTable += `
      </td>
      <td style="text-align: right;">${currency(totalPrice(item) * item.quantity)}</td>
    `;
  }
  cartTable += `
      
    </tr>
    </table>
  `;

  if(cartData.couponDiscount) {
    cartTable += `<div style="text-align: right;"><b>Coupon Discount:</b> ${currency(cartData.tax)}</div>`;
  }

  let totals = `
    <hr>
    <div style="text-align: right;"><b>Sub Total:</b> ${currency(cartData.subTotal)}</div>
    <div style="text-align: right;"><b>Tax:</b> ${currency(cartData.tax)}</div>
  `;
  if(cartData.couponDiscount) {
    totals += `<div style="text-align: right;"><b>Coupon Discount:</b> ${currency(cartData.couponDiscount)}</div>`;
  }
  totals += `<div style="text-align: right;"><b>Grand Total:</b> ${currency(cartData.grandTotal)}</div>`;

  // Send Receipt Email
  let html = `
    ${emailHeader()}
    <p><b style="font-size: 20px;">Receipt #${order_id}</b></p>

    ${cartTable}

    ${totals}

    <p align="center">${emailButton(`https://ironabode.com/my-account`, 'My Account')}</p>
    ${emailFooter()}
  `;

  mail.sendEmail({
    From: 'dev@ironabode.com',
    To: 'dev@ironabode.com',
    Subject: `Your Iron Abode Receipt #${order_id}`,
    HtmlBody: html
  })

  return {order_id}
})