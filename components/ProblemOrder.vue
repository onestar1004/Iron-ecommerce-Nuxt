<template lang="pug">
.policyPage.wrapper
Header
section.pageHead
  .container
    .secTop
      h3.pageTitle.txtCenter PROBLEM WITH YOUR ORDER?
section.probFrm
  .container
    .probFrmBox
      form(action='')
        .frmGrid2
          .frmGrp
            label.frmLbl.frmLblFlt First Name*
            input.frmInp(type='text' placeholder='Type your answer here')
          .frmGrp
            label.frmLbl.frmLblFlt Last Name*
            input.frmInp(type='text' placeholder='Type your answer here')
        .frmGrp
          label.frmLbl.frmLblFlt Email (you will use this to log into your account*)
          input.frmInp(type='text' placeholder='John.doe@example.net')
        .frmGrp
          label.frmLbl.frmLblFlt Phone Number
          input.frmInp(type='tel' placeholder='(201) 555-0123')
        .frmGrp
          label.frmLbl.frmLblFlt Order Number
          input.frmInp(type='text' placeholder='Type your answer here')
        .frmGrp
          label.frmLbl.frmLblFlt Where did you place your order?
          select.frmInp.cSelect
            option(selected='' hidden='')
            option(value='') 1
            option(value='') 2
        .frmGrp
          label.frmLbl What&rsquo;s wrong with your order?
          select.frmInp.cSelect
            option(selected='' hidden='')
            option(value='') 1
            option(value='') 2
        .frmGrp
          label.frmLbl.frmLblFlt Please explain what you received and why it is the wrong item.
          input.frmInp(type='text' placeholder='Type your answer here')
        .frmGrp
          label.frmLbl.frmLblFlt Please explain how your item/items were damaged.
          input.frmInp(type='text' placeholder='Type your answer here')
        .frmGrp
          label.frmLbl.frmLblFlt HPlease explain what is wrong with your order.
          input.frmInp(type='text' placeholder='Type your answer here')
        .frmGrp
          label.frmLbl Please upload a picture of the wrong item that you received.
          .dropZone.flexBox.flexJcc.flexAic
            p.dropZoneTxt Choose files or drag here
            input(type='file')
        .frmGrp
          label.frmLbl
            | Please upload a picture of the problem, so that we can better understand the issue.
          .dropZone.flexBox.flexJcc.flexAic
            p.dropZoneTxt Choose files or drag here
            input(type='file')
        .frmGrp
          label.frmLbl Please upload a picture showing how your item/items were damaged.
          .dropZone.flexBox.flexJcc.flexAic
            p.dropZoneTxt Choose files or drag here
            input(type='file')
        .frmGrp
          label.frmLbl Was the box/packaging damaged?
          select.frmInp.cSelect
            option(selected='' hidden='')
            option(value='') 1
            option(value='') 2
        .frmGrp
          label.frmLbl Please upload a picture showing how box/packaging was damaged.
          .dropZone.flexBox.flexJcc.flexAic
            p.dropZoneTxt Choose files or drag here
            input(type='file')
        .btnBox.txtCenter
          button.btn.btnBg.btnWhiteBB Submit


Footer


</template>p