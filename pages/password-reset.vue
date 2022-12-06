<template lang="pug">
.pageWrapper
  Header
  ReamazeButton
  section.pageHead
    .container
      .secTop
        h3.pageTitle.txtCenter Forgot Password
  section.signInBox
    .container
      .sIBoxInner
        .sIForm
          form(@submit.prevent="resetPassword()")
            label New Password
              input(type="password" v-model="password")
            label Confirm Password
              input(type="password" v-model="confirm_password")
            .error(v-if="password && confirm_password && (confirm_password != password)") #[i.fal.fa-exclamation-circle] Passwords do not match
            button.primaryBTN Reset Password
  Footer
</template>

<script setup>
let password = $ref(null);
let confirm_password = $ref(null);

async function resetPassword() {
  let sendResponse = await fetchPost('/api/reset-password', {password, token: useRoute().query.token});

  if(!sendResponse.error) {
    Swal.fire({
      icon: 'success',
      text: `Your password was reset successfully`
    })
    .then(() => {
      navigateTo('/sign-in');
    })
  } else {
    Swal.fire({
      icon: 'error',
      text: sendResponse.error
    })
  }
}
</script>