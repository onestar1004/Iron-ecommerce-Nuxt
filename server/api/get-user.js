import {default as db} from '~/composables/db-tools.js';
import jwt from 'jsonwebtoken'

export default defineEventHandler(async event => {
  let body = await useBody(event);

  if(body.authToken) {
    try {
      let data = jwt.verify(body.authToken, process.env.jwt_secret);

      let user = await db.getOne(`SELECT * FROM users WHERE email='${data.email}' LIMIT 1`);
      delete user.password;
      return user;
    } catch(error) {
      return null;
    }
  }
  return null;
})