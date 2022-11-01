<template lang="pug">
.popupWrapper
  .popupBG(@click="$emit('close')")
  .popup
    h4.nAdrsTtl.txtCenter NEW ADDRESS

    form
      .tabXFrm
        .inputBox
          label.fLabel.lblReq First Name
          input.fInput(type='text' v-model="address.first_name")
        .inputBox
          label.fLabel.lblReq Last Name
          input.fInput(type='text' v-model="address.last_name")
        .inputBox
          label.fLabel Company Name
          input.fInput(type='text' v-model="address.company")
        .inputBox
          label.fLabel Phone Number
          input.fInput(type='tel' v-model="address.phone")
        .inputBox
          label.fLabel.lblReq Address Line 1
          input.fInput(type='text' v-model="address.address")
        .inputBox
          label.fLabel Address Line 2
          input.fInput(type='text' v-model="address.address2")
        .inputBox
          label.fLabel.lblReq Suburb/City
          input.fInput(type='text' v-model="address.city")
        .inputBox
          label.fLabel.lblReq State/Province
          input.fInput(type='text' v-model="address.state")
        .inputBox
          label.fLabel.lblReq Zip/Postal code
          input.fInput(type='text' inputmode='numeric' v-model="address.zip")
        .inputBox
          label.fLabel.lblReq Country
          input.fInput(type='text' v-model="address.country")
    .btmBtnBox.flexBox
      a.orTbBtnSm.btn.btnBg.btnGry.btnTxtWht(@click="$emit('save')" v-if="!isLoading('saving')") SAVE ADDRESS
      a.orTbBtnSm.btn.btnBg.btnGry.btnTxtWht(v-if="isLoading('saving')"): i.fas.fa-spinner.fa-spin
      a.orTbBtnSm.btn.btnBg.btnWhiteBB(@click="$emit('close')") CANCEL
</template>

<script setup>
let {address} = defineProps(['address']);
</script>