<template lang="pug">
.cartPage
  .aboutUsPg.wrapper

  ReamazeButton
  SaveProductPopup(v-if="savingProduct" @close="savingProduct = false" @save="savingProduct = false; refreshUser();" :content="savingProduct")


  section.pageHead
    .container
      .secTop
        h3.pageTitle.txtCenter CART
  section.cartSec
    .cartLoader(v-if="isLoading('cart') || isLoading('updating')"): i.fal.fa-spinner.fa-spin
    .container
      .cartGrid
        .cartList
          .cartItem(v-for="(item, index) in cartData.cart")
            .crtItmInfo
              .cartItmImg
                img.imgRes(:src="getImage({image: item.image, width: 100, height: 80, type: 'c_fill'})")
              .cartItmTxt
                h4 {{item.title}}
                .cartOptions
                  .option(v-for="option in item.options")
                    .label {{option.label}}:
                    .selection &nbsp;{{option.selection.label}} #[span.price(v-if="option.selection.price || option.selection.modified_price") {{currency(option.selection.modified_price || option.selection.price)}}]
                .saved(v-if="item.saved_id"): a(@click="cartData.cart.splice(index, 1); updateCart();" :href="'/'+item.url+'?saved_id='+item.saved_id") #[i.fal.fa-edit] Edit
            .crtItmData
              table
                tr
                  //- th Lead Time
                  th Unit Price
                  th Quantity
                  th Subtotal
                tr
                  //- td.fontSerif Estimated Delivery: TODO
                  td.fontSerif {{currency(totalPrice(item))}}
                  td
                    .quantityPicker
                      .theInput
                        .changer: a(@click="item.quantity = parseFloat(item.quantity) - 1; updateCart()"): i.fas.fa-minus
                        input(type="text" v-model="item.quantity" @change="updateCart()")
                        .changer: a(@click="item.quantity = parseFloat(item.quantity) + 1; updateCart()"): i.fas.fa-plus
                  td.fontSerif {{currency(totalPrice(item) * item.quantity)}}
              .crtItmBtns.flexBox
                .biBtn
                  a.btn.btnBg.btnWhiteBB(@click="saveForLater(item)")
                    img(src='https://res.cloudinary.com/ironabode/image/upload/v1663031595/icon-download_h0onhp.png' alt='')
                    span SAVE FOR LATER
                  a.btn.btnBg.btnWhiteBB(@click="cartData.cart.splice(index, 1); updateCart();") REMOVE

          .cartTotal
            h3.fontSerif Cart Total: 
              span {{currency(cartData.grandTotal)}}
        .cartSumm
          .ordrSumm
            .oSumTop.flexBox.flexJcb.flexAic.clrWhite
              h5 Order Summary
              //- a.editLink(href='#') Edit Cart
            .orInBox
              .ordrInfo.orInBxPt
                p.itemCount {{useStore().cartData.cart.length}} item#[span(v-if="useStore().cartData.cart.length > 1") s]
                .orInGrid(v-for="(item, index) in cartData.cart")
                  .orInImg
                    img.imgRes(:src="getImage({image: item.image, width: 100, height: 80, type: 'c_fill'})")
                  .orInData
                    h5 {{item.title}}
                  .orInPrice
                    h6 {{currency(totalPrice(item) * item.quantity)}}
              .oSumCal.orInBxPt.couponCart
                label(v-if="!cartData.couponApplied") Coupon
                  input(type="text" v-model="coupon" placeholder="Have a coupon?")
                  a.primaryBTN.small(@click="applyCoupon()" v-if="coupon") Apply
                .appliedCoupon(v-if="cartData.couponApplied") #[i.fal.fa-check-circle] Coupon: #[b {{cartData.couponApplied}}] #[a(@click="removeCoupon()"): i.fal.fa-trash]


              .oSumCal.orInBxPt
                p.flexBox.flexJcb.flexAic
                  span Subtotal
                  span {{currency(cartData.subTotal)}}
                p.flexBox.flexJcb.flexAic
                  span Shipping
                  span FREE
                p.flexBox.flexJcb.flexAic
                  span Tax
                  span {{currency(cartData.tax)}}
                p.flexBox.flexJcb.flexAic(v-if="cartData.couponApplied")
                  span Coupon/Gift Certificate
                  span -{{currency(cartData.couponDiscount)}}
              .oSumCal.orInBxPt
                p.flexBox.flexJcb.flexAic
                  span Total (USD)
                  span.totalP {{currency(cartData.grandTotal)}}
            .btnBox
              a.btn.btnBg.btnBlGry.btnTxtWht(@click="openCheckout()") CONTINUE TO CHECKOUT
          .cSumLinks
            NuxtLink.cSmLink.flexBox.flexJcb.flexAic(to="/policies")
              h5 SHIPPING AND RETURN POLICIES
              div
                img(src='https://res.cloudinary.com/ironabode/image/upload/v1663031603/arrow-right_tao85y.svg' alt='')
            a.cSmLink.flexBox.flexJcb.flexAic(@click="onClickNeedHelp")
              h5 NEED HELP? CONTACT OUR DESIGN TEAM
              div
                img(src='https://res.cloudinary.com/ironabode/image/upload/v1663031603/arrow-right_tao85y.svg' alt='')
            NuxtLink.cSmLink.flexBox.flexJcb.flexAic(to="/trade-program")
              h5 JOIN OUR TRADE PROGRAM
              div
                img(src='https://res.cloudinary.com/ironabode/image/upload/v1663031603/arrow-right_tao85y.svg' alt='')
          .btmBox
            a.btn.btnBg.btnWhiteBB(href="/") KEEP SHOPPING
  
  //- ADD ACCESSORIES
  AddAccessories

  //- YOU MAY ALSO LIKE
  CartRecommendations

  //- WHAT MAKES US UNIQUE
  WhatMakesUsUnique

  section.breadcrumbBox
    .container
      ul.breadcrumb.flexBox.flexJcc.flexAic.noList
        li.bcItem
          NuxtLink(to='/') Home
        li.bcItem
          a(href='#') Collections
        li.bcItem
          a(href='#') Product Page
        li.bcItem.active Cart

  Footer
</template>

<script setup>
refreshCart();
let {cartData} = storeToRefs(useStore());
async function updateCart() {
  startLoad('updating');
  let saveResponse = await fetchPost('/api/update-cart', {newCart: cartData.value})
  refreshCart();
  endLoad('updating');
}

// Coupon manager
let coupon = $ref(null);
async function applyCoupon() {
  startLoad('coupon');

  fetchPost('/api/apply-coupon', {coupon})
  .then(response => {
    if(!response.error) {
      coupon = null;
      refreshCart();
    } else {
      Swal.fire({
        icon: 'error',
        text: response.error
      })
    }

    endLoad('coupon');
  })
}

async function removeCoupon() {
  startLoad('coupon');
  fetchPost('/api/remove-coupon')
  .then(response => {
    refreshCart();
    endLoad('coupon');
  })
}

async function openCheckout() {
  let insertResponse = await fetchPost('/api/insert-order');

  if(!insertResponse.error) {
    navigateTo(`/receipt?id=${insertResponse.order_id}`);
  } else {
    Swal.fire({
      icon: 'error',
      text: insertResponse.error,
    })
  }
}

let savingProduct = $ref(false);
async function saveForLater(product) {
  let content = product;

  if(!user()) {
    let details = await Swal.fire({
      icon: 'question',
      title: 'Where should we send the link?',
      html: `
        <label>Email
          <input type="email" id="savedEmail">
        </label>
      `,
      confirmButtonText: 'Save Configuration',
      showCancelButton: true,
      cancelButtonText: 'Cancel',
      preConfirm: () => {
        return new Promise(resolve => {
          resolve({
            email: document.getElementById('savedEmail').value,
          })
        })
      }
    });
    if(!details.isConfirmed) return;
    details = details.value;

    console.log(details);

    startLoad('saving');

    await fetchPost('/api/save-for-later', {content: content, email: details.email});

    endLoad('saving');
  } else {
    startLoad('saving');

    savingProduct = product;
    savingProduct.id = product.product_id;

    // await fetchPost('/api/save-for-later', {content, email: user().email});

    endLoad('saving');
  }
}

const onClickNeedHelp = function () {
  const ele = document.getElementById('reamazeContactBtn')
  ele && ele.click()
}
</script>