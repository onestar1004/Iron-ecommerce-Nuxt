import {default as db} from '~/composables/db-tools.js';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs'

function decryptJWT(token) {
  let data = null;

  try {
    data = jwt.verify(token, process.env.jwt_secret);
  } catch(error) {
    console.error(error, 'error decrypting jwt');
  }

  return data;
}

export default defineEventHandler(async event => {
  let {password, token} = await useBody(event);

  if(!token) return {error: 'Reset link has expired or is invalid'};

  let data = decryptJWT(token);

  if(!data) return res.json({error: 'Reset link has expired or is invalid'});
  if(data.action != 'password_reset') return res.json({error: 'Reset link has expired or is invalid'});
  if(!data.email) return res.json({error: 'Reset link has expired or is invalid'});

  let salt = await bcrypt.genSalt(10);
  password = await bcrypt.hash(password, salt);

  await db.up('users', {password: password}, `email='${data.email}'`);

  return {done: true};
})