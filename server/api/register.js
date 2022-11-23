import {default as db} from '~/composables/db-tools.js';
import bcrypt from 'bcryptjs';
import moment from 'moment';
import jwt from 'jsonwebtoken'

export default defineEventHandler(async event => {
  let {newAccount} = await readBody(event);

  newAccount.email = newAccount.email.toLowerCase().trim();

  let emailExists = await db.exists('users', `email = '${newAccount.email}'`);
  if(emailExists) {
    return {error: 'That account already exists'}
  }

  newAccount.created = moment();

  let salt = await bcrypt.genSalt(10);
  newAccount.password = await bcrypt.hash(newAccount.password, salt);
  await db.in('users', newAccount);

  let token = jwt.sign({email: newAccount.email}, process.env.jwt_secret);

  setCookie(event, process.env.auth_cookie, token, {expires: moment().add(30, 'days').toDate()});

  return {success: true}
})