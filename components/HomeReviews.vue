<template lang="pug">
section.slideSec
  .container
    .slideBox.reviewGlide
      .glide__track(data-glide-el="track")
        .glide__slides
          .sSlide.zoomIn.slide.glide__slide
            .slideCard
              .slideImg
                img(src='https://res.cloudinary.com/ironabode/image/upload/v1663031620/slide-1_qirws5.png' alt='')
              .slideInfo
                h4.fontSerif SIX STARS!
                p.slidePara.fontSerif We are so thrilled with the shelf brackets! Communication was excellent &amp; the product quality was superb. The brackets arrived on time and packed well. Six stars!
                p.fontSerif Joy S.
                p Atlanta, Georgia
                .starBox
                  img(src='https://res.cloudinary.com/ironabode/image/upload/v1663031624/stars-gary_rzknxx.svg' alt='')
                a.btn.btnBg.btnWhiteBB(href='#') SHOP RIVIERA UNIT
          .sSlide.zoomIn
            .slideCard.scRev
              .slideInfo
                h4.fontSerif VERY STURDY AND EASY TO INSTALL
                p.slidePara.fontSerif These brackets are very sturdy and easy to install. They look so good! It was a little hard to tell the exact color I was getting from the picture, so the aged bronze was a bit more gold than I expected, but I liked the shade a lot.
                p.fontSerif Alexandra Lippert
                .starBox
                  img(src='https://res.cloudinary.com/ironabode/image/upload/v1663031624/stars-gary_rzknxx.svg' alt='')
                a.btn.btnBg.btnWhiteBB(href='#') SHOP MONTY BRACKETS
              .slideImg
                img(src='https://res.cloudinary.com/ironabode/image/upload/v1663031620/slide-2_ckpohw.png' alt='')
          .sSlide.zoomIn
            .slideCard
              .slideImg
                img(src='https://res.cloudinary.com/ironabode/image/upload/v1663031620/slide-3_l8jq4b.png' alt='')
              .slideInfo
                h4.fontSerif BETTER THAN I IMAGINED!
                p.slidePara.fontSerif Looks awesome; better than I imagined! It came wrapped really well. I added Rubbermaid 9.75in shelves from Home Depot &amp; it all fits together wonderfully. It adds the perfect touch of class to my bar area without the expense of custom shelves.
                p.fontSerif Diane Weintraub
                .starBox
                  img(src='https://res.cloudinary.com/ironabode/image/upload/v1663031624/stars-gary_rzknxx.svg' alt='')
                a.btn.btnBg.btnWhiteBB(href='#') SHOP OSLO BRACKETS
      a.slideArrow.prevSlide(@click="glideMain.go('<')")
        img(src='https://res.cloudinary.com/ironabode/image/upload/v1663031620/slide-arrow-left_dxgaoe.svg' alt='')
      a.slideArrow.nextSlide(@click="glideMain.go('>')")
        img(src='https://res.cloudinary.com/ironabode/image/upload/v1663031620/slide-arrow-right_clnqgg.svg' alt='')
</template>

<script setup>
  let glideMain = $ref(null);
  onMounted(() => {
    setTimeout(() => {
      glideMain = new Glide('.reviewGlide').mount();
    }, 1);
  })
</script>