<template lang="pug">
#tabAccountSettings.tabPanel.active

  .tabStng
    form(action='')
      .tabXFrm
        .inputBox
          label.fLabel.lblReq First Name
          input.fInput(type='text' v-model="userData.first_name")
        .inputBox
          label.fLabel.lblReq Last Name
          input.fInput(type='text' v-model="userData.last_name")
        .inputBox
          label.fLabel Company Name
          input.fInput(type='text' v-model="userData.company")
        .inputBox
          label.fLabel Phone Number
          input.fInput(type='tel' v-model="userData.phone")
        .inputBox
          label.fLabel.lblReq Address Line 1
          input.fInput(type='text' v-model="userData.address")
        .inputBox
          label.fLabel.lblReq Address Line 2 
          input.fInput(type='text' v-model="userData.address2")
        .inputBox
          label.fLabel.lblReq City/Suburb
          input.fInput(type='text' v-model="userData.city")
        .inputBox
          label.fLabel.lblReq Country
          input.fInput(type='text' v-model="userData.country")
        .inputBox
          label.fLabel.lblReq State/Province
          input.fInput(type='text' v-model="userData.state")
        .inputBox
          label.fLabel.lblReq Zip/Postal code
          input.fInput(type='text' inputmode='numeric' v-model="userData.zip")
    .btmBtnBox.flexBox
      button.orTbBtnSm.btn.btnBg.btnGry.btnTxtWht #[i.fas.fa-save] SAVE
      button.orTbBtnSm.btn.btnBg.btnWhiteBB CANCEL

    .clear(style="height: 25px;")

    a.orTbBtnSm.btn.btnBg.btnGry.btnTxtWht(@click="logout()") #[i.fas.fa-sign-out] LOGOUT

</template>

<script setup>
let userData = $ref({});
userData = user();
</script>