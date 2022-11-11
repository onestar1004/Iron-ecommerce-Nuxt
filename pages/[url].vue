<template lang="pug">
NuxtLoadingIndicator.nuxtLoadingStyle
.heroLoading(v-if="!pageReady")
  .flexBox.flexJcc.flexAic(style="height: 100%;")
    .logoWrapper
      img.animate-flicker(src='https://res.cloudinary.com/ironabode/image/upload/v1663031599/logo-white_jepwq2.png' alt='')
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
  WillFit(v-if="template == 'WillFit'")  
  Instructions(v-if="template == 'Instructions'")  
  NewArrivals(v-if="template == 'NewArrivals'")
  WhiteOakShelvingUnits(v-if="template == 'WhiteOakShelvingUnits'")
  WhitewashedWhiteOakUnits(v-if="template == 'WhitewashedWhiteOakUnits'")
  WalnutShelvingUnits(v-if="template == 'WalnutShelvingUnits'")
  MetalShelvingUnits(v-if="template == 'MetalShelvingUnits'")
  ReadyToShip(v-if="template == 'ReadyToShip'")
  RoundCollection(v-if="template == 'RoundCollection'")  
  GlassShelvingUnits(v-if="template == 'GlassShelvingUnits'")   
  Brackets(v-if="template == 'Brackets'")   
  OrderingQuestions(v-if="template == 'OrderingQuestions'")   
  MyAccount(v-if="template == 'MyAccount'")
  Policies(v-if="template == 'Policies'")  
  ProblemOrder(v-if="template == 'ProblemOrder'")  
  ProductNew(v-if="template == 'ProductNew'")  
  SignIn(v-if="template == 'SignIn'")  
  TradeProgram(v-if="template == 'TradeProgram'")   
  ShelvingUnits(v-if="template == 'ShelvingUnits'")   
  ShelfBrackets(v-if="template == 'ShelfBrackets'")   
  BestSellers(v-if="template == 'BestSellers'")   
  Accessories(v-if="template == 'Accessories'")   
  FeaturedArticles(v-if="template == 'FeaturedArticles'")   
  ManufacturingQuestions(v-if="template == 'ManufacturingQuestions'")   
  Cleaning(v-if="template == 'Cleaning'")   
  
</template>
  
<script setup>
  definePageMeta({
    transition: 'page'
  })
  let template = $ref(null);
  let products = $ref([]);
  let recommended_products = $ref([]);
  const pageReady = ref(false)
  
  let url = useRoute().params.url;
  
  const content = ref({})
  
  function contentType() {
    let type = 'article';
    if(content.value.type == 'Product') {
      type = 'product';
    }
  
    return type;
  }
  
  function contentImage() {
    if(content.value.gallery && content.value.gallery[0] && content.value.gallery[0].src) {
      return content.value.gallery[0].src;
    } else {
      return 'https://res.cloudinary.com/ironabode/image/upload/v1663031599/logo-white_jepwq2.png';
    }
  }
  
  function productSchema() {
    let schemaJSON = {
      "@context": "http://schema.org/",
      "@type": "Product",
      "name": content.value.title,
      "url": `https://ironabode.com/${content.value.url}`,
      "description": content.value.meta_description || '',
      // "sku": "{{ current_variant.sku }}",
      "brand": {
        "@type": "Brand",
        "name": "Iron Abode"
      },
      "offers": [
        {
          "@type": "Offer",
          "availability": "InStock", // OutOfStock / In Stock
          "price": content.value.price,
          "priceCurrency": "USD",
          "url": `https://ironabode.com/${content.value.url}`
        }
      ]
    }
    if(content.value.gallery && content.value.gallery[0] && content.value.gallery[0].src) {
      schemaJSON.image = [content.value.gallery[0].src];
    }
  
    let schema = `
      <script type="application/ld+json">
      ${JSON.stringify(schemaJSON)}
      <\/script>
    `;
    return schema;
  }

  const init = async function init () {
    // Do everything
    content.value = await fetchPost('/api/get-content', {url}) || {};

    nextTick(() => {
      pageReady.value = true
    })
  
    if(!content.value.error) {
      if(content.value.category_filters && content.value.category_filters.length && content.value.template != 'Blog') {
        try {
          products = await fetchPost('/api/get-products', {filters: content.value.category_filters});
        } catch(_) {}
      }
  
      if(content.value.category_filters && content.value.category_filters.length && content.value.template == 'Blog') {
        try {
          content.value.posts = await fetchPost('/api/get-posts', {filters: content.value.category_filters});
        } catch (_) {}
      }
  
      if(content.value.recommended_category_id) {
        try {
          recommended_products = await fetchPost('/api/get-products', {filters: [{category_id: content.value.recommended_category_id}]});
          content.value.recommended_products = recommended_products;
        } catch (_) {}
      }
  
      if(content.value.product_type_id) {
        try {
          let productType = await fetchPost('/api/get-product-type', {id: content.value.product_type_id});
          content.value.options = productType.options;
        } catch (_) {}
      }
  
      template = content.value.template;
    } else {
      pageReady.value = true
      if(content.value.error == 404) {
        setResponseStatus(404);
        template = 404;
        useHead({title: 'Page Not Found'});
      }
    }
  }

  init()
</script>
