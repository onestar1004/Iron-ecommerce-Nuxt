<template lang="pug">
#tabReturns.tabPanel.active
  .tabRtn
    #tRtnList.tRtnList.tabX
      .tabXList
        .tabXCard
          h4.tabXCdTtl HUGO 1/2in METAL SHELF UNIT
          .tabXCdInfo
            .tabXCdImg
              img.imgRes(src='https://res.cloudinary.com/ironabode/image/upload/v1663031618/prodG-3_xa3bjf.png' alt='')
            .tabXCdTxt
              p.fontSerif 30in Overall Height = 2 Shelves 
              p 25in Shelf Length 
              p 10in Shelf Depth 
              p Aged Brass 
              p 3in Shelf Overhang 
              p 12in Shelf Spacing Standard (4 Weeks) 
              p Both Stud and Drywall Mounting Hardware (+$5)
              .btnBox
                button.orTbBtnSm.btn.btnBg.btnGry.btnTxtWht VIEW
                button.orTbBtnSm.btn.btnBg.btnWhiteBB(onclick='showNext(tRtnFrm, tRtnList)') START A RETURN OR EXCHANGE
        .tabXCard
          h4.tabXCdTtl HUGO 1/2in METAL SHELF UNIT
          .tabXCdInfo
            .tabXCdImg
              img.imgRes(src='https://res.cloudinary.com/ironabode/image/upload/v1663031618/prodG-3_xa3bjf.png' alt='')
            .tabXCdTxt
              p.fontSerif 30in Overall Height = 2 Shelves 
              p 25in Shelf Length 
              p 10in Shelf Depth 
              p Aged Brass 
              p 3in Shelf Overhang 
              p 12in Shelf Spacing Standard (4 Weeks) 
              p Both Stud and Drywall Mounting Hardware (+$5)
              .btnBox
                button.orTbBtnSm.btn.btnBg.btnGry.btnTxtWht VIEW
                button.orTbBtnSm.btn.btnBg.btnWhiteBB START A RETURN OR EXCHANGE
      .tRtnInfo
        p * If you would like to exchange your order- do not refuse the package. The carrier will charge top dollar for return shipping if you refuse the package. The buyer will be responsible for these shipping costs. Instead, go to this link to request a discounted return shipping label and start your return: If you would like to Request an Exchange, click here.
    #tRtnFrm.tRtnFrm
      h4.tRtFrTtl HUGO 1/2in AGED BRASS BRACKETS (X2)
      .tRtnFrmGrid
        div
          form(action='')
            .inputBox
              label.fLabel Why are you returning this item?
              div
                label
                  input(type='radio' name='whyReturn')
                  span It doesn&rsquo;t work with my space
              div
                label
                  input(type='radio' name='whyReturn')
                  span It was damaged
              div
                label
                  input(type='radio' name='whyReturn')
                  span Does not meet expectations
            .inputBox
              label.fLabel Please describe damage.
              textarea.fInput
            .inputBox
              label.fLabel Attach Photo
              .fileUpload
                input(type='file')
            .inputBox
              label.fLabel Please describe how the product does not meet expectations.
              textarea.fInput
            .inputBox
              label.fLabel Do you need a shipping label?
              div
                label
                  input(type='checkbox')
                  span Yes (amount will be deducted from your return)
        div
          .tRtnFnC
            h5 FEES & CONDITIONS
            p All returns on our standard brackets and home decor will have a 15% manufacturing and shipping fee.
            p Our standard Wood shelves can be returned, however they have a 30% manufacturing and shipping fee.
            p Due to their extremely custom nature, Glass and Metal shelves are unable to be returned.
            p We also do not accept returns on any custom orders (customizations that are not offered on standard listings).
            a(href='#') VIEW RETURN POLICY
          .inputBox
            label.fLabel Do you understand the shipping and return policies listed above?
            div
              label
                input(type='checkbox')
                span Yes, I have read and understand the policies.
        div
          button.orTbBtn.btn.btnBg.btnGry.btnTxtWht(onclick='showNext(tRtnSbmt, tRtnFrm)') SUBMIT
    #tRtnSbmt.tRtnSbmt
      h4.tRtnSTtl.txtCenter RETURN SUBMITTED
      .tRntH2R
        h5 HOW TO RETURN
        p 1. If you requested a pre-paid shipping label above, then please wait 24 hours for us to send it to you. Make sure the dimensions of the package fit the dimensions of the pre-paid label.
        p 2. Package up your order tightly and carefully- like it arrived. You will be responsible for damages that arise if items are incorrectly repackaged.
        p 3. Send package to: 
          br
          span Iron Abode 
            p 1113 South Railroad Ave 
            p Sugar City, Idaho 83448
        p 4. We will need to receive your return within 60 days of the original delivery. If it arrives after 60 days or includes custom items, your package will be rerouted back to you.
        a.txtDcUn(href='') VIEW RETURN POLICY
      .txtCenter
        button.orTbBtn.btn.btnBg.btnGry.btnTxtWht BACK TO ORDERS
</template>