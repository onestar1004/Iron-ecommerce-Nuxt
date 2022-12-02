<template lang="pug">
.pageWrapper
  section.pageHead
    .container
      .secTop
        h3.pageTitle.txtCenter Forgot Password
  section.signInBox
    .container
      .sIBoxInner
        .sIForm
          form(@submit.prevent="sendResetLink()")
            label Email Address
              input(type="email" v-model="email")
            button.primaryBTN Send Reset Link
  Footer
</template>

<script setup>
let email = $ref(null);

async function sendResetLink() {
  let sendResponse = await fetchPost('/api/send-reset-link', {email});

  if(!sendResponse.error) {
    Swal.fire({
      icon: 'success',
      text: `An email was sent to ${email} with instructions on resetting your password`
    })
  } else {
    Swal.fire({
      icon: 'error',
      text: sendResponse.error
    })
  }
}
</script>