import {default as db} from '~/composables/db-tools.js';
import moment from 'moment-timezone';
import {fetchPost} from '~/composables/fetchingTools.js';
import alasql from 'alasql';

export default defineEventHandler(async event => {
  let user = await fetchPost('/api/get-user', {authToken: getCookie(event, useRuntimeConfig().public.auth_cookie)});

  let where = `WHERE created >= '${moment().subtract(30, 'days').format()}' AND user_id=${user.id}`;

  let pageviews = await db.getRows(`SELECT * FROM pageviews ${where}`);

  let uniquePageviews = await db.getRows(`SELECT DISTINCT content_id FROM pageviews ${where}`);

  let recentProducts = [];

  for(let pageview of uniquePageviews) {
    let product = alasql(`SELECT * FROM ? WHERE content_id=${pageview.content_id}`, [pageviews]);
    product = product[0];
    if(product) {
      recentProducts.push(product);
    }
  }

  return recentProducts;
})