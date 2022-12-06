<template lang="pug">
.policyPage.wrapper
  section.pageHead
    .container
      .secTop
        h3.pageTitle.txtCenter SIGN IN
  section.signInBox
    .container
      .sIBoxInner
        .secTop
          h3.secTitle Return Customer
        .sIForm
          form(@submit.prevent="doLogin()")
            .inputBox
              label Email Address
              input.frmInp(type='email' v-model="login.email")
              //- p.inputMsg *Please enter a valid email address
            .inputBox
              label Password
              input.frmInp(type='password' v-model="login.password")
              //- p.inputMsg *Invalid password
            .btnBox.flexAic
              button.btn.btnBg.btnGry.btnTxtWht SIGN IN
              NuxtLink.frgtPass(to="/forgot-password/") FORGOT YOUR PASSWORD?
        .sIInfo
          .flexBox.flexColumn
            .txtBox
              h3.secTitle New Customer?
              p.fontSerif Create an account with us and you&rsquo;ll be able to:
              p.fontSerif.dotBfr Check out faster
              p.fontSerif.dotBfr Save multiple shipping addresses
              p.fontSerif.dotBfr Access your order history
              p.fontSerif.dotBfr Track new orders
              p.fontSerif.dotBfr Save items to your wishlist
            a.btn.btnBg.btnGry.btnTxtWht(href='/create-account/') CREATE ACCOUNT
          .flexBox.flexColumn
            .txtBox
              h3.secTitle Trade Professional?
              p.fontSerif Our artisan-made shelving + decor is truly one-of-a-kind and will instantly transform your projects to the next level. Scroll down to view the exclusive discounts and perks you get from joining the IRON ABODE Trade Program.
            a.btn.btnBg.btnWhiteBB(href='/trade-program/') LEARN MORE
  //- section.breadcrumbBox
  //-   .container
  //-     ul.breadcrumb.flexBox.flexJcc.flexAic.noList
  //-       li.bcItem
  //-         a(href='#') Home
  //-       li.bcItem.active Company Policies



  Footer


</template>

<script setup>
let login = $ref({});

async function doLogin() {
  startLoad('loggingIn');

  let loginResponse = await fetchPost('/api/login', {login});

  if(!loginResponse.error) {
    refreshUser();
    navigateTo('/my-account');
  } else {
    Swal.fire({
      icon: 'error',
      text: loginResponse.error
    })
  }

  endLoad('loggingIn');
}
</script>