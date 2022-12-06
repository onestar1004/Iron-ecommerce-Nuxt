<template lang="pug">
.productPage.wrapper
  section.breadcrumbBox
    .container
      ul.breadcrumb.flexBox.flexAic.noList
        li.bcItem
          a(href='#') Home
        li.bcItem
          a(href='#') Collections
        li.bcItem
          a(href='#') Product Page
        li.bcItem.active Gallery
  section.prodBox
    .container
      .prodDtlsBox
        .prodGallery
          .pMainGall.prodGall
            .prodMainImg
              img(src='https://res.cloudinary.com/ironabode/image/upload/v1663031618/prodG-1_cjvpkg.png' alt='')
            .prodGlRow
              .prGlThumb
                a(href='#')
                  img(src='https://res.cloudinary.com/ironabode/image/upload/v1663031618/prodG-1_cjvpkg.png' alt='')
              .prGlThumb
                a(href='#')
                  img(src='https://res.cloudinary.com/ironabode/image/upload/v1663031618/prodG-2_dhkf0i.png' alt='')
              .prGlThumb
                a(href='#')
                  img(src='https://res.cloudinary.com/ironabode/image/upload/v1663031618/prodG-3_xa3bjf.png' alt='')
              .prGlThumb
                a(href='#')
                  img(src='https://res.cloudinary.com/ironabode/image/upload/v1663031618/prodG-4_drinrs.png' alt='')
              .prGlThumb
                a(href='#')
                  img(src='https://res.cloudinary.com/ironabode/image/upload/v1663031618/prodG-5_tf6gsj.png' alt='')
              .prGlThumb
                a(href='#')
                  img(src='https://res.cloudinary.com/ironabode/image/upload/v1663031618/prodG-6_kisiqt.png' alt='')
              .prGlThumb
                a(href='#')
                  img(src='https://res.cloudinary.com/ironabode/image/upload/v1663031619/prodG-7_lrbkok.png' alt='')
          .pDsgnGall.prodGall
            .prodMainImg
              img(src='https://res.cloudinary.com/ironabode/image/upload/v1663031588/designG-1_uzdvmp.png' alt='')
            .prodGlRow
              .prGlThumb
                a(href='#')
                  img(src='https://res.cloudinary.com/ironabode/image/upload/v1663031588/designG-1_uzdvmp.png' alt='')
              .prGlThumb
                a(href='#')
                  img(src='https://res.cloudinary.com/ironabode/image/upload/v1663031588/designG-2_bdkdlx.png' alt='')
              .prGlThumb
                a(href='#')
                  img(src='https://res.cloudinary.com/ironabode/image/upload/v1663031588/designG-3_pbbb1c.png' alt='')
              .prGlThumb
                a(href='#')
                  img(src='https://res.cloudinary.com/ironabode/image/upload/v1663031588/designG-4_dipxbu.png' alt='')
            div
              a.arrow.arrowPre(href='#')
                img(src='https://res.cloudinary.com/ironabode/image/upload/v1663031620/slide-arrow-left_dxgaoe.svg' alt='')
              a.arrow.arrowNxt(href='#')
                img(src='https://res.cloudinary.com/ironabode/image/upload/v1663031620/slide-arrow-right_clnqgg.svg' alt='')
        .prodDtls
          .prodAbout
            h2.prodTitle.fontSerif ESM&Eacute; SHELVING UNIT
            p.prodTxt.fontSerif Handcrafted in the U.S | Free Shipping & Exchanges* 
              br
              a(href='#') *Exclusions Apply
            p.prodRating.flexBox.flexAic
              img(src='https://res.cloudinary.com/ironabode/image/upload/v1663031619/rating_fekjux.svg' alt='')
              a(href='#') 5 REVIEWS
          .prodOptn
            .pOptnCard.opType
              .accHead.active
                .headInner.flexBox.flexAic
                  span.numberBox 1
                  h5.opName CHOOSE SHELF TYPE
                  .opInfo
                    img.opInfoBtn.showMsg(src='https://res.cloudinary.com/ironabode/image/upload/v1663031595/info_wcxuyj.svg' alt='')
                    span.infoHover Click for more information
                    .infoMsg.fontSerif
                      p Glass Shelves: &half;in thick tempered glass encased in &half;in thick square casing 
                      p Metal Shelves: &half;in thick steel tubing with 18 Ga. Sheet Metal 
                      p Walnut Shelves: 1- 3/16in thick natural walnut wood with a clear lacquer topcoat. 
                      p White Oak Shelves: 1-3/16in thick natural white oak wood with a clear lacquer topcoat. 
                      p Whitewashed White Oak Shelves: 1-3/16in thick natural white oak wood with a whitewashed finish and a clear lacquer topcoat. 
                        br
                      //- a(href='#') Click here to learn more about our shelves
                  p.opOnInfo
                    span.fw600 White Oak Wood +$51.00
              .accList(style='max-height: 137px;')
                .opList
                  .opCd
                    p.opCdTitle Glass
                    .opCdImg
                      img(src='https://res.cloudinary.com/ironabode/image/upload/v1663031611/opType-1_dj8egk.png' alt='')
                  .opCd.selected
                    p.opCdTitle Walnut
                    .opCdImg
                      img(src='https://res.cloudinary.com/ironabode/image/upload/v1663031612/opType-2_lgcgr3.png' alt='')
                  .opCd
                    p.opCdTitle Whitewashed White Oak
                    .opCdImg
                      img(src='https://res.cloudinary.com/ironabode/image/upload/v1663031612/opType-3_ssbedu.png' alt='')
                  .opCd
                    p.opCdTitle White Oak
                    .opCdImg
                      img(src='https://res.cloudinary.com/ironabode/image/upload/v1663031612/opType-4_g56q60.png' alt='')
                  .opCd
                    p.opCdTitle Metal
                    .opCdImg
                      img(src='https://res.cloudinary.com/ironabode/image/upload/v1663031612/opType-5_nyqtma.png' alt='')
            .pOptnCard.opHeight
              .accHead
                .headInner.flexBox.flexAic
                  span.numberBox 2
                  h5.opName CHOOSE HEIGHT
                  .opInfo
                    img.opInfoBtn(src='https://res.cloudinary.com/ironabode/image/upload/v1663031595/info_wcxuyj.svg' alt='')
                    span.infoHover Click for more information
                    .infoMsg.fontSerif
                      .iMsgGrid
                        div
                          img.imgRes(src='https://res.cloudinary.com/ironabode/image/upload/v1663031595/infoMsg-2_elbz8t.png' alt='')
                        p Overall Height is measured from the bottom of the bracket to the top of the bracket. Since everything is handcrafted, please take into account our 1/8in tolerance.
                  p.opOnInfo
                    span.fw600 8in Height - 1 Shelf
              .accList
                .opList.opScroll
                  .opCd
                    p.opCdTitle 8in Height - 1 Shelf
                    .opCdImg
                      img(src='https://res.cloudinary.com/ironabode/image/upload/v1663031609/opHeight-1_ffkhup.png' alt='')
                  .opCd
                    p.opCdTitle 30in Height - 2 Shelf
                    .opCdImg
                      img(src='https://res.cloudinary.com/ironabode/image/upload/v1663031610/opHeight-2_yl3jix.png' alt='')
                  .opCd
                    p.opCdTitle 42in Height - 2 Shelf
                    .opCdImg
                      img(src='https://res.cloudinary.com/ironabode/image/upload/v1663031610/opHeight-3_reqzsw.png' alt='')
                  .opCd
                    p.opCdTitle 42in Height - 3 Shelf
                    .opCdImg
                      img(src='https://res.cloudinary.com/ironabode/image/upload/v1663031610/opHeight-4_sz8fks.png' alt='')
                  .opCd
                    p.opCdTitle 54in Height - 3 Shelf
                    .opCdImg
                      img(src='https://res.cloudinary.com/ironabode/image/upload/v1663031610/opHeight-5_ltvmux.png' alt='')
                  .opCd
                    p.opCdTitle 54in Height - 4 Shelf
                    .opCdImg
                      img(src='https://res.cloudinary.com/ironabode/image/upload/v1663031610/opHeight-6_ifys2o.png' alt='')
                  .opCd
                    p.opCdTitle 66in Height - 4 Shelf
                    .opCdImg
                      img(src='https://res.cloudinary.com/ironabode/image/upload/v1663031610/opHeight-7_n6nss3.png' alt='')
                  .opCd
                    p.opCdTitle 66in Height - 5 Shelf
                    .opCdImg
                      img(src='https://res.cloudinary.com/ironabode/image/upload/v1663031610/opHeight-8_x6vw2a.png' alt='')
            .pOptnCard.opDepth
              .accHead
                .headInner.flexBox.flexAic
                  span.numberBox 3
                  h5.opName CHOOSE SHELF DEPTH
                  .opInfo
                    img.opInfoBtn(src='https://res.cloudinary.com/ironabode/image/upload/v1663031595/info_wcxuyj.svg' alt='')
                    span.infoHover Click for more information
                    .infoMsg.fontSerif
                      .iMsgGrid
                        div
                          img.imgRes(src='https://res.cloudinary.com/ironabode/image/upload/v1663031596/infoMsg-3_gbqdvs.png' alt='')
                        p 8in Shelf Depth: most commonly used in bar areas 10in Shelf Depth: most commonly used in office areas 12in Shelf Depth: most commonly used in kitchens
                      br
                      p Shelf Depth is measured from the front of the shelf to the back of the shelf. To figure out the overall depth add 1-3/16in (for 1in thick brackets) or 11/16in (for &half;in brackets) to the selected shelf depth. Since everything is handcrafted, please take into account our 1/8inin tolerance.
                  p.opOnInfo
                    span.fw600 12in Shelf Depth +$14.00
              .accList
                .opList
                  .opCd
                    p.opCdTitle 8in Shelf Depth
                    .opCdImg
                      img(src='https://res.cloudinary.com/ironabode/image/upload/v1663031606/opDepth-1_xzxpcb.svg' alt='')
                  .opCd
                    p.opCdTitle 10in Shelf Depth
                    .opCdImg
                      img(src='https://res.cloudinary.com/ironabode/image/upload/v1663031607/opDepth-2_hoa17r.svg' alt='')
                  .opCd
                    p.opCdTitle 12in Shelf Depth
                    .opCdImg
                      img(src='https://res.cloudinary.com/ironabode/image/upload/v1663031607/opDepth-3_mh0ec1.svg' alt='')
            .pOptnCard.opLength
              .accHead
                .headInner.flexBox.flexAic
                  span.numberBox 4
                  h5.opName CHOOSE SHELF LENGTH
                  .opInfo
                    img.opInfoBtn(src='https://res.cloudinary.com/ironabode/image/upload/v1663031595/info_wcxuyj.svg' alt='')
                    span.infoHover Click for more information
                    .infoMsg.fontSerif
                      .iMsgGrid
                        div
                          img.imgRes(src='https://res.cloudinary.com/ironabode/image/upload/v1663031596/infoMsg-4_eehfya.png' alt='')
                        p Shelf length is measured from one end of your shelf to the other end. This measurement will also determine the overall length of your unit. Since everything is handcrafted, please take into account our 1/8inin tolerance.
                  p.opOnInfo
                    span.fw600 23in Shelf Length +$19.00
              .accList
                .opData.txtCenter
                  select.cSelect
                    option(selected='' hidden='') SELECT A LENGTH
                    option(value='') 20&quot; Shelf Length
                    option(value='') 21&quot; Shelf Length
                    option(value='') 22&quot; Shelf Length
                    option(value='') 23&quot; Shelf Length
                .opList
                  .opCd
                    p.opCdTitle 20in- 47in Shelf Length
                    .opCdImg
                      img(src='https://res.cloudinary.com/ironabode/image/upload/v1663031610/opLength-1_hjnhoq.png' alt='')
                  .opCd
                    p.opCdTitle 48in- 80in Shelf Length
                    .opCdImg
                      img(src='https://res.cloudinary.com/ironabode/image/upload/v1663031610/opLength-2_f0wlj9.png' alt='')
            .pOptnCard.opThickness
              .accHead
                .headInner.flexBox.flexAic
                  span.numberBox 5
                  h5.opName CHOOSE BRACKET THICKNESS
                  .opInfo
                    img.opInfoBtn(src='https://res.cloudinary.com/ironabode/image/upload/v1663031595/info_wcxuyj.svg' alt='')
                    span.infoHover Click for more information
                    .infoMsg.fontSerif
                      .iMsgGrid
                        div
                          img.imgRes(src='https://res.cloudinary.com/ironabode/image/upload/v1663031596/infoMsg-5_fljhds.png' alt='')
                        p This will affect the thickness of your vertical brackets only. To view the thickness of your shelves, please see the tooltip from &ldquo;Step 1: Choose Your Shelvesin.
                  p.opOnInfo
                    span.fw600 1/2in Round
              .accList
                .opList
                  .opCd
                    p.opCdTitle Half Inch
                    .opCdImg
                      img(src='https://res.cloudinary.com/ironabode/image/upload/v1663031611/opThickness-1_csyh0q.png' alt='')
                  .opCd
                    p.opCdTitle One Inch
                    .opCdImg
                      img(src='https://res.cloudinary.com/ironabode/image/upload/v1663031611/opThickness-2_w5xvz4.png' alt='')
            .pOptnCard.opFinish
              .accHead
                .headInner.flexBox.flexAic
                  span.numberBox 6
                  h5.opName CHOOSE BRACKET FINISH
                  .opInfo
                    img.opInfoBtn(src='https://res.cloudinary.com/ironabode/image/upload/v1663031595/info_wcxuyj.svg' alt='')
                    span.infoHover Click for more information
                    .infoMsg.fontSerif
                      p Each of powder coated finishes are specially formulated to go with most styles and spaces. To ensure a finish will work in your space, please click here to get our free sample pack. 
                        br
                      p To view how our finishes look on this style of unit, select a finish below.
                  p.opOnInfo
                    span.fw600 Black
              .accList
                .opList.opScroll
                  .opCd
                    p.opCdTitle Black
                    .opCdImg
                      img(src='https://res.cloudinary.com/ironabode/image/upload/v1663031607/opFinish-1_mtuvgp.png' alt='')
                  .opCd
                    p.opCdTitle Aged Brass
                    .opCdImg
                      img(src='https://res.cloudinary.com/ironabode/image/upload/v1663031608/opFinish-2_qubi8s.png' alt='')
                  .opCd
                    p.opCdTitle Nickel
                    .opCdImg
                      img(src='https://res.cloudinary.com/ironabode/image/upload/v1663031608/opFinish-3_fzsifs.png' alt='')
                  .opCd
                    p.opCdTitle Light Brass
                    .opCdImg
                      img(src='https://res.cloudinary.com/ironabode/image/upload/v1663031608/opFinish-4_lcdxj6.png' alt='')
                  .opCd
                    p.opCdTitle Beige
                    .opCdImg
                      img(src='https://res.cloudinary.com/ironabode/image/upload/v1663031609/opFinish-5_ikv2vm.png' alt='')
                  .opCd
                    p.opCdTitle White
                    .opCdImg
                      img(src='https://res.cloudinary.com/ironabode/image/upload/v1663031609/opFinish-6_biweqr.png' alt='')
                  .opCd
                    p.opCdTitle Dark Bronze
                    .opCdImg
                      img(src='https://res.cloudinary.com/ironabode/image/upload/v1663031609/opFinish-7_u5vnyg.png' alt='')
            .pOptnCard.opAddOn
              .accHead
                .headInner.flexBox.flexAic
                  span.numberBox 7
                  h5.opName CHOOSE ADD-ONS
                  .opInfo
                    img.opInfoBtn(src='https://res.cloudinary.com/ironabode/image/upload/v1663031595/info_wcxuyj.svg' alt='')
                    span.infoHover Click for more information
                    .infoMsg.fontSerif
                      p
                        span.fw600 Round Mounting Plates:
                      p on the top and bottom arms Width: 2in - 2- &frac38;in On 1/2in brackets these will extend out &frac34;in on each side of the bracket (2in wide) On 1in brackets these will extend out 5/16in on each side of the bracket (2-&frac38;in wide) 
                        br
                        br
                        span.fw600 Standard Mounting Tabs:
                      p On &half;in brackets these will extend out &frac34;in from the bracket. On 1in brackets these will extend out 1in from the bracket. 
                        br
                        br
                        span.fw600 Full Railings:
                      p 1/2in round tubing that will attach to your vertical brackets- 4in above each shelf rung. Most commonly ordered with shelving units that are not installed against/ near a wall. 
                        br
                        br
                        span.fw600 Front Railings:
                      p 1/2in round tubing that will attach to your vertical brackets- 4in above each shelf rung. Most commonly ordered with shelving units that are installed against/ near a wall.
                      br
                      .txtCenter
                        img.imgW(src='https://res.cloudinary.com/ironabode/image/upload/v1663031596/infoMsg-7_n3gd0r.png' alt='')
                  p.opOnInfo
                    span.fw600 None
              .accList
                .opList
                  .opCd
                    p.opCdTitle Round Mounts
                    .opCdImg
                      img(src='https://res.cloudinary.com/ironabode/image/upload/v1663031606/opAddOn-1_zm1rp8.png' alt='')
                  .opCd
                    p.opCdTitle Full Railings
                    .opCdImg
                      img(src='https://res.cloudinary.com/ironabode/image/upload/v1663031606/opAddOn-2_x1yxk4.png' alt='')
                  .opCd
                    p.opCdTitle Front Railings
                    .opCdImg
                      img(src='https://res.cloudinary.com/ironabode/image/upload/v1663031606/opAddOn-3_rggtfi.png' alt='')
                  .opCd.opCdOff
                    h5 None
                .opData.txtCenter
                  a.btnSm(href='#') VIEW EXAMPLE
            .pOptnCard.opHardware
              .accHead
                .headInner.flexBox.flexAic
                  span.numberBox 8
                  h5.opName CHOOSE HARDWARE
                  .opInfo
                    img.opInfoBtn(src='https://res.cloudinary.com/ironabode/image/upload/v1663031595/info_wcxuyj.svg' alt='')
                    span.infoHover Click for more information
                    .infoMsg.fontSerif
                      p View our installation instructions and consult with a professional to see which option would be best for you.
                  p.opOnInfo
                    span.fw600 Both +$5.00
              .accList
                .opList
                  .opCd
                    p.opCdTitle Standard Stud or Block Mounting Hardware
                    .opCdImg
                      img(src='https://res.cloudinary.com/ironabode/image/upload/v1663031609/opHardware-1_gu75zn.png' alt='')
                  .opCd
                    p.opCdTitle Drywall Mounting Hardware
                    .opCdImg
                      img(src='https://res.cloudinary.com/ironabode/image/upload/v1663031609/opHardware-2_cm6t5j.png' alt='')
                  .opCd
                    p.opCdTitle Both
                    .opCdImg
                      img(src='https://res.cloudinary.com/ironabode/image/upload/v1663031609/opHardware-3_y1kvrz.png' alt='')
            .pOptnCard.opOverhang
              .accHead
                .headInner.flexBox.flexAic
                  span.numberBox 9
                  h5.opName CHOOSE OVERHANG
                  .opInfo
                    img.opInfoBtn(src='https://res.cloudinary.com/ironabode/image/upload/v1663031595/info_wcxuyj.svg' alt='')
                    span.infoHover Click for more information
                    .infoMsg.fontSerif
                      p Only applicable to Glass and Metal Shelves
                      .txtCenter
                        img.imgW(src='https://res.cloudinary.com/ironabode/image/upload/v1663031597/infoMsg-9_z7vosv.png' alt='')
                      br
                      p 0in Shelf Overhang: The set screw holes will be at the end of your shelves. This will make it so your shelves will not extend past the vertical brackets on your unit when installed. 
                        br
                      p 3in Shelf Overhang: The set screw holes will be placed 3in in from the ends of each shelf. This will make your shelves extend 3in past the vertical brackets on your unit when installed. Please note: no additional length will be added by selecting this option. 
                        br
                      p Set Screw Holes: the holes that allow the brackets and shelves to be secured together. The placement of these holes on your shelves will also determine the placement of the vertical brackets.
                  p.opOnInfo
                    span.fw600 No Overhang
              .accList
                .opList
                  .opCd
                    p.opCdTitle No Overhang
                    .opCdImg
                      img(src='https://res.cloudinary.com/ironabode/image/upload/v1663031611/opOverhang-1_lwjutw.png' alt='')
                  .opCd
                    p.opCdTitle 3in Overhang
                    .opCdImg
                      img(src='https://res.cloudinary.com/ironabode/image/upload/v1663031611/opOverhang-2_kazn7x.png' alt='')
                  .opCd.opCdBig
                    p.opCdTitle Please note:
                    .opCdImg
                      p.txtCenter Overhang is not available for wood shelves.
            .pOptnCard.opSpacing
              .accHead
                .headInner.flexBox.flexAic
                  span.numberBox 10
                  h5.opName CHOOSE SPACING
                  .opInfo
                    img.opInfoBtn(src='https://res.cloudinary.com/ironabode/image/upload/v1663031595/info_wcxuyj.svg' alt='')
                    span.infoHover Click for more information
                    .infoMsg.fontSerif
                      .iMsgGrid
                        div
                          img(src='https://res.cloudinary.com/ironabode/image/upload/v1663031597/infoMsg-10-1_hykpzd.png' alt='')
                          br
                          br
                          img(src='https://res.cloudinary.com/ironabode/image/upload/v1663031597/infoMsg-10-2_af373u.png' alt='')
                        p Shelf Spacing is measured from top of bottom rung to top of the next rung. 
                        p Most popular for Ceiling Mounted Units 12in Shelf Spacing: 12in shelf spacing and the remaining space between the top shelf and the top of the bracket. 
                        p Most popular for Wall Mounted Units Equal Shelf Spacing: Equal spacing between each shelf. 
                        p To view the specific shelf spacing and measurements for your space, click here
                  p.opOnInfo
                    span.fw600 Equal Spacing
              .accList
                .opList
                  .opCd
                    p.opCdTitle Equal Spacing
                    .opCdImg
                      img(src='https://res.cloudinary.com/ironabode/image/upload/v1663031611/opSpacing-1_jivtwd.png' alt='')
                  .opCd
                    p.opCdTitle Standard 12in Spacing
                    .opCdImg
                      img(src='https://res.cloudinary.com/ironabode/image/upload/v1663031611/opSpacing-2_fpfqxp.png' alt='')
            .pOptnCard.opTime
              .accHead
                .headInner.flexBox.flexAic
                  span.numberBox 11
                  h5.opName CHOOSE PRODUCTION TIME
                  .opInfo
                    img.opInfoBtn(src='https://res.cloudinary.com/ironabode/image/upload/v1663031595/info_wcxuyj.svg' alt='')
                    span.infoHover Click for more information
                    .infoMsg.fontSerif
                      p Production Time is the amount of time it will take for us to handcraft your order to these specifications. 
                        br
                      p Production Time does not include shipping time. Shipping to domestic addresses usually takes 3-7 business days. 
                        br
                      p We strongly recommend that you don't schedule any installation appointments until you receive your products.
                  p.opOnInfo
                    span.fw600 Rushed Production +$95.00
              .accList
                .opList
                  .opCd
                    h5.txtCenter STANDARD: 4 WEEKS
                  .opCd
                    h5.txtCenter RUSHED: 3 WEEKS
          .prodInfo
            .prodPrice.flexBox.flexJcc.flexAic
              p.fontSerif As Configured:
              h3 $582.00
            .selectBox.flexBox.flexJcb.flexAic
              div
                select.cSelect
                  option(value='') 1
                  option(value='') 2
                  option(value='') 3
                  option(value='') 4
              div
                label.saveBtn
                  input(type='checkbox')
                  span SAVE FOR LATER
            .btnbox
              button.btn.btnBg.btnBlGry.btnTxtWht ADD TO CART
              button.btn.btnBg.btnGry.btnTxtWht CUSTOMIZE IT FURTHER
            .footTxt.txtCenter
              p.fontSerif Estimated Delivery by June 10-15. 
                a(href='#') View Shipping Policies
              p.fontSerif Pay over time with Affirm. 
                a(href='#') Prequalify now
  section.prodTabs
    .container
      .tabLinks.flexBox
        button.tabLink.on(data-target='tabInclude') WHAT'S INCLUDED
        button.tabLink(data-target='tabDimension') DIMENSIONS
        button.tabLink(data-target='tabInstallation') INSTALLATION
        button.tabLink(data-target='tabShipping') SHIPPING AND RETURN POLICIES
    .pdTabBox
      .container
        .tabContent
          #tabInclude.tabPanel.active
            .pdIncld
              .pdInCrd.txtCenter
                h5 Brackets
                .txtCenter
                  img(src='https://res.cloudinary.com/ironabode/image/upload/v1663031613/pdIncld-1_vpo4s4.svg' alt='')
                p.fontSerif 2 Brackets for shelf lengths under 48in 3 Brackets for shelf lengths 48in+
              .pdInCrd.txtCenter
                h5 Hardware
                .txtCenter
                  img(src='https://res.cloudinary.com/ironabode/image/upload/v1663031613/pdIncld-2_hic1op.svg' alt='')
                p.fontSerif Hardware set for both bracket and shelf installation, matching the color of your brackets.
              .pdInCrd.txtCenter
                h5 Shelves
                .txtCenter
                  img(src='https://res.cloudinary.com/ironabode/image/upload/v1663031613/pdIncld-3_mjweqn.svg' alt='')
                p.fontSerif Wood, Glass, or Metal Shelf / Shelves As selected above.
          #tabDimension.tabPanel
            .pdDmns
              .imgBox
                div
                  img.imgRes(src='https://res.cloudinary.com/ironabode/image/upload/v1663031613/pdDmns-1_zddwgb.png' alt='')
                div
                  img.imgRes(src='https://res.cloudinary.com/ironabode/image/upload/v1663031613/pdDmns-2_wqbrr4.png' alt='')
          #tabInstallation.tabPanel
            .pdInst.flexBox.flexJcc.flexAic
              .imgBox
                img(src='https://res.cloudinary.com/ironabode/image/upload/v1663031614/pdInst-1_j7faxn.png' alt='')
              div
                a.btn.btnBg.btnGry.btnTxtWht(href='#')
                  span VIEW INSTRUCTIONS
                  img(src='https://res.cloudinary.com/ironabode/image/upload/v1663031606/Arrow_nyb03v.svg' alt='')
          #tabShipping.tabPanel
            .pdShip
              .tableBox
                table
                  tr
                    th FREE EXCHANGES
                    td.fontSerif Only Applicable to uninstalled, vertical shelf brackets purchased in the contiguous US. CLICK HERE FOR MORE DETAILS
                  tr
                    th 2 YEAR WARRANTY
                    td.fontSerif Applicable to your vertical shelf brackets. CLICK HERE FOR MORE DETAILS
                  tr
                    th RETURNS
                    td.fontSerif Due to their custom nature, glass shelves + shelf casings and metal shelves are non-refundable. Wood shelves can be returned but will have a 30% production & shipping fee, or they can be exchanged for a full refund minus a 15% production and shipping fee. CLICK HERE FOR MORE DETAILS
                  tr
                    th LOST OR DAMAGED PACKAGES
                    td.fontSerif Each of our products is thoughtfully fabricated and packaged. However, in the rare occurrence that your package arrives damaged or lost, we will send you a replacement(s) for whatever was damaged or lost for free. * *Clear pictures must be provided within 72 hours of delivery. CLICK HERE FOR MORE DETAILS
  section.uniqSec
    .container
      h3.secTitle.txtCenter WHAT MAKES OUR SHELVING UNIQUE
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
  section.prodImg
    .container
      .secTop
        h3.secTitle IRON ABODE, IN REAL LIFE
        a.link.fontSerif(href='/gallery') VIEW THE GALLERY
    .prodImgBox
      .pdImgSlide.flexBox
        .pdImgCd
          a(href='#')
            img(src='https://res.cloudinary.com/ironabode/image/upload/v1663031622/space-kitchen-1_bhd3nn.png' alt='')
            span.imgTag TAP TO VIEW PRODUCTS
          .hotSpot(style='top: 44%; right: 11%')
            .hotSpotDot.show
            .hotSpotInfo
              h5.fontSerif Roux 1/2in Glass Unit
              p 60.5in Overall Height 
              p 3 Shelf- 10in Shelf Depth 
              p Light Brass 
              p Design: @ thesmittencollective
        .pdImgCd
          a(href='#')
            img(src='https://res.cloudinary.com/ironabode/image/upload/v1663031623/space-kitchen-2_nfzgyk.png' alt='')
            span.imgTag TAP TO VIEW PRODUCTS
          .hotSpot(style='top: 42%; right: 35%')
            .hotSpotDot
            .hotSpotInfo
              h5.fontSerif Oslo 1/2in Glass Unit
              p 42in Overall Height 
              p 2 Shelf- 12in Shelf Depth 
              p Black with added railings 
              p Design: @Ironabode
        .pdImgCd
          a(href='#')
            img(src='https://res.cloudinary.com/ironabode/image/upload/v1663031623/space-kitchen-3_ugifep.png' alt='')
            span.imgTag TAP TO VIEW PRODUCTS
          .hotSpot(style='top: 41%; right: 23%')
            .hotSpotDot
            .hotSpotInfo
              h5.fontSerif Oslo 1in Glass Unit
              p 42in Overall Height 
              p 3 Shelf- 12in Shelf Depth 
              p Aged brass 
              p Design: @rachelstellarinteriors 
              p Photo: @melissamellor6
        .pdImgCd
          a(href='#')
            img(src='https://res.cloudinary.com/ironabode/image/upload/v1663031623/space-kitchen-4_ic4kcu.png' alt='')
            span.imgTag TAP TO VIEW PRODUCTS
          .hotSpot(style='top: 23%; right: 29%')
            .hotSpotDot
            .hotSpotInfo
              h5.fontSerif Monty 1/2in Walnut Unit
              p 54in Overall Height 
              p 3 Shelf- 12in Shelf Depth 
              p Black 
              p DEsign: @elizabethmillerreich 
              p Photo: @Stacy ZaringGoldberg
  section.prodRev
    .container
      .secTop.txtCenter
        h3.secTitle CUSTOMER REVIEWS
        .totalRev.flexBox.flexJcc.flexAic
          img(src='https://res.cloudinary.com/ironabode/image/upload/v1663031624/stars_lh28ui.svg' alt='')
          span 5 REVIEWS
      .revFltr.flexBox.flexAic
        p Sort:
        div
          select.cSelect
            option(selected='' hidden='') Select
            option(value='') Low to High
            option(value='') High to Low
      .revBox
        .revRow
          .revUsr
            h5.revUsrNm Carol Stonich
            p.revUsrTag Verified Buyer
            div
              img.revUsrStr(src='https://res.cloudinary.com/ironabode/image/upload/v1663031624/stars_lh28ui.svg' alt='')
            p.revUsrDt July 29th, 2021
          .revPara
            h5 Very happy with my shelving unit!
            p.fontSerif.fw500 Exactly as advertised. Very happy with my shelving unit!!
            a.fontSerif.fw500(href='#') Esme 1in Glass Unit
        .revRow
          .revUsr
            h5.revUsrNm Yvonne
            p.revUsrTag Verified Buyer
            div
              img.revUsrStr(src='https://res.cloudinary.com/ironabode/image/upload/v1663031624/stars_lh28ui.svg' alt='')
            p.revUsrDt December 13, 2021
          .revPara
            h5 Fantastic Quality
            p.fontSerif.fw500 Fantastic quality! This is my second order and its as good as the first. Love this product!
            a.fontSerif.fw500(href='#') Esme 1in Glass Unit
  section.collSec
    div
      .collGrid
        .collInfo.clrWhite
          h3 SHOP THE ROUND COLLECTION
          p.fontSerif Shelving brackets and units handcrafted out of round steel and designed to bring a traditional, french flair to your space.
          a.btn.btnBg.btnWhiteBd.btnTxtWht(href='#') VIEW FULL COLLECTION
        .collGal.flexBox
          .collCard
            .collCdImg
              img(src='https://res.cloudinary.com/ironabode/image/upload/v1663031619/rdColl-1_iu4oaf.png' alt='')
            .collCdInfo
              h5 ESME SHELF BRACKET
              p $107.00
          .collCard
            .collCdImg
              img(src='https://res.cloudinary.com/ironabode/image/upload/v1663031619/rdColl-2_xkgx1n.png' alt='')
            .collCdInfo
              h5 RIVIERA SHELVING UNIT
              p $490.00
          .collCard
            .collCdImg
              img(src='https://res.cloudinary.com/ironabode/image/upload/v1663031619/rdColl-3_t8rxjx.png' alt='')
            .collCdInfo
              h5 ROUX SHELVING UNIT
              p $1,120.00
          .collCard
            .collCdImg
              img(src='https://res.cloudinary.com/ironabode/image/upload/v1663031619/rdColl-4_h8babn.png' alt='')
            .collCdInfo
              h5 SIMON SHELVING UNIT
              p $1334.00



  Footer


</template>p