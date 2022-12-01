<template lang="pug">
.pageWrapper
  .container.receipt
    .loading(v-if="pending"): i.fas.fa-spin.fa-spinner
    .receiptData(v-if="!pending")
      h1 Receipt - Order {{'#' + order.order_id}}

      p Thank you! Your order has been placed successfully.

      .section
        .label Order Details

        .orderDetails
          .item(v-for="item in order.cart.cart")
            .image: img(:src="getImage({image: item.image, width: 90, height: 90, type: 'c_fill'})")
            .details
              .name {{item.title}}
              .options
                .option(v-for="option in item.options")
                  .label {{option.label}}
                  .selection {{option.selection.label}} #[span.price(v-if="option.selection.price || option.selection.modified_price") {{currency(option.selection.modified_price || option.selection.price)}}]
            .quantity x{{item.quantity}}
            .price {{currency(totalPrice(item) * item.quantity)}}
          .totals
            .total.subTotal
              .label Sub Total
              .value {{currency(order.sub_total)}}
            .total.tax
              .label Tax
              .value {{currency(order.tax)}}
            .total.coupon(v-if="order.coupon")
              .label Coupon (#[small {{order.coupon}}])
              .value -{{currency(order.coupon_discount)}}
            .total.grandTotal
              .label Total
              .value {{currency(order.total)}}

      .section
        .label Shipping Address

        .addressData
          .name {{order.shipping.first_name}} {{order.shipping.last_name}}
          .address.item {{order.shipping.address}}
          .address2.item(v-if="order.shipping.address2") {{order.shipping.address2}}
          .cityStateZip {{order.shipping.city}} {{order.shipping.state}}, {{order.shipping.zip}}

      .section
        .label Billing Address

        .addressData
          .name {{order.shipping.first_name}} {{order.shipping.last_name}}
          .address.item {{order.shipping.address}}
          .address2.item(v-if="order.shipping.address2") {{order.shipping.address2}}
          .cityStateZip {{order.shipping.city}} {{order.shipping.state}}, {{order.shipping.zip}}

      //- pre {{order}}

  Footer
</template>

<script setup>
useCookie('ia_cart').value = null;
refreshCart();
let {pending, data: order} = await fetchLazy('/api/get-order', {order_id: useRoute().query.id});
</script>