<template lang="pug">
.returnPage.wrapper
  Header

  .returnContainer
    h1.heading Return / Exchange Form

    form(@submit.prevent="sendReturn()")
      .formHeading Start a Return / Exchange
      label.noMargin Why are you returning this item?
      .radioList
        label.noMargin #[input(type="radio" v-model="data.Reason" value="It doesn't work with my space")] It doesn't work with my space
        label.noMargin #[input(type="radio" v-model="data.Reason" value="It was damaged")] It was damaged
        label.noMargin #[input(type="radio" v-model="data.Reason" value="Does not meet expectations")] Does not meet expectations

      .clear(style="height: 15px;")
        
      label.noMargin How can we fix it?
      .radioList
        label.noMargin #[input(type="radio" v-model="data.Resolution" value="Refund Item")] Refund Item
        label.noMargin #[input(type="radio" v-model="data.Resolution" value="Exchange Item")] Exchange Item

      .clear(style="height: 15px;")

      slot(v-if="data.Reason == 'It was damaged'")
        label Please describe the damage.
          textarea(v-model="data['Damage Description']")

        label Attach photo showing the damage
          .image: img(:src="getImage({image: data.damageImage, height: 150, type: 'c_fill'})" v-if="data.damageImage")
          .clear(style="height: 5px;")
          a.primaryBTN.small(@click="uploadImage('damageImage')") #[i.fal.fa-upload] {{data.damageImage ? 'Change' : 'Choose'}} file

      slot(v-if="data.Reason == 'Does not meet expectations'")
        label Please describe how the product does not meet expectations
          textarea(v-model="data['Did not meet expectations']")

      label Where did you place your order?
        select(v-model="data['Order Placed']")
          option(value="IronAbode.com") IronAbode.com
          option(value="Amazon") Amazon

      slot(v-if="data['Order Placed'] == 'IronAbode.com'")
        label.noMargin Please Select the products you are returning

        .orderReturns
          label.item(v-for="item in items")
            .checkbox
              input(type="checkbox" v-model="data.selectedProducts" :value="item")
            .image: img.imgRes(:src="getImage({image: item.image, width: 250, height: 250, type: 'c_fill'})")
            .options
              .title #[b {{item.title}}]
              .option(v-for="option in item.options")
                .label #[b {{option.label}}:]
                .selection {{option.selection.label}} #[span.price(v-if="option.selection.price") {{currency(option.selection.price)}}]

      slot(v-if="data['Order Placed'] == 'Amazon'")
        label Amazon Order #
          input(type="text" v-model="data['Amazon Order #']")

      .clear(style="height: 15px;")

      button.primaryBTN(v-if="!is('sending')") Send Return Request
      a.primaryBTN(v-if="is('sending')") #[i.fal.fa-spin.fa-spinner]
      //- pre {{data}}
  Footer
</template>

<script setup>
let data = $ref({
  selectedProducts: []
});

let orders = $ref([]);
let items = $ref([]);
startLoad('grabbingOrders');
orders = await fetchPost('/api/grab-user-orders');
for(let order of orders) {
  for(let item of order.cart.cart) {
    item.order_id = order.order_id;
    items.push(item);
  }
}
endLoad('grabbingOrders');

async function sendReturn() {
  startLoad('sending');
  let emailParameters = {
    subject: 'Return Request From Iron Abode'
  }
  let submissionResponse = await fetchPost('/api/send-form', {emailParameters, formData: data});
  endLoad('sending');

  Swal.fire({
    icon: 'success',
    title: 'Return Request Submitted',
    text: 'Your return request was sent, we will be in touch shortly',
  })
}

async function uploadImage(model) {
  let cloudUpload = cloudinary.createUploadWidget({
    cloudName: 'ironabode', 
    uploadPreset: 'image_upload',
    sources: ['local'],
    multiple: false,
    resource_type: 'image',
  }, (error, result) => { 
    if (!error && result && result.event === "success") {
      data[model] = result.info.secure_url;
    }
  })
  cloudUpload.open();
}
</script>