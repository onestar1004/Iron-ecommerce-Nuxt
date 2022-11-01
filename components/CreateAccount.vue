<template lang="pug">
.articlePage.wrapper
Header
section.pageHead
  .container
    .secTop
      h3.pageTitle.txtCenter CREATE AN ACCOUNT
section.crAccBox
  .container
    .crAccBoxIn
      .crAccForm
        form(@submit.prevent="register()")
          .crAccGrid
            .inputBox
              label.fLabel.lblReq First Name
              input.frmInp(type='text' v-model="newAccount.first_name")
              //- p.inputMsg *Please provide your first name
            .inputBox
              label.fLabel.lblReq Last Name
              input.frmInp(type='text' v-model="newAccount.last_name")
              //- p.inputMsg *Please provide your last name
            .inputBox
              label.fLabel.lblReq Company
              input.frmInp(type='text' v-model="newAccount.company")
              p.inputMsg
            .inputBox
              label.fLabel.lblReq Phone Number 
              input.frmInp(type='tel' v-model="newAccount.phone")
              //- p.inputMsg *Please provide a valid phone number
            .inputBox
              label.fLabel.lblReq Email Address
              input.frmInp(type='email' v-model="newAccount.email")
              //- p.inputMsg *Please provide a valid email address
            .inputBox
            .inputBox
              label.fLabel.lblReq Password
              input.frmInp(type='password' v-model="newAccount.password")
              //- p.inputMsg *Please use a password that has not been used previously
            .inputBox
              label.fLabel.lblReq Confirm Password
              input.frmInp(type='password' v-model="confirm_password")
              p.inputMsg(v-if="newAccount.password && confirm_password && (confirm_password != newAccount.password)") *Password does not match
            //- .inputBox
            //-   label.fLabel.lblReq Current Password
            //-   input.frmInp(type='password')
            //-   p.inputMsg *Invalid password
            .inputBox
              label.fLabel.lblReq How did you hear about us? 
              select.frmInp.cSelect(v-model="newAccount.how_heard")
                option(value='Instagram') Instagram
                option(value='Facebook') Facebook
              //- p.inputMsg *Select an option
            .inputBox
              label.fLabel.lblReq Exclusive Offers 
              div
                label
                  input.cCheckbox(type='checkbox' v-model="newAccount.subscribed")
                  span I would like to receive updates and offers.
          .btnBox
            button.btn.btnBg.btnGry.btnTxtWht() CREATE ACCOUNT
            a.btn.btnBg.btnGry.btnTxtWht(v-if="isLoading('registering')") #[i.fas.fa-spin.fa-spinner]
section.breadcrumbBox
  .container
    ul.breadcrumb.flexBox.flexJcc.flexAic.noList
      li.bcItem
        a(href='#') Home
      li.bcItem.active Company Policies
Footer
</template>

<script setup>
let newAccount = $ref({});
let confirm_password = $ref(null);

async function register() {
  startLoad('registering');
  let registerResponse = await fetchPost('/api/register', {newAccount});

  if(!registerResponse.error) {
    Swal.fire({
      icon: 'success',
      text: 'Logged in Successfully',
    })
    .then(() => {
      navigateTo('/');
    })
  } else {
    Swal.fire({
      icon: 'error',
      text: registerResponse.error,
    })
  }

  endLoad('registering');
}
</script>