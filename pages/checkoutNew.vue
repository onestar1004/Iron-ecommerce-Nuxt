<template lang="pug">
.checkout.wrapper
section.pageHead
  .container
    .secTop
      h3.pageTitle.txtCenter CHECKOUT
section.ckOutSec
  .container
    .ckOutGrid
      .ckOtSteps
        .coStCstmr.coStep
          .coStTop.clrWhite
            p.stepNo 1
            h5.stepTitle CUSTOMER
          .coStContent
            .coStCsBox.coStBox
              .guestInput.flexBox.flexWrap
                .guestEmail
                  label.fLabel(for='') Email Address
                  input.fInput(type='email')
                div
                  a.coStBtn.btn.btnBg.btnGry.btnTxtWht(href='#') CONTINUE AS GUEST
              .csBoxCheck
                label.csCheckBox
                  input(type='checkbox')
                  span I would like to receive updates and offers.
              p.txtLine
                span Already have an account? 
                a.txtLink(href='#') Sign in here
              p.txtLine
                span Or continue with 
                a(href='#') Google
        .coStDlvr.coStep
          .coStTop.clrWhite
            p.stepNo 2
            h5.stepTitle DELIVERY OPTIONS
          .coStContent
            .coStDlBox.coStBox
              .formBox
                form(action='')
                  h5.partTtl SHIPPING ADDRESS
                  .frmGrid2
                    .inputBox
                      label.fLabel(for='') First Name
                      input.fInput(type='text')
                    .inputBox
                      label.fLabel(for='') Last Name
                      input.fInput(type='text')
                  .inputBox
                    label.fLabel(for='') Company Name (Optional)
                    input.fInput(type='text')
                  .inputBox
                    label.fLabel(for='') Phone Number (Optional)
                    input.fInput(type='tel')
                  .inputBox
                    label.fLabel(for='') Address
                    input.fInput(type='text')
                  .inputBox
                    label.fLabel(for='') Apartment/Suite/Building (Optional)
                    input.fInput(type='text')
                  .inputBox
                    label.fLabel(for='') City
                    input.fInput(type='text')
                  .inputBox
                    label.fLabel(for='') Country
                    input.fInput(type='text')
                  .frmGrid2
                    .inputBox
                      label.fLabel(for='') State/Province
                      input.fInput(type='text')
                    .inputBox
                      label.fLabel(for='') Postal Code
                      input.fInput(type='text' inputmode='numeric')
                  .csBoxCheck
                    div
                      label.csCheckBox
                        input(type='checkbox')
                        span Save this address in my address book.
                    div
                      label.csCheckBox
                        input(type='checkbox')
                        span My billing address is the same as my shipping address.
                  h5.partTtl SHIPPING METHOD
                  .csShipOp
                    label.csRadio
                      input(type='radio' name='csShip')
                      p.flexBox.flexJcb.flexAic
                        span Free Shipping
                        span $0.00
                    label.csRadio
                      input(type='radio' name='csShip')
                      p.flexBox.flexJcb.flexAic
                        span Rush Shipping
                        span $95.00
                  h5.partTtl ORDER COMMENTS
                  .inputBox
                    input.fInput(type='text')
                div
                  a.coStBtn.btn.btnBg.btnGry.btnTxtWht(href='#') CONTINUE
        .coStBil.coStep
          .coStTop.clrWhite
            p.stepNo 3
            h5.stepTitle BILLING
          .coStContent
            .coStBlBox.coStBox
              .formBox
                form(action='')
                  h5.partTtl BILLING ADDRESS
                  .frmGrid2
                    .inputBox
                      label.fLabel(for='') First Name
                      input.fInput(type='text')
                    .inputBox
                      label.fLabel(for='') Last Name
                      input.fInput(type='text')
                  .inputBox
                    label.fLabel(for='') Company Name (Optional)
                    input.fInput(type='text')
                  .inputBox
                    label.fLabel(for='') Phone Number (Optional)
                    input.fInput(type='tel')
                  .inputBox
                    label.fLabel(for='') Address
                    input.fInput(type='text')
                  .inputBox
                    label.fLabel(for='') Apartment/Suite/Building (Optional)
                    input.fInput(type='text')
                  .inputBox
                    label.fLabel(for='') City
                    input.fInput(type='text')
                  .inputBox
                    label.fLabel(for='') Country
                    input.fInput(type='text')
                  .frmGrid2
                    .inputBox
                      label.fLabel(for='') State/Province
                      input.fInput(type='text')
                    .inputBox
                      label.fLabel(for='') Postal Code
                      input.fInput(type='text' inputmode='numeric')
                  .csBoxCheck
                    div
                      label.csCheckBox
                        input(type='checkbox')
                        span Save this address in my address book.
                    div
                      label.csCheckBox
                        input(type='checkbox')
                        span My billing address is the same as my shipping address.
                div
                  a.coStBtn.btn.btnBg.btnGry.btnTxtWht(href='#') CONTINUE
        .coStPymnt.coStep
          .coStTop.clrWhite
            p.stepNo 4
            h5.stepTitle PAYMENT
          .coStContent
            .coStPyBox.coStBox
              .csPyOpBox
                .csPyOp
                  .accHead
                    h4 Credit Card
                  .accList
                    .accListIn
                      form(action='')
                        .inputBox
                          label.fLabel(for='') Credit card number
                          input.fInput(type='text' inputmode='numeric')
                        .frmGrid2
                          .inputBox
                            label.fLabel(for='') Expiration
                            input.fInput(type='text')
                          .inputBox
                            label.fLabel(for='') CVV
                            input.fInput(type='text' inputmode='numeric')
                .csPyOp
                  .accHead
                    h4 Paypal
                  .accList
                    .accListIn2
                      p.smallTxt Sign in to Paypal at checkout
                .csPyOp
                  .accHead
                    h4 Pay later
                  .accList
                .csPyOp
                  .accHead
                    h4 G Pay
                  .accList
                .csPyOp
                  .accHead
                    h4 Affirm - Pay over time
                  .accList
                    .accListIn2
                      p.smallTxt
                        | You will be redirected to Affirm to securely complete your purchase. Just fill out a few pieces of basic information and get a real-time decision. Checking your availability won&rsquo;t affect your credit score.
              div
                h5.partTtl TERMS AND CONDITIONS
                .csBoxCheck
                  label.csCheckBox
                    input(type='checkbox')
                    span Yes, I agree with the terms and conditions.
              div
                a.coStBtn.btn.btnBg.btnBlBk.btnTxtWht(href='#') PLACE ORDER
      .ckOtSumm
        .ordrSumm
          .oSumTop.flexBox.flexJcb.flexAic.clrWhite
            h5 Order Summary
            a.editLink(href='#') Edit Cart
          .orInBox
            .ordrInfo.orInBxPt
              p.itemCount 1 item
              .orInGrid
                .orInImg
                  img.imgRes(src='https://res.cloudinary.com/ironabode/image/upload/v1663031585/bestSeller-3_bxbndy.png' alt='')
                .orInData
                  h5 Monty (1/2&rdquo;) Walnut Unit
                  p
                    | Overall Height/ Number of Shelves 42&rdquo; Overall Height = 3 Shelves Shelf Length 41&rdquo; Shelf Length Shelf Depth 10&rdquo; Shelf Depth Finish (see 5th photo) Aged Brass Powder Coating Mounting Style Wall-Mounted Shelf Spacing (See 6th Photo) 12&rdquo; Shelf Spacing (Most Popular for Ceiling-Mounted Units) Production Time Standard (4 Weeks) Mounting Hardware Both Stud and Drywall Mounting Hardware (+$5)
                .orInPrice
                  h6 $1,688.00
            .oSumCal.orInBxPt
              p.flexBox.flexJcb.flexAic
                span Subtotal
                span $1,688.00
              p.flexBox.flexJcb.flexAic
                span Shipping
                span FREE
              p.flexBox.flexJcb.flexAic
                span Tax
                span $0.00
              p.flexBox.flexJcb.flexAic
                span Coupon/Gift Certificate
                span
            .oSumCal.orInBxPt
              p.flexBox.flexJcb.flexAic
                span Total (USD)
                span.totalP $1,688.00
        .ckOtImp
          h5 IMPORTANT
          p
            span
              | Do not schedule your installation appointment before receiving your order in case of shipping error.
            a.txtDcUn(href='#') Click here to see your order status.
section.alsoLike.bstSlr
  .container
    .secTop
      h3.secTitle.txtCenter YOU MAY ALSO LIKE
    .bSlrBox.flexBox
      .bSlrCard
        .bSlCrdImg
          img(src='https://res.cloudinary.com/ironabode/image/upload/v1663031585/bestSeller-1_v3jcpo.png' alt='')
        .bSlCrdInfo
          h5 HUGO 1/2&rdquo; METAL UNIT
      .bSlrCard
        .bSlCrdImg
          img(src='https://res.cloudinary.com/ironabode/image/upload/v1663031585/bestSeller-2_egocgu.png' alt='')
        .bSlCrdInfo
          h5 ROUX 1/2&rdquo; GLASS UNIT
      .bSlrCard
        .bSlCrdImg
          img(src='https://res.cloudinary.com/ironabode/image/upload/v1663031585/bestSeller-3_bxbndy.png' alt='')
        .bSlCrdInfo
          h5 OSLO 1&rdquo; WALNUT UNIT
      .bSlrCard
        .bSlCrdImg
          img(src='https://res.cloudinary.com/ironabode/image/upload/v1663031586/bestSeller-4_xtbrlc.png' alt='')
        .bSlCrdInfo
          h5 RIVIERA 1/2&rdquo; GLASS UNIT
section.breadcrumbBox
  .container
    ul.breadcrumb.flexBox.flexJcc.flexAic.noList
      li.bcItem
        a(href='#') Home
      li.bcItem
        a(href='#') Collections
      li.bcItem
        a(href='#') Your Cart
      li.bcItem.active Checkout


Footer


</template>