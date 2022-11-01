<template lang="pug">
section.prodRev
  .container
    .secTop.txtCenter
      h3.secTitle CUSTOMER REVIEWS
      .totalRev.flexBox.flexJcc.flexAic
        img(src='https://res.cloudinary.com/ironabode/image/upload/v1663031624/stars_lh28ui.svg' alt='')
        span 5 REVIEWS
    .revFltr.flexBox.flexAic
      //- p Sort:
      //- div
      //-   select.cSelect
      //-     option(selected='' hidden='') Select
      //-     option(value='') Low to High
      //-     option(value='') High to Low
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
</template>