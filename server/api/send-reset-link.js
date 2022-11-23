import {default as db} from '~/composables/db-tools.js';
import postmark from 'postmark';
const mail = new postmark.Client(process.env.postmark_token);
import {emailHeader, emailFooter, emailButton} from '~/composables/emailTemplates';
import jwt from 'jsonwebtoken'

export default defineEventHandler(async event => {
  let {email} = await readBody(event);
  email = email.toLowerCase().trim();

  let exists = db.exists('users', `email='${email}'`);

  if(!exists) return res.json({error: 'That email address does not exist'});

  let token = jwt.sign({email: email, action: 'password_reset'}, process.env.jwt_secret);

  let html = `
    ${emailHeader()}

    <p>Use the link below to reset your password</p>

    ${emailButton(`${process.env.base_url}/password-reset?token=${token}`, 'Reset My Password')}

    ${emailFooter()}
  `;

  await mail.sendEmail({
    From: 'jordan@homerundev.com',
    To: email,
    ReplyTo: 'jordan@homerundev.com',
    Subject: `Reset your Iron Abode password`,
    HtmlBody: html
  });

  return {done: true};
})