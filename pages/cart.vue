<template lang="pug">
.cartPage
  .aboutUsPg.wrapper
  Header
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
          div(v-for="(item, index) in cartData.cart" :key="item.id")
            .cartWrapper
              .imgView
                img.imgRes(:src="getImage({image: item.image, width: 200, height: 180, type: 'c_fill'})")
              .infoView
                .title {{item.title}}
                ul.options.fontCormorant
                  li(v-for="option in item.options")
                    span.label {{ option.label }}
                    span.info(style="margin-left: 10px;") {{ option.selection.label }} #[span.price(v-if="option.selection.price || option.selection.modified_price") {{currency(option.selection.modified_price || option.selection.price)}}]
                .saved(v-if="item.saved_id"): a(@click="cartData.cart.splice(index, 1); updateCart();" :href="'/'+item.url+'?saved_id='+item.saved_id") #[i.fal.fa-edit] Edit
            .overview-strip(style="margin-top: 22px;")
              .eta Lead Time
              .price Unit Price
              .qty Quantity
              .total Subtotal
            .overview-strip(style="background: #F5F5F5; padding-top: 24px; padding-bottom: 24px;")
              .eta {{ '-' }}
              .price {{currency(totalPrice(item) * item.quantity)}}
              .qty
                select(name="card" id="cars" :value="`${item.quantity}`")
                  option(value="") Select
                  option(v-for="qtyIndex in 100" :value="`${qtyIndex}`") {{ qtyIndex }}
              .total {{ '-' }}
            .overview-actions(style="margin-top: 12px; margin-bottom: 22px;")
              .grow
              .biBtn
                a.btn.btnBg.btnWhiteBB(@click="saveForLater(item)")
                  img(src='https://res.cloudinary.com/ironabode/image/upload/v1663031595/icon-download_h0onhp.png' alt='')
                  span SAVE FOR LATER
                a.btn.btnBg.btnWhiteBB(@click="cartData.cart.splice(index, 1); updateCart();") REMOVE

          // .cartItem(v-for="(item, index) in cartData.cart" style="display: block;")
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
                //- p.flexBox.flexJcb.flexAic
                  span Shipping
                  span FREE
                //- p.flexBox.flexJcb.flexAic
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
  //- CartRecommendations

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
  location.href = '/checkout';
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

<style lang="scss" scoped>

.cartWrapper {
  display: grid;
  grid-template-columns: repeat(12, minmax(0, 1fr));
  gap: 1.2rem;

  .imgView {
    grid-column: span 4 / span 4;
  }

  .infoView {
    grid-column: span 8 / span 8;

    .title {
      font-size: 28px;
    }

    .options {
      list-style-type: none;
      font-size: 18px;

      .label {
        font-weight: 700;
      }

      .info {
        font-weight: 300;
      }
    }
  }

  @media (max-width: 600px) {
    .imgView { grid-column: span 12 / span 12; }
    .infoView { grid-column: span 12 / span 12; }
  }
}

.overview-strip {
  display: grid;
  grid-template-columns: repeat(12, minmax(0, 1fr));
  gap: 0.75rem;
  font-weight: lighter;
  padding-top: 12px;
  padding-bottom: 12px;
  padding-left: 22px;
  padding-right: 22px;

  .eta {
    grid-column: span 3 / span 3;
  }

  .price {
    grid-column: span 3 / span 3;
  }

  .qty {
    grid-column: span 3 / span 3;

    select {
      margin: 0;      
      -webkit-box-sizing: border-box;
      -moz-box-sizing: border-box;
      box-sizing: border-box;
      background-color: white;
      border: thin solid rgb(29, 29, 29);
      border-radius: 0px;
      display: inline-block;
      font: inherit;
      line-height: 1.5em;
      padding: 0.5em 3.5em 0.5em 1em;

      &::after {
        content: "\25BE"; /* Unicode character for a downward arrow */
        position: absolute;
        right: 10px;
        top: 50%;
        transform: translateY(-50%);
        pointer-events: none;
      }
    }
  }

  .total {
    grid-column: span 3 / span 3;
  }

  @media (max-width: 600px) {
    .eta {
      grid-column: span 6 / span 6;
    }

    .price {
      grid-column: span 6 / span 6;
    }

    .qty {
      grid-column: span 6 / span 6;
    }

    .total {
      grid-column: span 6 / span 6;
    }
  }
}

.overview-actions {
  display: flex;
  align-content: center;

  .grow {
    flex-grow: 1;
  }
}
</style>
