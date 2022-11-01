<template>
<script type="application/ld+json">
  {
    "@context": "http://schema.org/",
    "@type": "Product",
    "name": "{{ product.title | escape }}",
    "url": "{{ shop.url }}{{ product.url }}",
    {%- if product.featured_image -%}
      {%- assign image_size = product.featured_image.width | append: 'x' -%}
      "image": [
        "https:{{ product.featured_image.src | img_url: image_size }}"
      ],
    {%- endif -%}
    "description": "{{ product.description | strip_html | escape }}",
    {%- if current_variant.sku != blank -%}
      "sku": "{{ current_variant.sku }}",
    {%- endif -%}
    "brand": {
      "@type": "Thing",
      "name": "{{ product.vendor | escape }}"
    },
</script>
</template>