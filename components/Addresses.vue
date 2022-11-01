<template lang="pug">
#tabAddresses.tabPanel.active

  EditAddressPopup(v-if="editAddress" @close="editAddress = null" :address="editAddress" @save="saveAddresses()")

  .tabAdrs
    #tAdrsList.tAdrsList
      .tAdLstGrid
        .tAdrsCard(v-for="(address, index) in userData.addresses")
          h5 {{address.first_name}} {{address.last_name}}
          p {{address.company}} 
            p {{address.address}}
            p(v-if="address.address2") {{address.address2}} 
            p {{address.city}}, {{address.state}} {{address.zip}}
            p {{address.country}}
          p Phone: {{address.phone}}
          .flexBox.flexJcb
            button.orTbBtnSm.btn.btnBg.btnGry.btnTxtWht(@click="editAddress = address") EDIT
            button.orTbBtnSm.btn.btnBg.btnWhiteBB(@click="userData.addresses.splice(index, 1); saveAddresses();") DELETE
        .tAdrsCard.adrsAdd.flexBox.flexJcc.flexAic(@click="addAddress()")
          .txtCenter
            img(src='https://res.cloudinary.com/ironabode/image/upload/v1663031615/plus-black_fobkvu.svg' alt='')
            p New Address
</template>

<script setup>
let userData = $ref({});
userData = user();
let editAddress = $ref(null);

function addAddress() {
  userData.addresses.push({
    id: generateID()
  });
  editAddress = userData.addresses[userData.addresses.length - 1];
}

async function saveAddresses() {
  startLoad('saving');
  await fetchPost('/api/save-user', {addresses: userData.addresses});
  endLoad('saving');
  editAddress = null;
  Toast('Saved');
}
</script>