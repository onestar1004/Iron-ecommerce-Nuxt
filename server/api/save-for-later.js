import {default as db} from '~/composables/db-tools.js';
import {generateID} from '~/composables/tools.js';
import moment from 'moment-timezone';
import {emailHeader, emailFooter, emailButton} from '~/composables/emailTemplates';

import postmark from 'postmark';
const mail = new postmark.Client(process.env.postmark_token);

export default defineEventHandler(async event => {
  let {content, email} = await useBody(event);
  let options = content.options;

  let saved_id = generateID();
  let parameters = {
    options,
    created: moment().format(),
    saved_id: saved_id,
  }

  console.log('inserting');
  await db.in('saved_product_configs', parameters);
  console.log('inserted');

  if(email) {
    let html = `
      ${emailHeader()}
      <p>Your Saved Cart Link</p>

      ${emailButton(`https://ironabode.com/${content.url}?saved_id=${saved_id}`, 'Load My Design')}
      ${emailFooter()}
    `;

    mail.sendEmail({
      From: 'jordan@homerundev.com',
      To: email,
      Subject: `Your Saved Product on Iron Abode`,
      HtmlBody: html
    })
  }

  return {saved_id}
})