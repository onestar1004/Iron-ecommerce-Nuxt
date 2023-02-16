<template lang="pug">
.cartPage

  EditAddressPopup(v-if="editAddress" @close="editAddress = null;" :address="editAddress" @save="saveAddresses()")

  .script(v-html="nmiScript")

  .aboutUsPg.wrapper
  Header

  section.pageHead
    .container
      .secTop
        h3.pageTitle.txtCenter CHECKOUT
  section.cartSec
    .cartLoader(v-if="isLoading('cart') || isLoading('updating') || is('checkingEmail')"): i.fal.fa-spinner.fa-spin
    .container
      .cartGrid
        .checkoutForm(v-if="!isLoading('user')")
          .section
            div(class="panel-wrap" @click="openDropDown(1)")
              div(class="sectionCount") 1
              h2(class="panel-head") CUSTOMER
            div(class="panel-description panel-description1" v-if="user() && user().email")
              .name #[i.fal.fa-user] {{checkout.first_name}} {{checkout.last_name}}
              .email #[i.fal.fa-envelope] {{checkout.email}}
              .phone #[i.fal.fa-phone] {{checkout.phone}}
              .edit: a.secondaryBTN.small(href="/my-account?tab=Settings") #[i.fal.fa-edit] Edit
              .logout Not you? #[a(@click="logout()") #[i.fal.fa-sign-out] Logout]
              .clear(style="height: 10px;")
              a.secondaryBTN(@click="openDropDown(2)") Continue
            div(class="panel-description panel-description1" v-else)
              label Email Address
              .loginsection
                input(type="email" v-model="checkout.email" @input="debounce(() => checkEmail(), 1000)" required style="width: 60%; height: 40px")
                //- button(class="loginButton" @click="checkEmail()" v-if="!emailExists") CONTINUE AS GUEST
              //- input(type="checkbox" style="margin: 20px 3px;")
              //- label I would like to recieve updates and offers.
              //- div(v-if="!emailExists") Already have an account ? 
              //-  span(style="color: #66A7DF") Sign in here
              slot(v-if="emailExists && !checkout.guestCheckout")
                label Password
                  input.passwordInput(type="password" v-model="checkout.password")
                  a.primaryBTN(@click="login()" v-if="!is('loggingIn')") Login
                  a.primaryBTN(v-if="is('loggingIn')") #[i.fal.fa-spin.fa-spinner]
                  .explainer Login to your account for faster checkout
                  .explainer: NuxtLink.redLink(to="/forgot-password") Forgot Password?
                  .clear(style="height: 10px;")
                  .or: small - OR -
                  .clear(style="height: 10px;")
                  a.secondaryBTN(@click="checkout.guestCheckout = true; openDropDown(2)") Checkout As Guest
              slot(v-if="!emailExists && emailChecked && !checkout.guestCheckout")
                .clear(style="height: 15px;")
                .explainer #[small #[b OPTIONAL:] Set a password to create an account for faster checkout in the future, click "Continue as Guest" if you do not wish to setup an account.]
                label Password #[small optional]
                  input.passwordInput(type="password" v-model="checkout.password")
                
                label Confirm Password #[small optional]
                  input(type="password" v-model="confirmPassword")

                .error(v-if="checkout.password && confirmPassword && checkout.password != confirmPassword") #[i.fal.fa-exclamation-circle] Passwords do not match

              .clear(style="height: 15px;")

              a.secondaryBTN(@click="openDropDown(2)" v-if="!emailExists && checkout.email && emailChecked") {{checkout.password ? 'Create Account &amp; Continue' : 'Continue As Guest'}}
              //- a.secondaryBTN(@click="openDropDown(2)" v-if="emailExists") Continue

            div(class="panel-wrap" @click="openDropDown(2)")
              div(class="sectionCount") 2
              h2(class="panel-head") SHIPPING ADDRESS
            div(class="panel-description panel-description2" v-if="!user() || (user() && !user().addresses.length)")
              slot(v-if="(!emailExists || checkout.guestCheckout) && (!user() || (user() && !user().email))")
                label First Name
                  input(type="text" v-model="checkout.first_name" required)
                label Last Name
                  input(type="text" v-model="checkout.last_name" required)
                label Company #[small (optional)]
                  input(type="text" v-model="checkout.company")
                label Phone
                  input(type="text" v-model="checkout.phone" required)
              AddressFields(@update="value => {checkout.shipping = value; debounce(() => addressChanged())}" :modelData="checkout.shipping")
              a.secondaryBTN(@click="openDropDown(3)") Save &amp; Continue
            div(class="panel-description panel-description2" v-if="user() && user().addresses.length")
              .addressList
                .address(v-for="address in user().addresses" @click="checkout.shipping = address; refreshCart(checkout)" :class="{'selected': checkout.shipping.id == address.id}")
                  .selected(v-if="checkout.shipping.id == address.id"): i.fal.fa-check-circle
                  .selected(v-if="checkout.shipping.id != address.id"): i.fal.fa-circle
                  .line1 {{address.address}}
                  .line2(v-if="address.address2") {{address.address2}}
                  .cityStateZip {{address.city}} {{address.state}}, {{address.zip}}
                  .edit: a.smallBTN(@click="editAddress = address") #[i.fal.fa-edit] Edit
                .address.add: a(@click="addAddress()") #[i.fal.fa-plus] Add Address

              a.secondaryBTN(@click="openDropDown(3)") Save &amp; Continue

            div(class="panel-wrap" @click="openDropDown(3)")
              div(class="sectionCount") 3
              h2(class="panel-head") BILLING ADDRESS
            div(class="panel-description panel-description3" v-if="!user() || (user() && !user().addresses.length)")
              label #[input(type="checkbox" v-model="checkout.billingSame")] Same as shipping?
              AddressFields(@update="value => {checkout.billing = value;}" v-if="!checkout.billingSame")
              .clear(style="height: 10px;")
              a.secondaryBTN(@click="openDropDown(4)") Save &amp; Continue
            div(class="panel-description panel-description3" v-if="user() && user().addresses.length")
              label #[input(type="checkbox" v-model="checkout.billingSame")] Same as shipping?
              slot(v-if="!checkout.billingSame")
                .addressList
                  .address(v-for="address in user().addresses" @click="checkout.billing = address; refreshCart(checkout)" :class="{'selected': checkout.billing.id == address.id}")
                    .selected(v-if="checkout.billing.id == address.id"): i.fal.fa-check-circle
                    .selected(v-if="checkout.billing.id != address.id"): i.fal.fa-circle
                    .line1 {{address.address}}
                    .line2(v-if="address.address2") {{address.address2}}
                    .cityStateZip {{address.city}} {{address.state}}, {{address.zip}}
                    .edit: a.smallBTN(@click="editAddress = address") #[i.fal.fa-edit] Edit
                  .address.add: a(@click="addAddress()") #[i.fal.fa-plus] Add Address
              .clear(style="height: 10px;")
              a.secondaryBTN(@click="openDropDown(4)") Save &amp; Continue
            div(class="panel-wrap" @click="openDropDown(4)")
              div(class="sectionCount") 4
              h2(class="panel-head") PAYMENT
            div(class="panel-description panel-description4")
              .paymentSummary
                .oSumCal.orInBxPt
                  p.flexBox.flexJcb.flexAic
                    span Subtotal
                    span {{currency(cartData.subTotal)}}
                  p.flexBox.flexJcb.flexAic(v-if="cartData.couponApplied")
                    span Coupon/Gift Certificate
                    span -{{currency(cartData.couponDiscount)}}
                  p.flexBox.flexJcb.flexAic
                    span Shipping
                    span FREE
                  p.flexBox.flexJcb.flexAic(v-if="cartData.tax")
                    span Tax
                    span {{currency(cartData.tax)}}
                .oSumCal.orInBxPt
                  p.flexBox.flexJcb.flexAic
                    span: b Total (USD)
                    span.totalP: b {{currency(cartData.grandTotal)}}
              .clear(style="height: 15px;")
              .cardWrapper(v-show="!hasSavedCard || checkout.newCard")
                .creditCardForm
                  label.noMargin Credit / Debit Card #
                  #cardNumber(ref="ccnumber")
                  .sideBySide
                    .input
                      label.noMargin Expiration
                      #cardExpiration
                    .input
                      label.noMargin CVV Code
                      #cardCvv
                  .cancelSave(v-if="checkout.newCard")
                    a.secondaryBTN.small(:href="'/checkout/'") #[i.fal.fa-credit-card] Use Saved Card
                    .clear(style="height: 15px;")

                  .save(v-if="user() || (checkout.password && !checkout.guestCheckout)"): label #[input(type="checkbox" v-model="checkout.saveCard")] Save card for future purchases?
                  .subcsribe: label #[input(type="checkbox" v-model="checkout.subscribeNewsletter")] Subscribe to our newsletter?
                .buttons
                  a#payButton.primaryBTN(@click="startLoad('purchasing')" v-if="!is('purchasing')") Complete Purchase
                  a.primaryBTN(v-if="is('purchasing')") #[i.fal.fa-spin.fa-spinner] Processing #[small Please Wait.]
              slot(v-if="hasSavedCard && !checkout.newCard")
                .heading Saved Card:
                .savedCard.cardDetails
                  .check: i.fas.fa-check
                  .data
                    .icon: i.fas.fa-credit-card
                    .brand {{user().cc_type}}
                    .num {{user().card_last_4}}

                  .changer: a(href="?changeCard=true") #[i.fas.fa-edit] Change
                .buttons
                  a.primaryBTN(@click="completePurchase()" v-if="!is('purchasing')") Complete Purchase
                  a.primaryBTN(v-if="is('purchasing')") #[i.fal.fa-spin.fa-spinner] Processing #[small Please Wait.]

              .clear(style="height: 10px;")
              .disclaimer By completing a purchase you agree to our #[a.redLink(href="/policies") Terms of Service, Shipping &amp; Return Policies]
            
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
              //- .oSumCal.orInBxPt.couponCart
                label(v-if="!cartData.couponApplied") Coupon
                  input(type="text" v-model="coupon" placeholder="Have a coupon?")
                  a.primaryBTN.small(@click="applyCoupon()" v-if="coupon") Apply
                .appliedCoupon(v-if="cartData.couponApplied") #[i.fal.fa-check-circle] Coupon: #[b {{cartData.couponApplied}}] #[a(@click="removeCoupon()"): i.fal.fa-trash]


              .oSumCal.orInBxPt
                p.flexBox.flexJcb.flexAic
                  span Subtotal
                  span {{currency(cartData.subTotal)}}
                p.flexBox.flexJcb.flexAic(v-if="cartData.couponApplied")
                  span Coupon/Gift Certificate
                  span -{{currency(cartData.couponDiscount)}}
                p.flexBox.flexJcb.flexAic
                  span Shipping
                  span FREE
                p.flexBox.flexJcb.flexAic(v-if="cartData.tax")
                  span Tax
                  span {{currency(cartData.tax)}}
              .oSumCal.orInBxPt
                p.flexBox.flexJcb.flexAic
                  span Total (USD)
                  span.totalP {{currency(cartData.grandTotal)}}
            //- .btnBox
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
          a(href='/cart') Cart
        li.bcItem.active Checkout

  Footer
</template>

<script setup>
let key = $ref(0);
let userData = $ref({});
userData = user();
let editAddress = $ref(null);
let confirmPassword = $ref(null);
let debounce = createDebounce();

let emailExists = $ref(false);
let emailChecked = $ref(false);

function openDropDown(num, keepOpen) {
  if(!keepOpen) {
    document.getElementsByClassName('panel-description1').item(0).style.display = 'none';
    document.getElementsByClassName('panel-description2').item(0).style.display = 'none';
    document.getElementsByClassName('panel-description3').item(0).style.display = 'none';
    document.getElementsByClassName('panel-description4').item(0).style.display = 'none';
  }
  let panelDescription = document.getElementsByClassName(`panel-description${num}`).item(0)
  if (panelDescription.style.display === "block") {
    panelDescription.style.display = "none";
  } else {
    panelDescription.style.display = "block";
  }
}

async function checkEmail() {
  startLoad('checkingEmail');
  let userInfo = await fetchPost('/api/check-email', {email: checkout.email});
  console.log(userInfo, 'user info found');
  if(userInfo) {
    emailExists = true;
  } else {
    emailExists = false;
  }
  emailChecked = true;
  endLoad('checkingEmail');

  setTimeout(() => {
    document.querySelector('.passwordInput').focus();
  }, 10);
}

let hasSavedCard = $computed(() => {
  return (user() && user().nmi_vault_id);
})

function addAddress() {
  userData.addresses.push({
    id: generateID()
  });
  editAddress = userData.addresses[userData.addresses.length - 1];
}

async function logout() {
  useStore().setUser(null);
  useCookie(useRuntimeConfig().public.auth_cookie).value = null;
  location.reload();
}

async function login() {
  startLoad('loggingIn');
  let login = {
    email: checkout.email,
    password: checkout.password
  }

  let loginResponse = await fetchPost('/api/login', {login});

  if(!loginResponse.error) {
    location.reload();
  } else {
    Swal.fire({
      icon: 'error',
      text: loginResponse.error
    })
  }

  endLoad('loggingIn');
}

async function saveAddresses() {
  startLoad('saving');
  await fetchPost('/api/save-user', {addresses: userData.addresses});
  endLoad('saving');
  editAddress = null;
  Toast('Saved');
  refreshUser();
  location.reload();
}

const nmiScript = `
  <script 
    src="https://secure.networkmerchants.com/token/Collect.js" 
    data-tokenization-key="${useRuntimeConfig().public.nmi_public}"

    data-field-apple-pay-required-billing-contact-fields='["name"]'
    data-field-apple-pay-contact-fields='["phone","email"]'
    data-field-apple-pay-style-button-style="white-outline"
    data-field-apple-pay-style-height='35px'
    data-field-apple-pay-style-border-radius='4px'
  ><\/script>
`

function configureNMI() {

  // let price = this.cartTotal;
  // let tax = this.tax;
  // let fullAmount = price + tax;
  let price = 10;
  let tax = 1;
  let fullAmount = price + tax;

  CollectJS.configure({
    paymentSelector: '#payButton',
    variant: 'inline',
    fields: {
      ccnumber: {
        selector: '#cardNumber',
        title: "Card Number",
        placeholder: "0000 0000 0000 0000"
      },
      ccexp: {
        selector: '#cardExpiration',
        title: 'Card Expiration',
        placeholder: '00 / 00'
      },
      cvv: {
        selector: '#cardCvv',
        title: 'CVV Code',
        placeholder: '***'
      }
    },
    googleFont: 'Roboto',
    invalidCss: {
      color: '#D40022',
      border: '1px solid #D40022'
    },
    validCss: {
      color: '#000'
    },
    customCss: {
      padding: '0 10px',
      height: '34px',
    },

    // APPLE PAY / GOOGLE PAY SETTINGS
    country: 'US',
    // price: fullAmount.toString(),
    currency: 'USD',

    callback: (response) => {
      // Swal.fire({
      //   html: JSON.stringify(response)
      // })

      if(response.tokenType == 'googlePay' || response.tokenType == 'applePay') {
        startLoad('fullLoader');
      }

      completePurchase(response);
    },
    validationCallback: (field, status, message) => {
      if(status) {
        // console.log(`${field} is valid ${message}`);
      } else {
        // console.log(`${field} is invalid ${message}`);

        let mapper = {
          ccnumber: 'Card Number',
          cvv: 'CVV',
          ccexp: 'Expiration Date',
        }

        Toast({
          icon: 'error',
          html: `${mapper[field]} - ${message}`
        })
        endLoad('purchasing');
      }

    }
  })
}

async function completePurchase(response = {}) {
  startLoad('purchasing');

  console.log(response, 'nmi response');
  checkout.token = response.token;
  checkout.tokenType = response.tokenType;
  checkout.card = response.card;

  console.log(checkout, 'inserting order');
  let insertResponse = await fetchPost('/api/insert-order', {checkout});

  if(!insertResponse.error) {
    navigateTo(`/receipt?id=${insertResponse.order_id}`);
  } else {
    Swal.fire({
      icon: 'error',
      text: insertResponse.error,
    });
    endLoad('purchasing');
  }
}

let checkout = $ref({
  shipping: {},
  billing: {},
  billingSame: true,
  saveCard: true,
  subscribeNewsletter: false,
})

function addressChanged() {
  if(checkout && checkout.shipping && checkout.shipping.address && checkout.shipping.city && checkout.shipping.state && checkout.shipping.zip) {
    refreshCart(checkout);
  }
}

onMounted(async () => {

  if(user() && user().addresses && user().addresses.length) {
    console.log(user(), 'user data found');
    checkout.shipping = user().addresses[0];
    checkout.billing = user().addresses[0];
    console.log(checkout.shipping, 'shipping data');
  }

  if(user() && user().email) {
    checkout.first_name = user().first_name;
    checkout.last_name = user().last_name;
    checkout.phone = user().phone;
    checkout.email = user().email;
  }

  if(useRoute().query.changeCard) {
    checkout.newCard = true;
  }

  await refreshCart(checkout);

  openDropDown(1);

  setTimeout(() => {
    configureNMI();
  }, 800);
});


refreshCart(checkout);
let {cartData} = storeToRefs(useStore());
async function updateCart() {
  startLoad('updating');
  let saveResponse = await fetchPost('/api/update-cart', {newCart: cartData.value})
  refreshCart(checkout);
  endLoad('updating');
}

const onClickNeedHelp = function () {
  const ele = document.getElementById('reamazeContactBtn')
  ele && ele.click()
}
</script>

<style lang="sass" scoped>
$font-stack2: 'Montserrat', sans-serif

.section
  background-color: white
  padding: 0
.panel-wrap
  background: #757B76
  margin-bottom: 10px
  display: flex
  cursor: pointer
.panel-description1
  display: none
.panel-description2
  display: none
.panel-description3
  display: none
.panel-description4
  display: none
.panel-description
  padding: 15px
  background-color: white

.panel-head
  font-family: $font-stack2
  position: relative
  line-height: 55px
  color: white
  font-weight: lighter

.sectionCount
  width: 50px
  background: #404341
  margin-right: 10px
  text-align: center
  line-height: 55px
  color: white
  font-size: larger
  font-weight: lighter
  font-family: $font-stack2
  
.loginsection
  display: flex
  gap: 5px
  font-size: 12px
.loginButton
  padding: 0 10px
  background-color: #404341
  color: white
  border: none
  font-weight: lighter
  min-height: 30px
  width: 40%
</style>