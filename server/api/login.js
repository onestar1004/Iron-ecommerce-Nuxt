import {default as db} from '~/composables/db-tools.js'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import moment from 'moment-timezone'

export default defineEventHandler(async event => {

  console.log('starting login');
  let {login} = await readBody(event);
  
  login.email = login.email.toLowerCase().trim();
  let user = await db.getOne(`SELECT * FROM users WHERE email = '${login.email}'`);
  if(!user) return {error: 'That email address does not exist'}

  let isValidPassword = false;
  if(user.password) {
    isValidPassword = await bcrypt.compare(login.password, user.password);
  }

  if(!isValidPassword) return {error: 'Your password is incorrect'}

  let token = jwt.sign({email: user.email}, process.env.jwt_secret);

  setCookie(event, process.env.auth_cookie, token, {expires: moment().add(30, 'days').toDate()});

  return true;
});