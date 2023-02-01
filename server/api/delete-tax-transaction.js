import Taxjar from 'taxjar';

export default defineEventHandler(async event => {
  let {order_id} = await readBody(event);

  const client = new Taxjar({
    apiKey: process.env.TAXJAR_API_KEY
  });

  let deleteResponse = await client.deleteOrder(order_id);

  return deleteResponse;
})