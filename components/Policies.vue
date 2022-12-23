<template lang="pug">
.policyPage.wrapper
section.pageHead 
  .container
    .secTop.txtCenter
      h3.pageTitle IRON ABODE POLICIES
      p.pageTtlInfo.fontSerif Our main priority is your happiness. If any issues or questions arise we have these transparent policies in place to help you ASAP.
section.policySec.cmnSec
  .container
    .polGrid.cmnPgGrid
      .polSdNav.cmnSdNav
        ul.noList
          li
            a(href='#pShipping') FAST & FREE SHIPPING 
          li
            a(href='#pProtection') FREE SHIPPING PROTECTION
          li
            a(href='#pWarranty') 2 YEAR WARRANTY
          li
            a(href='#pTime') PRODUCTION TIME
          li
            a(href='#pExchanges') FREE EXCHANGES
          li
            a(href='#pReturn') RETURN POLICY
      .polMain
        #pShipping
          .polInfo
            .imgBox
              img.imgRes(src='https://res.cloudinary.com/ironabode/image/upload/v1663031616/policy-1_x6epch.png' alt='')
            .infoBox.txtCenter
              h5 FAST & FREE SHIPPING
              p.fontSerif We don't believe in hidden shipping costs. That's why all orders to the Contiguous U.S ship free. Click the tabs below to learn more before placing your order.
          .polAccBox.cmnAccBox
            .polAcc.cmnAccdn
              .accHead(@click="selectItem('Stan1')" :class="{'active': activeItem == 'Stan1'}") STANDARD SHIPPING
              .accList(v-if="activeItem == 'Stan1'")
                .cmnAccLst
                  p.fontSerif * Shipping fees are non-&shy;refundable
                  p.fontSerif * Shipping hours are: Monday-Friday, 12pm-3pm MST
                  p.fontSerif * Our Floating Rod Brackets are shipped through USPS Priority Mail which takes 2-3 days, depending on your distance from Idaho (domestic orders).
                  p.fontSerif * All other orders ship via FedEx Home Delivery, UPS Ground, or USPS Ground from Idaho, which takes another 2-7 days, depending on your distance from Idaho.
                  p.fontSerif * If for some reason, one of these carriers do not work for you- you must notify us within 24 hours of placing your order (additional charges may apply).
                  p.fontSerif * If you need something by a particular day you must contact us within 24 hours of placing your order or include this in the notes of your order. Additional costs will be required to ensure you receive it by that day.
                  p.fontSerif * We primarily use UPS, USPS, and sometimes FedEx to ship our orders. You must contact IRON ABODE for any special shipping requests (signature request, proof of delivery, preferred carrier) before placing your order.
                  p.fontSerif * We will only send our small items (Floating Rod Brackets & Wall Hooks) to a P.O Box. If you need other items sent to your P.O Box, additional costs will be required - please contact us before placing your order.
                  p.fontSerif * The shipping rate is calculated by weight of the product and the delivery address. * You will be sent a tracking number when your shipping label prints, please allow at least 12 hours for tracking information to be updated.
                  p.fontSerif If you would like to return your order - do not refuse the package. The carrier will charge top dollar for return shipping if you refuse the package. The buyer will always be responsible for shipping costs. Instead, go to this link to request a discounted return shipping label and start your return: Click here to request.
            .polAcc.cmnAccdn
              .accHead(@click="selectItem('Stan2')" :class="{'active': activeItem == 'Stan2'}") EXPEDITED SHIPPING
              .accList(v-if="activeItem == 'Stan2'")
                .cmnAccLst
                  p.fontSerif * If you are interested in paying more for expedited shipping, please let us know within 24 hours of placing your order.
                  p.fontSerif *expedited shipping (2 day shipping) costs start at $70+ for bracket orders and $120+ for complete orders.
                  p.fontSerif *In order to get an expedited shipping quote, we will need to know the destination zip code and/or your order number.
            .polAcc.cmnAccdn
              .accHead(@click="selectItem('Stan3')" :class="{'active': activeItem == 'Stan3'}") SHIPPING ISSUES
              .accList(v-if="activeItem == 'Stan3'")
                .cmnAccLst
                  p.fontSerif * You will be sent a tracking number when your shipping label prints, please allow at least 12 hours for tracking information to be updated.
                  p.fontSerif * Once your order leaves IRON ABODE, it is out of our control. For questions and concerns about shipping, please contact the carrier.
                  p.fontSerif * If you notice the box your order arrives in looks damaged upon your arrival- take pictures of it immediately (within 48 hours of receipt). Failure to do this will make it so you're unable to submit a claim, if needed, with the carrier to get your money back.
                  p.fontSerif * Iron Abode will not be responsible if the carrier makes mistakes. However, we can and will help you with things that are in our control.
                  p.fontSerif * In case of damage we will work with you to resolve the issue to your satisfaction with expert product repair, parts replacement or an exchange. However, you must be able to provide proof of damage to the box and items with pictures within 72 hours of receipt.
                  p.fontSerif
                    a(href='#') CLICK HERE IF THERE WAS A PROBLEM WITH YOUR ORDER 
                  p.fontSerif * IRON ABODE will not be responsible for any items lost or stolen during shipping.
                  p.fontSerif * Note: If you are unsure whether or not your package is safe on your door step please require a signature (additional carrier fees may apply)- you must contact IRON ABODE before placing your order if you want to add this option.
            .polAcc.cmnAccdn
              .accHead(@click="selectItem('Stan4')" :class="{'active': activeItem == 'Stan4'}") INTERNATIONAL SHIPPING
              .accList(v-if="activeItem == 'Stan4'")
                .cmnAccLst
                  p.fontSerif * International Taxes/ Fees 
                    p.fontSerif * We are not responsible for international taxes or fees as they vary with every country.
                  p.fontSerif * Shipping Cost 
                    p.fontSerif * In order to get a shipping estimate, please contact us with the desired product, dimensions. and destination postal code.
                  p.fontSerif * Products that are not available Internationally 
                    p.fontSerif * Units with Glass Shelves 
                    p.fontSerif * Units over 54in Overall Height, 3 shelves, or 40in Shelf Length 
                    p.fontSerif * Brackets over 54in Overall Height
                  p.fontSerif * Please note: We can only send a maximum of 3 sets of our 1/2in brackets or 2 sets for our 1in brackets due to International shipping restraints.
                  p.fontSerif * If you would like to return your order- do not refuse the package. The carrier will charge top dollar for return shipping if you refuse the package. The buyer will always be responsible for shipping costs. Instead, go to this link to request a discounted return shipping label and start your return: Click here to request.
        #pProtection
          .polInfo
            .imgBox
              img.imgRes(src='https://res.cloudinary.com/ironabode/image/upload/v1663031616/policy-2_tqzjmy.png' alt='')
            .infoBox.txtCenter
              h5 FREE SHIPPING PROTECTION
              p.fontSerif
                | Each of our products are thoughtfully fabricated and packaged. We know exactly how to package our products to ensure they get to you safely. However, in the extremely rare occurence that your package arrives damaged or gets lost in transit, we will send you a replacement for whatever was damaged or lost for free. Click on the tabs below to learn about the process and exclusions.
          .polAccBox.cmnAccBox
            .polAcc.cmnAccdn
              .accHead(@click="selectItem('Stan5')" :class="{'active': activeItem == 'Stan5'}") FREE SHIPPING PROTECTION
              .accList(v-if="activeItem == 'Stan5'")
                .cmnAccLst
                  p.fontSerif Your product was handcrafted just for you by our skilled artisans. Therefore we're the last people who want to see our products arrive to your door damaged! For that reason, we take extra time to carefully package up our products. However, in the rare occasion that your package arrives in poor condition, all we ask is that you take clear pictures of the damage so we can help you ASAP.
                  h5 PROCEDURE FOR DAMAGED ITEMS:
                  p.fontSerif 1. Take pictures of everything that was damaged. If more than one thing was damaged, send us pictures of each individual product. *Note: One of our design consultants may ask for more pictures in order to resolve this, if the first pictures were not clear enough.
                  p.fontSerif 2. If your glass shelves arrive broken, we can either resend new shelves (1 & 1/2 weeks to receive) or one of our design consultants will call glass shops local to you (within 15 minutes) to replace them. However, you will need to pick them up.
                  p.fontSerif 3. If your brackets arrive damaged, we will rush production on new brackets and expedite shipping (3-6 days to receive).
                  p.fontSerif 4. If your wood shelves arrive damaged, we will rush production on new shelves and expedite shipping (6-8 days to receive).
                  h5 EXCLUSIONS:
                  p.fontSerif * We will not be able to replace the damaged products until we receive clear pictures of the box and damaged items.
                  p.fontSerif * If your package was extremely mishandled during transit, IRON ABODE is not to blame. We are on your side and will do everything we can to help and ensure we remake your products ASAP (if the above criteria is met). We will not give you a full refund due to the carrier's mistake.
                  p.fontSerif * We do not cover stolen packages. If you are worried that your package may get stolen, you must request a signature before checkout. Email us at hello@ironabode.com to request this.
                  p.fontSerif * We do not cover products or fees that accumulate if a package stays in customs and the customer does not pick it up. The customer will be responsible for any fees that result from this.
            .polAcc.cmnAccdn
              .accHead(@click="selectItem('Stan6')" :class="{'active': activeItem == 'Stan6'}") LOST PACKAGES
              .accList(v-if="activeItem == 'Stan6'")
                .cmnAccLst
                  p.fontSerif It's extremely rare that a package will get lost or delayed in transit. However, if this happens to your package - we'll immediately call the carrier for you and find out what's causing this delay.
                  h5 PROCEDURE FOR LOST ITEMS:
                  p.fontSerif 1. If your package has been delayed for more than 2 business days - we always suggest that the recipient of the package call the carrier first - in case something is wrong with the given address.
                  p.fontSerif 2. After the recipient calls the carrier, and if the package has been delayed for 4 business days (past the original delivery date from the carrier), one of our design consultants will call the carrier as well.
                  p.fontSerif 3. If the package has been declared as lost by the carrier - for more than 5 business days, we will remake your order.
                  h5 EXCLUSIONS:
                  p.fontSerif If your package is lost, the carrier is the only one to blame. Therefore IRON ABODE will not be held accountable for missed deadlines, etc. that result from your package being delayed. Overall IRON ABODE will not give refunds for packages lost in transit.
                  p.fontSerif We do not cover stolen packages. If you are worried that your package may get stolen, you must request a signature before checkout. Email us at hello@ironabode.com to request this. We do not cover products or fees that accumulate if a package stays in customs and the customer does not pick it up. The customer will be responsible for any fees that result from this.
        #pWarranty
          .polInfo
            .imgBox
              img.imgRes(src='https://res.cloudinary.com/ironabode/image/upload/v1663031617/policy-3_z2rlxx.png' alt='')
            .infoBox.txtCenter
              h5 2 YEAR WARRANTY
              p.fontSerif
                | Your shelving unit is only as good as your brackets. Lucky for you, each of our products are handcrafted out of high-quality, American steel in our workshop located in Idaho. Therefore we stand behind the quality of our products. That's why we offer a 2 Year Warranty on all of our Brackets. Click the tabs below to learn more.
          .polAccBox.cmnAccBox
            .polAcc.cmnAccdn
              .accHead(@click="selectItem('Stan66')" :class="{'active': activeItem == 'Stan66'}") 2 YEAR WARRANTY
              .accList(v-if="activeItem == 'Stan66'")
                .cmnAccLst
                  p.fontSerif With each order we include this warranty card that explains the extent to what our warranty covers, regarding your brackets purchased here on our website:
                  div
                    img(src='' alt='')
            .polAcc.cmnAccdn
              .accHead(@click="selectItem('Stan7')" :class="{'active': activeItem == 'Stan7'}") FAQS
              .accList(v-if="activeItem == 'Stan7'")
                .cmnAccLst
                  h5 WHAT DOES YOUR WARRANTY COVER?
                  p.fontSerif This warranty covers manufacturing defects. Proof of purchase is required. This is only applicable to the original owner and original delivery address. This warranty does not cover loss, damage, breakage, or changes in appearance due to normal wear, mishap, careless handling, or improper installation outside of what we recommend in our installation instructions. Please register your brackets here to enact the 2 year warranty.
                  h5 HOW LONG IS THIS WARRANTY?
                  p.fontSerif Your brackets will be warranted for a period of 2 years from the original date of purchase.
        #pTime
          .polInfo
            .imgBox
              img.imgRes(src='https://res.cloudinary.com/ironabode/image/upload/v1663031617/policy-4_ii5lcn.png' alt='')
            .infoBox.txtCenter
              h5 PRODUCTION TIME
              p.fontSerif
                | Customizable shelving and decor that doesn't require months of waiting. Our streamlined Production Process allows each of our standard units to be customized for your space, and delivered to your doorstep in a matter of weeks.
          .polAccBox.cmnAccBox
            .polAcc.cmnAccdn
              .accHead(@click="selectItem('Stan8')" :class="{'active': activeItem == 'Stan8'}") FAST TURNAROUND TIME
              .accList(v-if="activeItem == 'Stan8'")
                .cmnAccLst
                  h5 STANDARD PRODUCTION TIMES:
                  p.fontSerif Floating Rod Brackets- handcrafted in 2-3 days. 
                    p.fontSerif Brackets- handcrafted in 4-6 days. For orders of 5+ brackets, the production time is 8-10 days. 
                    p.fontSerif Complete Units- handcrafted in 3-4 weeks. For orders of 3+ units, the production time is 4-5 weeks.
                  p.fontSerif For orders placed after 11 am, the 1st production day will start the next day. Production days are counted only Monday-Friday (excluding national holidays).
                  p.fontSerif If you need something by a particular day you must contact us within 24 hours of placing you order or include this in the notes of your order. Additional costs will be required to ensure you receive it by that day.
                  h5 STANDARD FREE SHIPPING- TRANSIT TIMES (DOMESTIC ORDERS):
                  p.fontSerif Our Floating Rod Brackets are shipped through USPS Priority Mail which takes 2-3 days, depending on your distance from Idaho (domestic orders). All other orders ship via FedEx Home Delivery, UPS Ground, or USPS Ground from Idaho, which takes another 2-7 days, depending on your distance from Idaho.
                  p.fontSerif Shipping hours are: Monday-Friday, 12pm-3pm MST
                  p.fontSerif If for some reason, one of these carriers do not work for you- you must notify us before placing your order (additional charges may apply).
            .polAcc.cmnAccdn
              .accHead(@click="selectItem('Stan88')" :class="{'active': activeItem == 'Stan88'}") LOST PACKAGES
              .accList(v-if="activeItem == 'Stan88'")
                .cmnAccLst
                  p.fontSerif * How long will it take to make my order? 
                    p Complete Units (Brackets + the Shelves)- these are handcrafted, just for you, in only 3-4 weeks.* 
                    p Brackets- These are handcrafted, just for you, in only 4-6 days.*
                  p.fontSerif * How long will it take to ship my order? 
                    p It typically takes 3-7 days for domestic orders to ship.*
                  p.fontSerif *See &ldquo;Fast Turnaround Timesin tab above for more information
        #pExchanges
          .polInfo
            .imgBox
              img.imgRes(src='https://res.cloudinary.com/ironabode/image/upload/v1663031617/policy-5_kb6djk.png' alt='')
            .infoBox.txtCenter
              h5 FREE EXCHANGES
              p.fontSerif
                | While we strongly suggest you plan your projects carefully, we understand your design may slightly change. Therefore we allow free exchanges of our standard brackets. Click the tabs below to learn which products are eligible for a free exchange. Only applicable to orders placed on and after March 10th, 2022. Lucky for you, each of our products are handcrafted out of high-quality, American steel in our workshop located in Idaho. Therefore we
                | stand behind the quality of our products. That's why we offer a 2 Year Warranty on all of our Brackets. Click the tabs below to learn more.
          .polAccBox.cmnAccBox
            .polAcc.cmnAccdn
              .accHead(@click="selectItem('Stan9')" :class="{'active': activeItem == 'Stan9'}") 60 DAY FREE EXCHANGE - ON STANDARD BRACKETS
              .accList(v-if="activeItem == 'Stan9'")
                .cmnAccLst
                  p.fontSerif *Free exchanges are only for customers in the Contiguous U.S. Additional fees will apply for customers outside of the Contiguous U.S.
                  h5 PRODUCTS THAT DON'T QUALIFY FOR FREE EXCHANGES
                  p.fontSerif * Brackets that have been installed or altered will not be accepted for exchange. 
                    p.fontSerif * Custom Brackets: custom design, dimensions, mounting style- will not be accepted for exchange. 
                    p.fontSerif * Glass, Metal, or Wood Shelves
                  p.fontSerif Note: Anything that is not offered on our standard listings and requires you to leave a note to alter the product or have a custom listing made for you will not qualify for a free exchange.
                  h5 PRODUCTS THAT DO QUALIFY FOR FREE EXCHANGES
                  p.fontSerif * Standard brackets: 
                    p.fontSerif &emsp; * Overall Height: 
                    p.fontSerif &emsp;&emsp; * 8in- 1 shelf, 30in- 2 shelf, 42in- 2 shelf or 3 shelf, 54in- 3 shelf or 4 shelf, 66in- 4 shelf or 5 shelf 
                    p.fontSerif &emsp; * Shelf Depth: 
                    p.fontSerif &emsp;&emsp; *8in, 10in, 12in 
                    p.fontSerif &emsp; * Finish: 
                    p.fontSerif &emsp;&emsp; * Aged Brass, Light Brass, Nickel, Dark Bronze, Beige, White, Black 
                    p.fontSerif &emsp; * Mounting Style 
                    p.fontSerif &emsp;&emsp; * Monty Bracket Style: Only 1 type of mounting style ( Ceiling-Mount or Wall-Mount) 
                    p.fontSerif &emsp;&emsp; * Hugo, Esme, Faye, Roux: Wall- Mount 
                    p.fontSerif &emsp;&emsp; * Oslo, Riviera, Simon: Ceiling- Mount
                  h5 IF YOU WOULD LIKE TO REQUEST AN EXCHANGE, CLICK HERE.
                  p.fontSerif * In order to receive your exchange fast:
                    p.fontSerif &emsp; 1. You should fill out the request form above. 
                    p.fontSerif &emsp; 2. Once your exchange is approved, you can checkout with the new product so we can start making it right away. 
                    p.fontSerif &emsp; 3. Next, carefully package up your return (see the return tab below for more information on how to do this correctly). 
                    p.fontSerif &emsp; 4. If we receive your return within our 60-day return window: we will inspect the return and give you a full refund if it arrives in its original condition. 
                    p.fontSerif &emsp; 5. Your account will be refunded within 2-5 days of receipt of your item.
                  p.fontSerif * If you would like to exchange your order - do not refuse the package. The carrier will charge top dollar for return shipping if you refuse the package. The buyer will be responsible for these shipping costs. Instead, go to this link to request a discounted return shipping label and start your return: If you would like to Request an Exchange, click here.
            .polAcc.cmnAccdn
              .accHead(@click="selectItem('Stan10')" :class="{'active': activeItem == 'Stan10'}") 60 DAY EXCHANGE - ON EVERYTHING ELSE
              .accList(v-if="activeItem == 'Stan10'")
                .cmnAccLst
                  h5 PRODUCTS THAT DON'T QUALIFY FOR EXCHANGES
                  p.fontSerif * Brackets that have been installed or altered will not be accepted for exchange. 
                    p.fontSerif * Custom Brackets: custom design, dimensions, mounting style- will not be accepted for exchange. 
                    p.fontSerif * Glass, Metal, or Wood Shelves 
                    p.fontSerif Note: Anything that is not offered on our standard listings and requires you to leave a note to alter the product or have a custom listing made for you will not qualify for a free exchange.
                  h5 PRODUCTS THAT DO QUALIFY FOR EXCHANGES (WITH 10% PRODUCTION AND SHIPPING FEE)
                  p.fontSerif * Standard sized home decor (blanket ladders, wine glass racks, hooks)
                  h5 PRODUCTS THAT DO QUALIFY FOR EXCHANGES (WITH 15% PRODUCTION AND SHIPPING FEE)
                  p.fontSerif * Uninstalled wood shelves with a depth of 8in+
                  h5 IF YOU WOULD LIKE TO REQUEST AN EXCHANGE, CLICK HERE.
                  p.fontSerif * In order to receive your exchange fast:
                    p.fontSerif &emsp; 1. You should fill out the request form above. 
                    p.fontSerif &emsp; 2. Once your exchange is approved, you can checkout with the new product so we can start making it right away. 
                    p.fontSerif &emsp; 3. Next, carefully package up your return (see the return tab above for more information on how to do this correctly). 
                    p.fontSerif &emsp; 4. If we receive your return within our 60-day return window: we will inspect the return and give you a full refund minus the production and manufacturing fee, if it arrives in its original condition. 
                    p.fontSerif &emsp; 5. Your account will be refunded within 2-5 days of receipt of your item.
                  p.fontSerif * If you would like to exchange your order- do not refuse the package. The carrier will charge top dollar for return shipping if you refuse the package. The buyer will be responsible for these shipping costs. Instead, go to this link to request a discounted return shipping label and start your return: If you would like to Request an Exchange, click here.
        #pReturn
          .polInfo
            .imgBox
              img.imgRes(src='https://res.cloudinary.com/ironabode/image/upload/v1663031618/policy-6_zbqout.png' alt='')
            .infoBox.txtCenter
              h5 RETURNS AND CANCELLATIONS
              p.fontSerif We know that home renovations come with a lot of unexpected twists. Our Return Policy won't be one of them. We offer a best in class return policy because, not only do we offer the most customizable standard options, but we also allow most of these to be returned or exchanged. To top it all off, we allow 60 Days for you to return most items- double what competitors offer. Please click the tabs below to see which products are eligible for returns before placing your order.
          .polAccBox.cmnAccBox
            .polAcc.cmnAccdn
              .accHead(@click="selectItem('Stan11')" :class="{'active': activeItem == 'Stan11'}") 60 DAY RETURNS
              .accList(v-if="activeItem == 'Stan11'")
                .cmnAccLst
                  p
                    a.txtDcUn(href='#') If you would like to Request a Return, click here. 
                  h5 Items That Are Accepted For Return:
                  p.fontSerif * Standard Bracket returns and exchanges will be accepted, within 60 days of the delivery confirmation date. 
                    p.fontSerif *Note: We must receive the return within 60 days of delivery. 
                    p.fontSerif * Standard Wood Shelf Units 
                    p.fontSerif *Note: Returning these items will require a manufacturing and shipping fee (see below).
                  h5 Items That Are Not Accepted For Return:
                  p.fontSerif * Items that have been installed or altered will not be accepted for return or exchange. 
                    p.fontSerif * The only standard options that will not be accepted for return - due to their extremely custom nature - are Glass and Metal Shelves. 
                    p.fontSerif * Custom sized products or items that we don't offer as standard options, will also not be accepted for return.
                  h5 Manufacturing And Shipping Fee:
                  p.fontSerif * Since everything is handcrafted , we don't mass produce our products. Therefore we have a production and shipping fee to cover some of the manufacturing and shipping fees that were required to make and deliver your one-of-a-kind product to you. 
                    p.fontSerif * On all returns of our standard sized brackets, we charge a 15% manufacturing and shipping fee, except wood shelf returns - which have a 30% manufacturing and shipping fee 
                    p.fontSerif * We only allow shelf returns on wood shelf units - which again, have a 30% manufacturing and shipping fee. Returns on orders placed before March 10, 2022 will have a 25% manufacturing and shipping fee (brackets) and a 50% manufacturing and shipping fee (wood shelves). 
                    p.fontSerif * On all returns of our standard sized home decor (blanket ladders, wine glass racks, hooks), we charge a 20% manufacturing and shipping fee. 
                    p.fontSerif * The 15% manufacturing and shipping fee (brackets) and 30% manufacturing and shipping fee (wood shelves) is only applicable to returns on orders placed on or after March 10, 2022.
                  h5 How To Return:
                  p.fontSerif * Fill out a Return Request Form: If you would like to Request a Return, click here. 
                    p.fontSerif * You can request a free return label on the form above, if you return request is approved. 
                    p.fontSerif * If your return request is approved, your items should be wrapped up tightly so there's no movement in the package. If there is a little movement in the package, the items will hit together in transit, resulting in a lot of loss in value. You will be responsible for this loss in value and it will be shown in the amount refunded to you.
                  h5 How You Will Be Refunded
                  p.fontSerif * Your account will be refunded within 2-5 days of receipt of your item. 
                    p.fontSerif * The amount refunded to your account will be the original amount minus the manufacturing and shipping fee, as described above. Less will be refunded to your account if the return arrives to us in a damaged/poor condition. 
                    p.fontSerif * We do not reimburse shipping costs (we will be reimbursed for some of this cost through the manufacturing and shipping fee, as described above). 
                    p.fontSerif * Important: We will need to receive your return within 60 days of original delivery. If it arrives after 60 days, or includes custom items, your package will be rerouted back to you. 
                    p.fontSerif * If you would like to return your order - do not refuse the package. The carrier will charge top dollar for return shipping if you refuse the package. The buyer will then be responsible for these shipping costs. Instead, go to this link to request a discounted return shipping label and start your return: Click here to request.
            .polAcc.cmnAccdn
              .accHead(@click="selectItem('Stan12')" :class="{'active': activeItem == 'Stan12'}") CANCELLATIONS
              .accList(v-if="activeItem == 'Stan12'")
                .cmnAccLst
                  p.fontSerif Your order is handcrafted just for you. Therefore, we are limited in the time we can give you a 100% refund if you need to cancel or change your order.
                  h5 CANCELLATION POLICY - BRACKETS
                  p.fontSerif * You have 24 hours to cancel or change your order, unless it was rushed. 
                    p.fontSerif * If you ordered over 24 hours ago and you need to cancel your bracket order, you will be charged a 10% manufacturing fee or a 20% manufacturing fee for custom brackets. 

                  h5 CANCELLATION POLICY - COMPLETE UNITS
                  p.fontSerif * You have 72 hours to cancel or change your order, unless it was rushed. 
                    p.fontSerif *If you ordered over 72 hours ago, you will be charged a 20% manufacturing fee for a standard unit or a 30% manufacturing fee for a custom unit. 

                  h5 CANCELLATION POLICY - RUSHED BRACKETS
                  p.fontSerif * You have 12 hours to cancel or change your order. 
                    p.fontSerif.fontSerif * If you ordered over 12 hours ago, you will be charged a 10% manufacturing fee or a 20% manufacturing fee for custom brackets 
                  h5 CANCELLATION POLICY - RUSHED UNITS
                  p.fontSerif * You have 24 hours to cancel or change your order. 
                    p.fontSerif * If you ordered over 24 hours ago, you will be charged a 20% manufacturing fee for a standard unit or a 30% manufacturing fee for a custom unit. 
section.breadcrumbBox
  .container
    ul.breadcrumb.flexBox.flexJcc.flexAic.noList
      li.bcItem
        a(href='/') Home
      li.bcItem
        a(href='#') Collections
      li.bcItem
        a(href='#') Product Page
      li.bcItem.active Shipping and Return Policies



Footer


</template>

<script setup>
let activeItem = $ref(null);

function selectItem(item) {
  if(activeItem != item) {
    activeItem = item;
  } else {
    activeItem = null;
  }
}
</script>