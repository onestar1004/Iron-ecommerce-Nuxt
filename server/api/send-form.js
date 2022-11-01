import {default as db} from '~/composables/db-tools.js';

import postmark from 'postmark';
const mail = new postmark.Client(process.env.postmark_token);
import {emailHeader, emailFooter, emailButton} from '~/composables/emailTemplates';

export default defineEventHandler(async event => {
  let {formData, emailParameters} = await useBody(event);

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

      if(key == 'selectedProducts') {
        response = '';
        for(let product of formData[key]) {
          response += `<p><b>${product.title}</b><br>`

          for(let option of product.options) {
            if(option.selection) {
              response += `${option.label}: ${option.selection.label} <br>`;
            }
          }

          response += '</p>';
        }
      }

      table += `<tr><th style="text-align: right;">${key}</th><td>${response}</td></tr>`;
    }
    table += `</table>`

    let html = `
      ${emailHeader()}
        ${table}
      ${emailFooter()}
    `;

    mail.sendEmail({
      From: 'jordan@homerundev.com',
      To: 'jordashtalon@gmail.com',
      ReplyTo: formData.email,
      Subject: emailParameters.subject,
      HtmlBody: html
    })
  }

  return {sent: true}
})