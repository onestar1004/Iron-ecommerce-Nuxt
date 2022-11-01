<template lang="pug">
.urlWrapper

  Head
    Title {{content.title}}
    meta(name="description" :content="content.meta_description || 'Easily customize your own glass, metal, or wood shelving unit online.'")
    meta(property="og:url" :content="'https://ironabode.com/'+content.url")
    meta(property="og:type" :content="contentType()")
    meta(property="og:title" :content="content.title")
    meta(property="og:description" :content="content.meta_description || 'Easily customize your own glass, metal, or wood shelving unit online.'")
    meta(property="og:image" :content="contentImage()")

    .schema(v-html="productSchema()" v-if="content.type=='Product'")

  Category(v-if="template == 'Category'" :content="content" :products="products")
  Product(v-if="template == 'Product' || (content && content.type == 'Product' && !template)" :content="content")
  FourOhFour(v-if="template == 404")
  AboutUs(v-if="template == 'AboutUs'") 
  Blog(v-if="template == 'Blog'" :content="content")
  BlogPost(v-if="template == 'BlogPost'" :content="content")
  Collaborations(v-if="template == 'Collaborations'")
  CreateAccount(v-if="template == 'CreateAccount'") 
  Faq(v-if="template == 'Faq'")  
  Gallery(v-if="template == 'Gallery'")  
  Guide(v-if="template == 'Guide'")  
  Instructions(v-if="template == 'Instructions'")  
  NewArrivals(v-if="template == 'NewArrivals'")  
  OrderingQuestions(v-if="template == 'OrderingQuestions'")   
  MyAccount(v-if="template == 'MyAccount'")
  Policies(v-if="template == 'Policies'")  
  ProblemOrder(v-if="template == 'ProblemOrder'")  
  ProductNew(v-if="template == 'ProductNew'")  
  SignIn(v-if="template == 'SignIn'")  
  TradeProgram(v-if="template == 'TradeProgram'")   
  ShelvingUnits(v-if="template == 'ShelvingUnits'")   
  ShelfBrackets(v-if="template == 'ShelfBrackets'")   

</template>

<script setup>
let template = $ref(null);
let products = $ref([]);
let recommended_products = $ref([]);

let url = useRoute().params.url;
let content = await fetchPost('/api/get-content', {url});

function contentType() {
  let type = 'article';
  if(content.type == 'Product') {
    type = 'product';
  }

  return type;
}

function contentImage() {
  if(content.gallery && content.gallery[0] && content.gallery[0].src) {
    return content.gallery[0].src;
  } else {
    return 'https://res.cloudinary.com/ironabode/image/upload/v1663031599/logo-white_jepwq2.png';
  }
}

function productSchema() {
  let schemaJSON = {
    "@context": "http://schema.org/",
    "@type": "Product",
    "name": content.title,
    "url": `https://ironabode.com/${content.url}`,
    "description": content.meta_description || '',
    // "sku": "{{ current_variant.sku }}",
    "brand": {
      "@type": "Brand",
      "name": "Iron Abode"
    },
    "offers": [
      {
        "@type": "Offer",
        "availability": "InStock", // OutOfStock / In Stock
        "price": content.price,
        "priceCurrency": "USD",
        "url": `https://ironabode.com/${content.url}`
      }
    ]
  }
  if(content.gallery && content.gallery[0] && content.gallery[0].src) {
    schemaJSON.image = [content.gallery[0].src];
  }

  let schema = `
    <script type="application/ld+json">
    ${JSON.stringify(schemaJSON)}
    <\/script>
  `;
  return schema;
}

if(!content.error) {
  if(content.category_filters && content.category_filters.length && content.template != 'Blog') {
    products = await fetchPost('/api/get-products', {filters: content.category_filters});
  }

  if(content.category_filters && content.category_filters.length && content.template == 'Blog') {
    content.posts = await fetchPost('/api/get-posts', {filters: content.category_filters});
  }

  if(content.recommended_category_id) {
    recommended_products = await fetchPost('/api/get-products', {filters: [{category_id: content.recommended_category_id}]});
    content.recommended_products = recommended_products;
  }

  if(content.product_type_id) {
    let productType = await fetchPost('/api/get-product-type', {id: content.product_type_id});
    content.options = productType.options;
  }

  template = content.template;
} else {
  if(content.error == 404) {
    setResponseStatus(404);
    template = 404;
    useHead({title: 'Page Not Found'});
  }
}
</script>