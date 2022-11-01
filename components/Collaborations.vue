<template lang="pug">
.articlePage.wrapper
Header
section.collabTop.pageTopSec
  .container
    .secTop.txtCenter
      h3.pageTitle Collaborations
      p.fontSerif Are you a designer, influencer, or blogger? We would love to get to know you and work with you! Collaborate with us for special pricing on your custom shelves and to be featured on our social feeds and website!
      a.btn.btnBg.btnWhiteBB(href='#learn') LEARN MORE
  .collabPrImg.prodImg
    .prodImgBox
      .pdImgSlide.flexBox
        .pdImgCd
          img(src='https://res.cloudinary.com/ironabode/image/upload/v1666915696/1_cipt7h.png' alt='')
        .pdImgCd
          img(src='https://res.cloudinary.com/ironabode/image/upload/v1663031587/collab-2_mspnsj.png' alt='')
        .pdImgCd
          img(src='https://res.cloudinary.com/ironabode/image/upload/v1663031587/collab-3_ckphsg.png' alt='')
        .pdImgCd
          img(src='https://res.cloudinary.com/ironabode/image/upload/v1663031588/collab-4_dpd56w.png' alt='')
        .pdImgCd
          img(src='https://res.cloudinary.com/ironabode/image/upload/v1666915696/6_zcxor7.png' alt='')
section.collabHow
  .container
    .secTop.txtCenter
      h3.secTitle#learn How it Works
    .coHowBox.flexBox.flexWrap.flexJcc
      .coHowCd.txtCenter
        p.stepNo STEP 1
        h5.stepName CHOOSE THE PRODUCT
        p.stepInfo.fontSerif Choose the products to include in the collaboration to your cart. #[NuxtLink(to="/") View our collection here.]
      .coHowCd.txtCenter
        p.stepNo STEP 2
        h5.stepName REFRESH THE PAGE
        p.stepInfo.fontSerif Once the products are added, refresh the page.
      .coHowCd.txtCenter
        p.stepNo STEP 3
        h5.stepName FILL OUT THE FORM
        p.stepInfo.fontSerif Fill out the form below and a member from the design team will get in contact with you.
section.collabForm.formSec
  .container
    .frmBox
      form(@submit.prevent="sendForm()")
        .frmGrid2
          .frmGrp
            label.frmLbl.frmLblFlt First Name*
            input.frmInp(type='text' placeholder='Type your answer here' v-model="formData.first_name" required)
          .frmGrp
            label.frmLbl.frmLblFlt Last Name*
            input.frmInp(type='text' placeholder='Type your answer here' v-model="formData.last_name" required)
        .frmGrp
          label.frmLbl.frmLblFlt Email*
          input.frmInp(type='email' placeholder='john.doe@example.net' v-model="formData.email" required)
        .frmGrp
          label.frmLbl.frmLblFlt Business Name*
          input.frmInp(type='text' placeholder='Type your answer here' v-model="formData.business_name" required)
        .frmGrp
          label.frmLbl.frmLblFlt Business Website (if applicable)
          input.frmInp(type='text' placeholder='Type your answer here' v-model="formData.website")
        .frmGrp
          label.frmLbl.frmLblFlt Instagram Handle*
          input.frmInp(type='text' placeholder='Type your answer here' v-model="formData.instagram_handle" required)
        .frmGrp
          label.frmLbl Upload a picture of the space you want to showcase our shelving in.*
          .image: img(:src="getImage({image: formData.showcaseImage, height: 150, type: 'c_fill'})" v-if="formData.showcaseImage")
          .clear(style="height: 5px;")
          a.dropZone.flexBox.flexJcc.flexAic(@click="uploadImage('showcaseImage')") {{formData.showcaseImage ? 'Change' : 'Choose'}} file
          .clear(style="height: 25px;")
          //- .dropZone.flexBox.flexJcc.flexAic
            //- p.dropZoneTxt Choose files or drag here
            //- input(type='file')
        .frmGrp
          label.frmLbl Upload another picture of your design plans for the space (if needed).
          .image: img(:src="getImage({image: formData.secondaryImage, height: 150, type: 'c_fill'})" v-if="formData.secondaryImage")
          .clear(style="height: 5px;")
          a.dropZone.flexBox.flexJcc.flexAic(@click="uploadImage('showcaseImage')") {{formData.showcaseImage ? 'Change' : 'Choose'}} file
          .clear(style="height: 25px;")
          //- .dropZone.flexBox.flexJcc.flexAic
          //-   p.dropZoneTxt Choose files or drag here
          //-   input(type='file')

        .frmGrp
          label.frmLbl.frmLblFlt Are you partnering with any other brands on this project? If so, list them below:
          input.frmInp(type='text' placeholder='Type your answer here')
        .frmGrp
          label.frmLbl Which type of collaboration are you expecting?
          div
            label.cCheckRow
              input.cCheckbox(type='checkbox' name='ckType' v-model="formData.types" value="Percentage off product")
              span Percentage off product
          div
            label.cCheckRow
              input.cCheckbox(type='checkbox' name='ckType'  v-model="formData.types" value="Gifted Item")
              span Gifted Item
          div
            label.cCheckRow
              input.cCheckbox(type='checkbox' name='ckType'  v-model="formData.types" value="Other")
              span Other
        .frmGrp
          label.frmLbl Select the product/s that you would like to use in this collaboration from your cart below.
          .frmCrtBx
            label.frmLbl YOUR CART

            .emptyCart(v-if="!cartData || (cartData && cartData.cart && !cartData.cart.length)") #[b #[i.fas.fa-exclamation-circle] Your cart is empty, add some products to your cart and come back to this page]

            .cartData(v-if="cartData && cartData.cart && cartData.cart.length")
              div(v-for="(item, index) in cartData.cart")
                label.cCheckRow
                  input.cCheckbox(type='checkbox' v-model="formData.selectedProducts" :value="item")
                  .cCheckInfo.flexInline.flexAic
                    div
                      img(:src="getImage({image: item.image, width: 100, height: 80, type: 'c_fill'})")
                    div
                      h5 {{item.title}}
                      .option(v-for="option in item.options")
                        .label #[b {{option.label}}]
                        .selection {{option.selection.label}}
        .frmGrp
          label.frmLbl.frmLblFlt Tell us more about you/ your brand and why you would like to partner with IRON ABODE?
          input.frmInp(type='text' placeholder='Type your answer here' v-model="formData.about_brand")
        .frmGrp
          label.frmLbl.frmLblFlt How did you hear about IRON ABODE?
          input.frmInp(type='text' placeholder='Type your answer here' v-model="formData.howHeardAboutIronAbode")
        .btnBox
          button.btn.btnBg.btnGry.btnTxtWht SUBMIT

        pre {{formData}}
section.uniqSec
  .container
    h3.secTitle.txtCenter WHAT MAKES US UNIQUE
  .uniqBox
    .container
      .uniqRow
        .uniqCard
          div
            img(src='https://res.cloudinary.com/ironabode/image/upload/v1663031627/uniq-1_kbnoiw.svg' alt='')
          p Fast Turnaround Times
        .gapLine
        .uniqCard
          div
            img(src='https://res.cloudinary.com/ironabode/image/upload/v1663031627/uniq-2_mrz7vn.svg' alt='')
          p 2 Year Warranty
        .gapLine
        .uniqCard
          div
            img(src='https://res.cloudinary.com/ironabode/image/upload/v1663031628/uniq-3_rh8zg8.svg' alt='')
          p 100% Handcrafted in the USA
section.breadcrumbBox
  .container
    ul.breadcrumb.flexBox.flexJcc.flexAic.noList
      li.bcItem
        a(href='#') Home
      li.bcItem.active Collaborations

Footer
</template>

<script setup>
let cartData = useStore().cartData;
let formData = $ref({
  selectedProducts: [],
  types: [],
})

async function sendForm() {
  startLoad('sending');
  let emailParameters = {
    subject: 'Collaboration Request From Iron Abode'
  }
  let submissionResponse = await fetchPost('/api/send-form', {emailParameters, formData});
  endLoad('sending');

  Swal.fire({
    icon: 'success',
    title: 'Message Sent',
    text: 'We will get back to you ASAP',
  })
}

async function uploadImage(model) {
  let cloudUpload = cloudinary.createUploadWidget({
    cloudName: 'ironabode', 
    uploadPreset: 'image_upload',
    sources: ['local'],
    multiple: false,
    resource_type: 'image',
  }, (error, result) => { 
    if (!error && result && result.event === "success") {
      formData[model] = result.info.secure_url;
    }
  })
  cloudUpload.open();
}
</script>