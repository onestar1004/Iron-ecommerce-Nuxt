import {default as db} from '~/composables/db-tools.js';
import {generateID, getImage, currency} from '~/composables/tools.js';
import {totalPrice} from '~/composables/priceCalculations.js';
import {fetchPost} from '~/composables/fetchingTools.js';
import moment from 'moment';
import {emailHeader, emailFooter, emailButton} from '~/composables/emailTemplates';
import postmark from 'postmark';
import querystring from 'querystring';
const mail = new postmark.Client(process.env.postmark_token);
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken'

export default defineEventHandler(async event => {
  let user = await fetchPost('/api/get-user', {authToken: getCookie(event, useRuntimeConfig().public.auth_cookie)});
  let {cart_id, checkout} = await readBody(event);
  checkout.email = checkout.email.toLowerCase().trim();
  let shipping = checkout.shipping;
  let billing = shipping;
  if(!checkout.billingSame) {
    billing = checkout.billing;
  }
  shipping.first_name = shipping.first_name || checkout.first_name;
  shipping.last_name = shipping.last_name || checkout.last_name;
  shipping.company = shipping.company || checkout.company;
  billing.first_name = billing.first_name || checkout.first_name;
  billing.last_name = billing.last_name || checkout.last_name;
  billing.company = billing.company || checkout.company;
  if(!cart_id) {
    cart_id = getCookie(event, 'ia_cart');
  }
  let cartData = await fetchPost('/api/get-cart', {cart_id, checkout});
  let card;
  if(checkout.card) card = checkout.card;

  // They are creating a new account
  if(!user && checkout.password && !checkout.guestCheckout) {
    let newAccount = {
      email: checkout.email,
      first_name: checkout.first_name,
      last_name: checkout.last_name,
      created: moment(),
      phone: checkout.phone,
      addresses: [],
      company: checkout.company,
    }

    if(checkout.subscribeNewsletter) {
      newAccount.subscribed = true;
    }

    if(shipping) {
      shipping.id = generateID();
      newAccount.addresses.push(shipping);
    }

    if(billing.address != shipping.address) {
      billing.id = generateID();
      newAccount.addresses.push(billing);
    }

    let salt = await bcrypt.genSalt(10);
    newAccount.password = await bcrypt.hash(checkout.password, salt);
    let userInsert = await db.in('users', newAccount);
    console.log(userInsert, 'user inserted');
    user = userInsert[0];

    let token = jwt.sign({email: newAccount.email}, process.env.jwt_secret);

    setCookie(event, process.env.auth_cookie, token, {expires: moment().add(30, 'days').toDate()});

    delete checkout.password;
  }

  // If they are saving a card
  let customer_vault_id;
  if(checkout.saveCard && (user && !user.nmi_vault_id)) {
    console.log('Saving a card for the first time');
    let cardParameters = {
      customer_vault: 'add_customer',
      security_key: process.env.nmi_key,
      payment_token: checkout.token,
      email: checkout.email,
      first_name: checkout.first_name,
      last_name: checkout.last_name,
      phone: checkout.phone,
    }

    let saveCardResponse = await fetchPost(`${process.env.nmi_endpoint}?${querystring.stringify(cardParameters)}`);
    saveCardResponse = querystring.parse(saveCardResponse);

    console.log(saveCardResponse);

    if(saveCardResponse.responsetext == 'Customer Added') {
      customer_vault_id = saveCardResponse.customer_vault_id;

      let userUpdate = {
        nmi_vault_id: customer_vault_id,
        card_last_4: card.number,
        cc_type: card.type,
        cc_exp: card.exp,
      }

      await db.up('users', userUpdate, `id=${user.id}`);
    } else {
      return {error: saveCardResponse.responsetext}
    }
  }

  // If they are using a saved card
  if(user && user.nmi_vault_id && !checkout.newCard) {
    console.log('Using a saved card');
    customer_vault_id = user.nmi_vault_id;
    card = {
      number: user.card_last_4,
      type: user.cc_type,
      exp: user.cc_exp,
    }
  }

  // If they are using a new card & saving the new one
  if(checkout.saveCard && checkout.newCard && user) {
    console.info('Storing a new saved card');
    let cardParameters = {
      customer_vault: 'add_customer',
      security_key: process.env.nmi_key,
      payment_token: checkout.token,
      email: checkout.email,
      first_name: checkout.first_name,
      last_name: checkout.last_name,
      phone: checkout.phone,
    }

    let saveCardResponse = await fetchPost(`${process.env.nmi_endpoint}?${querystring.stringify(cardParameters)}`);
    saveCardResponse = querystring.parse(saveCardResponse);

    console.log(saveCardResponse);

    if(saveCardResponse.responsetext == 'Customer Added') {
      customer_vault_id = saveCardResponse.customer_vault_id;

      let userUpdate = {
        nmi_vault_id: customer_vault_id,
        card_last_4: card.number,
        cc_type: card.type,
        cc_exp: card.exp,
      }

      console.log(userUpdate, 'updating user with new card details');

      await db.up('users', userUpdate, `id=${user.id}`);
    } else {
      return {error: saveCardResponse.responsetext}
    }
  }

  // Finalized Transaction Parameters
  let order_id = generateID();
  let transactionParameters = {
    type: 'sale',
    amount: parseFloat(parseFloat(cartData.grandTotal).toFixed(2)),
    tax: parseFloat(parseFloat(cartData.tax).toFixed(2)),
    payment_token: checkout.token,
    security_key: process.env.nmi_key,

    orderid: order_id,

    first_name: checkout.first_name,
    last_name: checkout.last_name,
    email: checkout.email,
    phone: checkout.phone,

    address1: billing.address,
    address2: billing.address2,
    city: billing.city,
    state: billing.state,
    zip: billing.zip,
    country: 'US',

    shipping_firstname: shipping.first_name || checkout.first_name,
    shipping_lastname: shipping.last_name || checkout.last_name,
    shipping_address1: shipping.address,
    shipping_address2: shipping.address2 || null,
    shipping_city: shipping.city,
    shipping_state: shipping.state,
    shipping_zip: shipping.zip,
    shipping_country: 'US',
  }
  if(customer_vault_id) {
    delete transactionParameters.payment_token;
    transactionParameters.customer_vault_id = customer_vault_id;
  }
  transactionParameters = querystring.stringify(transactionParameters);

  let paymentResponse = await fetchPost(`${process.env.nmi_endpoint}?${transactionParameters}`);
  paymentResponse = querystring.parse(paymentResponse);
  console.log(paymentResponse);

  if(paymentResponse.response == 1) {
    console.log('PAYMENT SUCCESSFULL');

    let orderParameters = {
      shipping,
      billing,
      cart: cartData,
      email: checkout.email,
      phone: checkout.phone,
      order_id: order_id,
      created: moment().format(),
      total: cartData.grandTotal,
      tax: cartData.tax,
      sub_total: cartData.subTotal,
      coupon: cartData.couponApplied,
      coupon_discount: cartData.couponDiscount,
      transaction_id: paymentResponse.transactionid,
      merchant_account: 'NMI',
      card_last_4: card.number,
      cc_type: card.type,
      cc_exp: card.exp,
    }

    if(process.env.environment == 'development') {
      orderParameters.test_order = true;
    }

    let insertResponse = await db.in('orders', orderParameters);

    // Create a taxjar transaction
    await fetchPost('/api/create-tax-transaction', {checkout, cartData, orderParameters})

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

    try {
      mail.sendEmail({
        From: 'jordan@homerundev.com',
        To: checkout.email,
        Subject: `Your Iron Abode Receipt #${order_id}`,
        HtmlBody: html
      })
    } catch(error) {
      console.error(error.message, 'error sending email');
    }

    console.log(order_id, 'sending back order id');
    return {order_id}
  } else {
    return {error: paymentResponse.responsetext}
  }
})