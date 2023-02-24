<template lang="pug">

header.header
  div.headerTop(:class="[light ? 'light' : '', 'headerTop']")
    .container
      .hTLinks.flexBox
        a(href='/finish-samples/') FREE SAMPLES
        a(href='/policies/') POLICIES
        a(@click="onClickNeedHelp") CONTACT
  nav.navbar
    .container.flexBox.flexJcb.flexAic
      .navMobi.flexInline.flexAic
        button#menuBtn.menuBtn(ref="refMenuBtn" type='button' role='button' @click="menuToggle")
          span
          span
          span
        a.searchMobi.navBtn.flexInline(@click="showSearch=!showSearch")
          SearchSVG
        GlobalSearch.mobileGlobal(v-if="showSearch && viewportWidth() < 800")

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
                      img.sMnOpImg.show(:src="hoverImages.ceilingMountedUnits[hoverImages.ceilingMountedUnitsIndex]" alt='')
                      img.sMnOpImg(src='' alt='')
                      img.sMnOpImg(src='' alt='')
                    .sMnOpLinkBox.flexBox.flexColumn.flexAis
                      h5
                        span CEILING MOUNTED UNITS
                      a.sMnOpLink(
                        href='/monty-shelving-unit/'
                        @mouseenter="() => setHoverImage('ceilingMountedUnits', 0)"
                        @mouseleave="() => setHoverImage('ceilingMountedUnits', -1)"
                      )
                        | MONTY UNIT
                      a.sMnOpLink(
                        href='/oslo-shelving-unit/'
                        @mouseenter="() => setHoverImage('ceilingMountedUnits', 1)"
                        @mouseleave="() => setHoverImage('ceilingMountedUnits', -1)"
                      )
                        | OSLO UNIT
                      a.sMnOpLink(
                        href='/riviera-shelving-unit/'
                        @mouseenter="() => setHoverImage('ceilingMountedUnits', 2)"
                        @mouseleave="() => setHoverImage('ceilingMountedUnits', -1)"
                      )
                        | RIVIERA UNIT
                  .sMnOpBox
                    .sMnOpImgBox
                      img.sMnOpImg.show(:src="hoverImages.wallMountedUnits[hoverImages.wallMountedUnitsIndex]" alt='')
                      img.sMnOpImg(src='' alt='')
                      img.sMnOpImg(src='' alt='')
                    .sMnOpLinkBox.flexBox.flexColumn.flexAis
                      h5
                        span WALL MOUNTED UNITS
                      a.sMnOpLink(
                        href='/esme-shelving-unit/'
                        @mouseenter="() => setHoverImage('wallMountedUnits', 0)"
                        @mouseleave="() => setHoverImage('wallMountedUnits', -1)"
                      )
                        | ESME UNIT
                      a.sMnOpLink(
                        href='/hugo-shelving-unit/'
                        @mouseenter="() => setHoverImage('wallMountedUnits', 1)"
                        @mouseleave="() => setHoverImage('wallMountedUnits', -1)"
                      )
                        | HUGO UNIT
                      a.sMnOpLink(
                        href='/monty-shelving-unit/'
                        @mouseenter="() => setHoverImage('wallMountedUnits', 2)"
                        @mouseleave="() => setHoverImage('wallMountedUnits', -1)"
                      )
                        | MONTY UNIT
                      a.sMnOpLink(
                        href='/leo-shelving-unit/'
                        @mouseenter="() => setHoverImage('wallMountedUnits', 3)"
                        @mouseleave="() => setHoverImage('wallMountedUnits', -1)"
                      )
                        | LEO UNIT
                  .sMnOpBox
                    .sMnOpImgBox
                      img.sMnOpImg.show(:src="hoverImages.standingUnits[hoverImages.standingUnitsIndex]" alt='')
                      img.sMnOpImg(src='' alt='')
                      img.sMnOpImg(src='' alt='')
                    .sMnOpLinkBox.flexBox.flexColumn.flexAis
                      h5
                        span STANDING UNITS
                      a.sMnOpLink(
                        href='/faye-shelving-unit/'
                        @mouseenter="() => setHoverImage('standingUnits', 0)"
                        @mouseleave="() => setHoverImage('standingUnits', -1)"
                      )
                        | FAYE UNIT
                      a.sMnOpLink(
                        href='/roux-shelving-unit/'
                        @mouseenter="() => setHoverImage('standingUnits', 1)"
                        @mouseleave="() => setHoverImage('standingUnits', -1)"
                      )
                        | ROUX UNIT
                      a.sMnOpLink(
                        href='/simon-shelving-unit/'
                        @mouseenter="() => setHoverImage('standingUnits', 2)"
                        @mouseleave="() => setHoverImage('standingUnits', -1)"
                      )
                        | SIMON UNIT
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
                      img.sMnOpImg.show(:src="hoverImages.ceilingMountedBrackets[hoverImages.ceilingMountedBracketsIndex]" alt='')
                      img.sMnOpImg(src='' alt='')
                      img.sMnOpImg(src='' alt='')
                    .sMnOpLinkBox.flexBox.flexColumn.flexAis
                      h5
                        span CEILING MOUNTED BRACKETS
                      a.sMnOpLink(
                        href='/monty-bracket/'
                        @mouseenter="() => setHoverImage('ceilingMountedBrackets', 0)"
                        @mouseleave="() => setHoverImage('ceilingMountedBrackets', -1)"
                      )
                        | MONTY BRACKETS
                      a.sMnOpLink(
                        href='/oslo-bracket/'
                        @mouseenter="() => setHoverImage('ceilingMountedBrackets', 1)"
                        @mouseleave="() => setHoverImage('ceilingMountedBrackets', -1)"
                      )
                        | OSLO BRACKETS
                      a.sMnOpLink(
                        href='/riviera-bracket/'
                        @mouseenter="() => setHoverImage('ceilingMountedBrackets', 2)"
                        @mouseleave="() => setHoverImage('ceilingMountedBrackets', -1)"
                      )
                        | RIVIERA BRACKETS
                  .sMnOpBox
                    .sMnOpImgBox
                      img.sMnOpImg.show(:src="hoverImages.wallMountedBrackets[hoverImages.wallMountedBracketsIndex]" alt='')
                      img.sMnOpImg(src='' alt='')
                      img.sMnOpImg(src='' alt='')
                    .sMnOpLinkBox.flexBox.flexColumn.flexAis
                      h5
                        span WALL MOUNTED BRACKETS
                      a.sMnOpLink(
                        href='/esme-bracket/'
                        @mouseenter="() => setHoverImage('wallMountedBrackets', 0)"
                        @mouseleave="() => setHoverImage('wallMountedBrackets', -1)"
                      )
                        | ESME BRACKETS
                      a.sMnOpLink(
                        href='/hugo-bracket/'
                        @mouseenter="() => setHoverImage('wallMountedBrackets', 1)"
                        @mouseleave="() => setHoverImage('wallMountedBrackets', -1)"
                      )
                        | HUGO BRACKETS
                      a.sMnOpLink(
                        href='/monty-bracket'
                        @mouseenter="() => setHoverImage('wallMountedBrackets', 2)"
                        @mouseleave="() => setHoverImage('wallMountedBrackets', -1)"
                      )
                        | MONTY BRACKETS
                      a.sMnOpLink(href='/leo-bracket/') LEO BRACKETS
                  .sMnOpBox
                    .sMnOpImgBox
                      img.sMnOpImg.show(:src="hoverImages.standingMountedBrackets[hoverImages.standingMountedBracketsIndex]" alt='')
                      img.sMnOpImg(src='' alt='')
                      img.sMnOpImg(src='' alt='')
                    .sMnOpLinkBox.flexBox.flexColumn.flexAis
                      h5
                        span STANDING BRACKETS
                      a.sMnOpLink(
                        href='/faye-bracket/'
                        @mouseenter="() => setHoverImage('standingMountedBrackets', 0)"
                        @mouseleave="() => setHoverImage('standingMountedBrackets', -1)"
                      )
                        | FAYE BRACKETS
                      a.sMnOpLink(
                        href='/roux-bracket/'
                        @mouseenter="() => setHoverImage('standingMountedBrackets', 1)"
                        @mouseleave="() => setHoverImage('standingMountedBrackets', -1)"
                      )
                        | ROUX BRACKETS
                      a.sMnOpLink(
                        href='/simon-bracket/'
                        @mouseenter="() => setHoverImage('standingMountedBrackets', 2)"
                        @mouseleave="() => setHoverImage('standingMountedBrackets', -1)"
                      )
                        | SIMON BRACKETS
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
                    a(href='/theo-ladder/').sMnOpImgBox
                      img(src='https://res.cloudinary.com/ironabode/image/upload/v1663031599/menuA11_geet2x.png' alt='')
                    .sMnOpLinkBox
                      h5
                        a(href='/theo-ladder/') THEO LADDER
                  .sMnOpBox.txtCenter
                    a(href='/margot-ladder/').sMnOpImgBox
                      img(src='https://res.cloudinary.com/ironabode/image/upload/v1663031600/menuA31_r4nhkj.png' alt='')
                    .sMnOpLinkBox
                      h5
                        a(href='/margot-ladder/') MARGOT LADDER
                  .sMnOpBox.txtCenter
                    a(href='/modern-wall-hooks/').sMnOpImgBox   
                      img(src='https://res.cloudinary.com/ironabode/image/upload/v1663031600/menuA21_henu98.png' alt='')
                    .sMnOpLinkBox
                      h5
                        a(href='/modern-wall-hooks/') MODERN WALL HOOKS
                  .sMnOpBox.txtCenter
                    a(href='/wine-rack/').sMnOpImgBox
                      img(src='https://res.cloudinary.com/ironabode/image/upload/v1663031600/menuA41_hrch2m.png' alt='')
                    .sMnOpLinkBox
                      h5
                        a(href='/wine-rack/') WINE GLASS RACKS
        li
          a(href='/best-sellers/') Best Sellers
      .navBtnBox.flexInline.flexAic
        GlobalSearch(v-if="showSearch && viewportWidth() > 800")
        a.searchBtn.navBtn.flexInline(@click="showSearch=!showSearch")
          SearchSVG
        a.usrBtn.navBtn.flexInline(href='/my-account')
          AccountSVG
        a#cartBtn.cartBtn.navBtn.flexInline(href="/cart")
          CartSVG
          span.cartNo(v-if="!isLoading('cart')") {{useStore().cartData.cart.length}}
    #menuMobi.menuMobi(ref="refMenuMobi")
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
const props = defineProps({
  light: {
    type: Boolean,
    default: () => { return false }
  }
})

let showSearch = $ref(false);
const refMenuMobi = ref(null)
const refMenuBtn = ref(null)

const menuToggle = function () {
  if (refMenuMobi.value) {
    refMenuMobi.value.classList.toggle('open')
    refMenuBtn.value.classList.toggle('on')
  }
}

let hoverImageInterval = null

const hoverImages = ref({
  ceilingMountedUnitsIndex: 0,
  wallMountedUnitsIndex: 0,
  standingUnitsIndex: 0,
  ceilingMountedBracketsIndex: 0,
  wallMountedBracketsIndex: 0,
  standingMountedBracketsIndex: 0,
  ceilingMountedUnits: [
    'https://res.cloudinary.com/ironabode/image/upload/v1663031601/menuU11_kajdfm.png',
    'https://res.cloudinary.com/ironabode/image/upload/v1671607044/Oslo-One-Inch-Front-Brackets-2_vzjcnt.png',
    'https://res.cloudinary.com/ironabode/image/upload/v1671607172/Riviera_liio8m.png'
  ],
  wallMountedUnits: [
    'https://res.cloudinary.com/ironabode/image/upload/v1663031601/menuU21_dltpvt.png',
    'https://res.cloudinary.com/ironabode/image/upload/v1671607346/Hugo_uyn8yw.png',
    'https://res.cloudinary.com/ironabode/image/upload/v1671607419/Monty_unit_ldlxlp.png',
    'https://res.cloudinary.com/ironabode/image/upload/v1671607455/Leo_hypocv.png'
  ],
  standingUnits: [
    'https://res.cloudinary.com/ironabode/image/upload/v1663031601/menuU31_svre6u.png',
    'https://res.cloudinary.com/ironabode/image/upload/v1671607542/Roux_vnbonm.png',
    'https://res.cloudinary.com/ironabode/image/upload/v1671607583/Simon_vabu4f.png'
  ],
  ceilingMountedBrackets: [
    'https://res.cloudinary.com/ironabode/image/upload/v1663031600/menuB11_ytnn7u.png',
    'https://res.cloudinary.com/ironabode/image/upload/v1663031600/menuB11_ytnn7u.png',
    'https://res.cloudinary.com/ironabode/image/upload/v1663031600/menuB11_ytnn7u.png'
  ],
  wallMountedBrackets: [
    'https://res.cloudinary.com/ironabode/image/upload/v1671628747/Hugo_Bracket_Step_3_pcoca3.png',
    'https://res.cloudinary.com/ironabode/image/upload/v1671628794/Monty_Bracket_Step_3_jrzvml.png',
    'https://res.cloudinary.com/ironabode/image/upload/v1671628828/Leo_Bracket_Step_3_gjb0xf.png'
  ],
  standingMountedBrackets: [
    'https://res.cloudinary.com/ironabode/image/upload/v1671629060/Roux_Bracket_and_wall_hkaorq.png',
    'https://res.cloudinary.com/ironabode/image/upload/v1671629060/Roux_Bracket_and_wall_hkaorq.png',
    'https://res.cloudinary.com/ironabode/image/upload/v1671629082/Simon_lnrakb.png'
  ]
})

const setHoverImage = function (type, index) {
  console.log('here::', type, index)
  clearInterval(hoverImageInterval)

  const setIndex = function (index) {
    hoverImages.value[`${type}Index`] = index
  }

  if (index < 0) {
    hoverImageInterval = setInterval(() => {
      clearInterval(hoverImageInterval)
      setIndex(0)
    }, 100)
  } else {
    setIndex(index)
  }
}
const onClickNeedHelp = function () {
  const ele = document.getElementById('reamazeContactBtn')
  ele && ele.click()
}
</script>