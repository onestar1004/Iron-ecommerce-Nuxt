<template lang="pug">

header.header
  .headerTop
    .container
      .hTLinks.flexBox
        a(href='/finish-samples/') FREE SAMPLES
        a(href='/policies/') POLICIES
        a(href='#') CONTACT
  nav.navbar
    .container.flexBox.flexJcb.flexAic
      .navMobi.flexInline.flexAic
        button#menuBtn.menuBtn(type='button' role='button' onclick='menuToggle()')
          span
          span
          span
        a.searchMobi.navBtn.flexInline(href='#')
          SearchSVG
      a.brandLogo(href='/')
        img(src='https://res.cloudinary.com/ironabode/image/upload/v1663031599/logo-white_jepwq2.png' alt='')
      ul.menuList.flexInline.flexJcb.flexAic.noList
        li.subMenu
          a(href='/complete-shelving-units/') SHELVING UNITS
          .subMenuBox
            .container
              .sMnGrid
                .sMnSide
                  a.btn.btnBg.btnLtGry.btnShadow(href='/new-arrivals/') NEW ARRIVALS
                  a.btn.btnBg.btnLtGry.btnShadow(href='/best-sellers/') BEST SELLERS
                  a.btn.btnBg.btnLtGry.btnShadow(href='/finish-samples/') FREE SAMPLES
                  a.btn.btnBg.btnLtGry.btnShadow(href='/trade-program/') TRADE PROGRAM
                  //- a.btn.btnBg.btnLtGry.btnShadow(href='#') CUSTOM UNITS
                .sMnOptn.sMnOptnSu
                  .sMnOpBox
                    .sMnOpImgBox
                      img.sMnOpImg.show(src='https://res.cloudinary.com/ironabode/image/upload/v1663031601/menuU11_kajdfm.png' alt='')
                      img.sMnOpImg(src='' alt='')
                      img.sMnOpImg(src='' alt='')
                    .sMnOpLinkBox.flexBox.flexColumn.flexAis
                      h5
                        span CEILING MOUNTED UNITS
                      a.sMnOpLink(href='/monty-shelving-unit/') MONTY BRACKETS
                      a.sMnOpLink(href='/oslo-shelving-unit/') OSLO BRACKETS
                      a.sMnOpLink(href='/riviera-shelving-unit/') RIVIERA BRACKETS
                  .sMnOpBox
                    .sMnOpImgBox
                      img.sMnOpImg.show(src='https://res.cloudinary.com/ironabode/image/upload/v1663031601/menuU21_dltpvt.png' alt='')
                      img.sMnOpImg(src='' alt='')
                      img.sMnOpImg(src='' alt='')
                    .sMnOpLinkBox.flexBox.flexColumn.flexAis
                      h5
                        span WALL MOUNTED UNITS
                      a.sMnOpLink(href='/esme-shelving-unit/') ESME BRACKETS
                      a.sMnOpLink(href='/hugo-shelving-unit/') HUGO BRACKETS
                      a.sMnOpLink(href='/monty-shelving-unit/') MONTY BRACKETS
                      a.sMnOpLink(href='/leo-shelving-unit/') LEO BRACKETS
                  .sMnOpBox
                    .sMnOpImgBox
                      img.sMnOpImg.show(src='https://res.cloudinary.com/ironabode/image/upload/v1663031601/menuU31_svre6u.png' alt='')
                      img.sMnOpImg(src='' alt='')
                      img.sMnOpImg(src='' alt='')
                    .sMnOpLinkBox.flexBox.flexColumn.flexAis
                      h5
                        span STANDING UNITS
                      a.sMnOpLink(href='/faye-shelving-unit/') FAYE BRACKETS
                      a.sMnOpLink(href='/roux-shelving-unit/') ROUX BRACKETS
                      a.sMnOpLink(href='/simon-shelving-unit/') SIMON BRACKETS
                  .sMnOpBox
                    .sMnOpImgBox
                      img.sMnOpImg.show(src='https://res.cloudinary.com/ironabode/image/upload/v1663031601/menuU41_w8c39a.png' alt='')
                    .sMnOpLinkBox.flexBox.flexColumn.flexAis
                      h5
                        span HIDDEN BRACKET UNITS
                      a.sMnOpLink(href='/felix-shelving-unit/') FELIX
        li.subMenu
          a(href='/shelf-brackets/') BRACKETS
          .subMenuBox
            .container
              .sMnGrid
                .sMnSide
                  a.btn.btnBg.btnLtGry.btnShadow(href='/new-arrivals/') NEW ARRIVALS
                  a.btn.btnBg.btnLtGry.btnShadow(href='#') BEST SELLERS
                  a.btn.btnBg.btnLtGry.btnShadow(href='/finish-samples/') FREE SAMPLES
                  a.btn.btnBg.btnLtGry.btnShadow(href='/trade-program/') TRADE PROGRAM
                  //- a.btn.btnBg.btnLtGry.btnShadow(href='#') CUSTOM UNITS
                .sMnOptn.sMnOptnBk
                  .sMnOpBox
                    .sMnOpImgBox
                      img.sMnOpImg.show(src='https://res.cloudinary.com/ironabode/image/upload/v1663031600/menuB11_ytnn7u.png' alt='')
                      img.sMnOpImg(src='' alt='')
                      img.sMnOpImg(src='' alt='')
                    .sMnOpLinkBox.flexBox.flexColumn.flexAis
                      h5
                        span CEILING MOUNTED BRACKETS
                      a.sMnOpLink(href='/monty-bracket/') MONTY BRACKETS
                      a.sMnOpLink(href='/oslo-bracket/') OSLO BRACKETS
                      a.sMnOpLink(href='/riviera-bracket/') RIVIERA BRACKETS
                  .sMnOpBox
                    .sMnOpImgBox
                      img.sMnOpImg.show(src='https://res.cloudinary.com/ironabode/image/upload/v1663031600/menuB21_nrbsta.png' alt='')
                      img.sMnOpImg(src='' alt='')
                      img.sMnOpImg(src='' alt='')
                    .sMnOpLinkBox.flexBox.flexColumn.flexAis
                      h5
                        span WALL MOUNTED BRACKETS
                      a.sMnOpLink(href='/esme-bracket/') ESME BRACKETS
                      a.sMnOpLink(href='/hugo-bracket/') HUGO BRACKETS
                      a.sMnOpLink(href='/monty-bracket') MONTY BRACKETS
                      a.sMnOpLink(href='/leo-bracket/') LEO BRACKETS
                  .sMnOpBox
                    .sMnOpImgBox
                      img.sMnOpImg.show(src='https://res.cloudinary.com/ironabode/image/upload/v1663031600/menub31_zvdmxj.png' alt='')
                      img.sMnOpImg(src='' alt='')
                      img.sMnOpImg(src='' alt='')
                    .sMnOpLinkBox.flexBox.flexColumn.flexAis
                      h5
                        span STANDING BRACKETS
                      a.sMnOpLink(href='/faye-bracket/') FAYE BRACKETS
                      a.sMnOpLink(href='/roux-bracket/') ROUX BRACKETS
                      a.sMnOpLink(href='/simon-bracket/') SIMON BRACKETS
        li.subMenu
          a(href='/accessories/') ACCESSORIES
          .subMenuBox
            .container
              .sMnGrid
                .sMnSide
                  a.btn.btnBg.btnLtGry.btnShadow(href='/new-arrivals/') NEW ARRIVALS
                  a.btn.btnBg.btnLtGry.btnShadow(href='#') BEST SELLERS
                  a.btn.btnBg.btnLtGry.btnShadow(href='/finish-samples/') FREE SAMPLES
                  a.btn.btnBg.btnLtGry.btnShadow(href='/trade-program/') TRADE PROGRAM
                  //- a.btn.btnBg.btnLtGry.btnShadow(href='#') CUSTOM UNITS
                .sMnOptn.sMnOptnAs
                  .sMnOpBox.txtCenter
                    a(href='/78-round-iron-blanket-ladder/').sMnOpImgBox
                      img(src='https://res.cloudinary.com/ironabode/image/upload/v1663031599/menuA11_geet2x.png' alt='')
                    .sMnOpLinkBox
                      h5
                        a(href='/78-round-iron-blanket-ladder/') BLANKET LADDER
                  .sMnOpBox.txtCenter
                    a(href='/fitz-potrack-towel-holder/').sMnOpImgBox
                      img(src='https://res.cloudinary.com/ironabode/image/upload/v1663031600/menuA31_r4nhkj.png' alt='')
                    .sMnOpLinkBox
                      h5
                        a(href='/fitz-potrack-towel-holder/') FITZ POT RACK/TOWEL BAR
                  .sMnOpBox.txtCenter
                    a(href='/remi-wall-hook/').sMnOpImgBox   
                      img(src='https://res.cloudinary.com/ironabode/image/upload/v1663031600/menuA21_henu98.png' alt='')
                    .sMnOpLinkBox
                      h5
                        a(href='/remi-wall-hook/') HOOKS
                  .sMnOpBox.txtCenter
                    a(href='/wine-rack/').sMnOpImgBox
                      img(src='https://res.cloudinary.com/ironabode/image/upload/v1663031600/menuA41_hrch2m.png' alt='')
                    .sMnOpLinkBox
                      h5
                        a(href='/wine-rack/') WINE GLASS RACKS
        li
          a(href='/best-sellers/') Best Sellers
      .navBtnBox.flexInline.flexAic
        a.searchBtn.navBtn.flexInline(href='#')
          SearchSVG
        a.usrBtn.navBtn.flexInline(href='/my-account')
          AccountSVG
        a#cartBtn.cartBtn.navBtn.flexInline(href="/cart")
          CartSVG
          span.cartNo(v-if="!isLoading('cart')") {{useStore().cartData.cart.length}}
    #menuMobi.menuMobi
      .mmGrid
        a.mmGCard(href='#')
          .flexBox.flexJcb.flexAic
            h5 SHELVING UNITS
            div
              img(src='https://res.cloudinary.com/ironabode/image/upload/v1663031601/mmImg1_achwy5.png' alt='')
              img(src='https://res.cloudinary.com/ironabode/image/upload/v1663031601/mmImg2_tmg5xs.png' alt='')
              img(src='https://res.cloudinary.com/ironabode/image/upload/v1663031601/mmImg3_abxm8a.png' alt='')
        a.mmGCard(href='#')
          .flexBox.flexJcb.flexAic
            h5 BRACKETS
            div
              img(src='https://res.cloudinary.com/ironabode/image/upload/v1663031602/mmImg4_mjmoli.png' alt='')
        a.mmGCard(href='#')
          .flexBox.flexJcb.flexAic
            h5 ACCESSORIES
            div
              img(src='https://res.cloudinary.com/ironabode/image/upload/v1663031602/mmImg5_xfimls.png' alt='')
        a.mmGCard(href='#')
          .flexBox.flexJcb.flexAic
            h5 READY TO SHIP
            div
              img(src='https://res.cloudinary.com/ironabode/image/upload/v1663031602/mmImg6_ke4qff.png' alt='')
        a.mmGCard(href='#')
          .flexBox.flexJcb.flexAic
            h5 BEST SELLERS
            div
              img(src='https://res.cloudinary.com/ironabode/image/upload/v1663031602/mmImg7_iqivjk.png' alt='')
      .mmRow
        a.mmRCard(href='#')
          .txtCenter
            h5 EMAIL
            p help@ironabode.com
        a.mmRCard(href='#')
          .txtCenter
            h5 CALL
            p (208) 258-9733
        a.mmRCard(href='#')
          .txtCenter
            h5 LIVE CHAT
            p M-F 8:30-5:00 pm MST
      .mmLine
        a.mmLCard(href='#')
          .flexBox.flexJcb.flexAic
            h5 JOIN OUR TRADE PROGRAM
            img(src='https://res.cloudinary.com/ironabode/image/upload/v1663031603/arrow-right_tao85y.svg' alt='')
        a.mmLCard(href='#')
          .flexBox.flexJcb.flexAic
            h5 COLLABORATE WITH US
            img(src='https://res.cloudinary.com/ironabode/image/upload/v1663031603/arrow-right_tao85y.svg' alt='')
        a.mmLCard(href='#')
          .flexBox.flexJcb.flexAic
            h5 FAQS
            img(src='https://res.cloudinary.com/ironabode/image/upload/v1663031603/arrow-right_tao85y.svg' alt='')
  #sideCart.sideCart
    .backDrop
    .sideCartBox
      .sCrtHead
        h3.fontSerif.fw600 REVIEW YOUR CART
        p 1 ITEM
      .sCrtProd
        .sCPrInfo
          h5 RIVIERA CUSTOM UNIT
          .sCPrImg
            img(src='https://res.cloudinary.com/ironabode/image/upload/v1663031620/sideCart-1_u23hgc.png' alt='')
          p Quantity-1
        .sCPrData
          h5 $2,286
          p.fontSerif.fw400
            | 30&rdquo; Overall Height = 3 Shelves 
            br
            | &#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;25&rdquo; Shelf Length 
            br
            | &#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;10&rdquo; Shelf Depth 
            br
            | &#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;Aged Brass 
            br
            | &#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;3&rdquo; Shelf Overhang 
            br
            | &#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;12&rdquo; Shelf Spacing 
            br
            | &#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;Standard (4 Weeks) 
            br
            | &#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;Standard Mounting Hardware
          .sCPrBtn.biBtn
            button.btn.btnBg.btnWhiteBB
              img(src='https://res.cloudinary.com/ironabode/image/upload/v1663031595/icon-download_h0onhp.png' alt='')
              span SAVE FOR LATER
            button.btn.btnBg.btnWhiteBB REMOVE
      .sCrtBtns
        a.btn.btnBg.btnBlGry.btnTxtWht(href='#') CONTINUE TO CHECK OUT
        a.btn.btnBg.btnWhiteBB(href='#') KEEP SHOPPING
</template>

<script setup>
let store = useStore();
</script>