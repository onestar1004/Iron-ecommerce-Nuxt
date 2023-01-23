<template lang="pug">
#tabOrders.tabPanel.active
  .tabOdr
    #tOdrList.tOdrList.tabX
      .loading(v-if="isLoading('grabbingOrders')"): i.fas.fa-spin.fa-spinner
      .div(v-for="order in orders")
        .orderNo Order {{'#' + order.order_id}}
        .itemLabel Items ({{order.cart.cart.length}})
        .orders-wrapper(style="margin: 48px auto")
          .order-item(v-for="item in order.cart.cart")
            .tabXCard
              h4.tabXCdTtl {{item.title}}
                .tabXCdInfo
                  .tabXCdImg
                    img.imgRes(:src="getImage({image: item.image, width: 250, height: 250, type: 'c_fill'})")
                  .tabXCdTxt
                    .options
                      .option(v-for="option in item.options")
                        .label #[b {{option.label}}:]
                        .selection {{option.selection.label}} #[span.price(v-if="option.selection.price") {{currency(option.selection.price)}}]

              a.secondaryBTN.small(@click="returnOrder = order; returnItem = item;") Return {{item.title}}
              .clear(style="height: 30px;")

        .totals
          .total.subTotal
            .label Sub Total
            .value {{currency(order.sub_total)}}
          .total.tax
            .label Tax
            .value {{currency(order.tax)}}
          .total.grandTotal
            .label Total
            .value {{currency(order.total)}}

        .btnBox
          //- button.orTbBtnSm.btn.btnBg.btnGry.btnTxtWht(onclick='showNext(tOdrDtl, tOdrList)') VIEW
          button.orTbBtnSm.btn.btnBg.btnWhiteBB TRACK
  
    //- #tOdrDtl.tOdrDtl
    //-   .topBox
    //-     .txtCenter
    //-       img.imgRes(src='https://res.cloudinary.com/ironabode/image/upload/v1663031625/tabOdr-1_yhsbyq.png' alt='')
    //-       h5 ROUX (1/2in) GLASS UNIT
    //-     div
    //-       p.fontSerif
    //-         | Overall Height/ Number of Shelves 42in Overall Height = 3 Shelves Shelf Length 41in Shelf Length Shelf Depth 10in Shelf Depth Finish Aged Brass Powder Coating Mounting Style Wall-Mounted Shelf Spacing 12in Shelf Spacing (Most Popular for Ceiling-Mounted Units) Production Time Standard (4 Weeks) Mounting Hardware Both Stud and Drywall Mounting Hardware ($5)
    //-   .txtCenter
    //-     button.orTbBtn.btn.btnBg.btnGry.btnTxtWht(onclick='showNext( tOdrList, tOdrDtl)') BACK TO ORDERS
    //-   .titleBox.txtCenter
    //-     h4.fontSerif Ordered
    //-     p Estimated Delivery: July 5 - 9
    //-   .progressBar
    //-     span
    //-     span
    //-     span
    //-     span
    //-   .btmBox
    //-     div
    //-       img.imgRes(src='https://res.cloudinary.com/ironabode/image/upload/v1663031625/tabOdr-2_bovoev.png' alt='')
    //-     div
    //-       p.fontSerif Your order has been submitted and is next in line on our order queue. 
    //-       p If you have to make changes or cancel your order, please click on the button below to view our cancellation policy.
    //-       button.orTbBtn.btn.btnBg.btnGry.btnTxtWht CANCELLATION POLICY
</template>

<script setup>
let orders = $ref([]);
startLoad('grabbingOrders');
orders = await fetchPost('/api/grab-user-orders');
endLoad('grabbingOrders');

let returnItem = $ref(null);
let returnOrder = $ref(null);
</script>

<style scoped lang="scss">
.orders-wrapper {
  display: grid;
  grid-template-columns: repeat(12, minmax(0, 1fr));
  gap: 1.75rem; 

  .order-item {
    grid-column: span 6 / span 6;
  }

  @media (max-width: 600px) {
    .order-item {
      grid-column: span 12 / span 12;
    }
  }

  // Display breakpoint for small screen
  @media (min-width: 600px) and (max-width: 960px) {
    .order-item {
      grid-column: span 12 / span 12;
    }
  }

  // Display breakpoint for medium screen
  @media (min-width: 960px) and (max-width: 1264px) {
    .order-item {
      grid-column: span 6 / span 6;
    }
  }

  // Display breakpoint for large screen
  @media (min-width: 1264px) and (max-width: 1904px) {
    .order-item {
      grid-column: span 6 / span 6;
    }
  }
}
</style>
