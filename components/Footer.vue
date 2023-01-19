<template lang="pug">
footer.footer.clrWhite
  .ftrTop.bgBlGr
    .container
      .ftrTopBox
        .ftrSub
          h5 SUBSCRIBE TO OUR NEWSLETTER
          input.emailInput(type='email' placeholder='email')
          p Join for exclusive deals, design inspiration, and more!
        .ftrLogo
          a.brandLogo(href='/')
            img(src='https://res.cloudinary.com/ironabode/image/upload/v1663031599/logo-white_jepwq2.png' alt='')
  .ftrMain.bgGray
    .container
      .ftrMainBox
        .ftrLinks
          .ftrLnBox
            .accHead
              h4 CATEGORIES
            ul.accList.noList
              li
                a(href='/complete-shelving-units/') Complete Shelving Units
              li
                a(href='/shelf-brackets/') Brackets
              li
                a(href='/accessories/') Accessories
              li
                a(href='/new-arrivals/') New Arrivals
              li
                a(href='/new-arrivals/') Ready to Ship
              //- li
              //-   a(href='#') Home Decor
          .ftrLnBox
            .accHead
              h4 INFORMATION
            ul.accList.noList
              //- li
              //-   a(href='#') Request a Custom Order
              //- li
              //-   a(href='#') Trade Program
              li
                a(href='/blog/') Blog
              li
                a(href='/about-us/') About Us
              li
                a(href='/gallery/') Gallery
              li
                a(href='/collaborations/') Collaborations
              li
                a(href='/will-it-fit/') Will It Fit      
              li
                a(href='/faq/') FAQ
              li
                a(href='/trade-program/') Trade Program
          .ftrLnBox
            .accHead
              h4 CUSTOMER SERVICE
            ul.accList.noList
              li
                a(href='/policies/') Shipping and Return Policies
              li
                a(href='/my-account/') Start a Return
              li
                a(href='/faq/') FAQ
              li
                a(href='/problem-order/') Problem With My Order
              li
                a(href='/my-account/') My Account
              li
                a(href='#') Contact Us
              //- li
              //-   a(href='/sign-in/') Sign In
              //- li
              //-   a(href='/create-account/') Create Account

        .ftrCards
          a.ftrCard(href='mailto:help@ironabode.com')
            div
              h5 EMAIL
              p help@ironabode.com
          a.ftrCard(@click="onClickCallCard")
            div
              h5 CALL
              p (208) 258-9733
          a.ftrCard(@click="onClickNeedHelp")
            div
              h5 LIVE CHAT
              p M-F 8:30-5:00 pm MST
  .copyRight.bgGray.clrBlack.txtCenter
    p.fontSerif &copy; IRON ABODE 2022. All Rights Reserved

  DialogCallNow(ref="refDialogCallNow")
</template>


<script setup>
const refDialogCallNow = ref(null)
const onClickNeedHelp = function () {
  const ele = document.getElementById('reamazeContactBtn')
  ele && ele.click()
}

const onClickCallCard = function () {
  refDialogCallNow.value.show()
}
</script>