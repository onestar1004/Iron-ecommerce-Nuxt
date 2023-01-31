import {default as db} from '~/composables/db-tools.js';

import postmark from 'postmark';
const mail = new postmark.Client(process.env.postmark_token);
import {emailHeader, emailFooter, emailButton} from '~/composables/emailTemplates';
import {fetchPost} from '~/composables/fetchingTools.js';

export default defineEventHandler(async event => {
  console.log('sending a form');
  let {formData, emailParameters} = await readBody(event);
  let user = await fetchPost('/api/get-user', {authToken: getCookie(event, useRuntimeConfig().public.auth_cookie)});

  if(user) formData.email = user.email;

  if(formData.email) {
    let table = `<table width="100%" border="1" cellpadding="10" cellspacing="1">`;
    for(let key in formData) {
      let response = formData[key];
      if(key != 'selectedProducts' && typeof formData[key] == 'object' && !Array.isArray(formData[key])) {
        response = '';
        for(let innerKey in formData[key]) {
          response += `<p>${innerKey}: ${formData[key][innerKey]}</p>`;
        }
      }

      if(key == 'selectedProducts') response = null;

      if(key == 'selectedProducts' && formData[key].length) {
        response = '';
        for(let i in formData[key]) {
          response += '<p>';
          let product = formData[key][i];
          if(product.order_id) {
            response += `<b>Order ID: ${product.order_id}</b><br>`;
          }
          response += `<b>${product.title}</b><br>`;

          for(let option of product.options) {
            if(option.selection) {
              response += `<small>${option.label}: ${option.selection.label}</small> <br>`;
            }
          }

          response += '</p>';
        }
      }

      if(response) table += `<tr><th style="text-align: right;">${key}</th><td>${response}</td></tr>`;
    }
    table += `</table>`

    let html = `
      ${emailHeader()}
        ${table}
      ${emailFooter()}
    `;

    mail.sendEmail({
      From: 'jordan@homerundev.com',
      To: emailParameters.notify || 'jordashtalon@gmail.com',
      ReplyTo: formData.email,
      Subject: emailParameters.subject,
      HtmlBody: html
    })
    .then(response => {
      console.log(response, 'email response');
    })
    .catch(error => {
      console.error(error.message, 'error sending form');
    })
  }

  return {sent: true}
})