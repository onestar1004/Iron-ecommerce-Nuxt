<template lang="pug">
Header
.hero.flexBox.flexAic
  div(style="padding: 10px;")
    h1.title.fontCormorant Warranty
    p.info.fontCormorant
      | Your shelving unit is only as good as your brackets. Lucky for you, each of our products are handcrafted 
      | out of high-quality, American steel in our workshop located in Idaho. Therefore we stand behind the quality of our products. That’s why we offer a 2 Year Warranty on all of our Brackets.
.artbanner
.formWrapper.fontAvenir
  .titleWrapper
    h2.title Register Your Brackets
  form(@submit.prevent="onSubmit")
    .cols12
      .col1.space-y-4
        .title Customer Information
        p.info(style="margin-top: 8px;") This is only applicable to the original owner and original delivery address.

        .fullName
          .inputBox.fName
            label.fLabel(for='warranty-form-firstName') First Name
            input.fInput(v-model="values.firstName" id="warranty-form-firstName" name="firstName" placeholder="Type your first name here" type='text')

          .inputBox.lName
            label.fLabel(for='warranty-form-lastName') Last Name
            input.fInput(v-model="values.lastName" id="lastName" name="lastName" placeholder="Type your last name here" type='text')

        .inputBox
          label.fLabel(for='warranty-form-email') Email
          input.fInput(v-model="values.email" id="warranty-form-email" name="email" placeholder="john.doe@example.net" type='email')

        .inputBox
          label.fLabel(for='warranty-form-businessName') Business Name
          input.fInput(v-model="values.businessName" id="warranty-form-businessName" name="businessName" placeholder="Type your answer here" type='text')

        .inputBox
          label.fLabel(for='warranty-form-phone') Phone
          input.fInput(v-model="values.phone" id="warranty-form-phone" name="phone" placeholder="Type your answer here" type='text')

        .inputBox
          label.fLabel(for='warranty-form-detailedAddress') Detailed Address
          input.fInput(v-model="values.detailedAddress" id="warranty-form-detailedAddress" name="detailedAddress" placeholder="Country, State/Province, Postal/ZIP Code, Street Address" type='text')

      .col2.space-y-4
        .title Purchase Information
        p.info(style="margin-top: 8px;") Your brackets will be warranted for a period of 2 years from the original date of purchase.

        .inputBox
          label.fLabel(for='warranty-form-dateOfPurchase') Date of Purchase
          input.fInput(v-model="values.dateOfPurchase" id="warranty-form-dateOfPurchase" name="dateOfPurchase" placeholder="Type your answer here" type='text')

        .inputBox
          label.fLabel(for='warranty-form-orderNumber') Order Number
          input.fInput(v-model="values.orderNumber" id="warranty-form-orderNumber" name="orderNumber" placeholder="Type your answer here" type='text')

        .title(style="margin-top: 36px;") Terms and Conditions
        p.info(style="margin-top: 8px;") This warranty covers manufacturing defects. Proof of purchase is required. This is only applicable to the original owner and original delivery address. This warranty does not cover loss, damage, breakage, or changes in appearance due to normal wear, mishap, careless handling, or improper installation outside of what we recommend in our installation instructions.
          | Please see full policies here.

        div
          label.csCheckBox
            input(v-model="values.checkUnderstandPolicies" type='checkbox')
            span(style="margin-left: 10px") Yes, I have read and understand the policies.

        div
          button.coStBtn.btn.btnBg.btnGry.btnTxtWht(type="submit" style="padding: 8.2px; height: 48px;") Submit

WhatMakesUnique(style="margin-top: 128px;")
Footer
</template>

<script setup>
import { useForm } from 'vee-validate'
import * as yup from 'yup'

const breadcrums = ref([
  { url: '', label: 'Home' },
  { url: '', label: 'Your Account' },
  { url: '', label: 'Orders' },
  { url: '', label: 'Warranty' }
])

const defaultValues = () => {
  return {
    firstName: '',
    lastName: '',
    email: '',
    businessName: '',
    phone: '',
    detailedAddress: '',
    dateOfPurchase: '',
    orderNumber: '',
    checkUnderstandPolicies: false
  }
}

const { values } = useForm({
  validationSchema: {
    firstName: yup.string().required(),
    lastName: yup.string().required(),
    email: yup.string().required().email(),
    businessName: yup.string().required(),
    phone: yup.string().required(),
    detailedAddress: yup.string().required(),
    dateOfPurchase: yup.string().required(),
    orderNumber: yup.string().required(),
    checkUnderstandPolicies: yup.string().required()
  },
  initialValues: { ...defaultValues() }
})


const onSubmit = function () {
  console.log('onSubmit::form', values)
}

</script>

<style lang="scss" scoped>
.hero {
  justify-content: center;
  height: auto;
  padding: 60px 0;
  background-color: #E8E5DA;

  .title {
    font-weight: 400;
    text-align: center;
  }

  .info {
    margin-top: 24px;
    width: 100%;
    max-width: 640px;
    text-align: center;
  }
}
.artbanner {
  height: 300px;
  background-image: url(https://res.cloudinary.com/ironabode/image/upload/v1673931127/Wall-white_oak-wood-bar-shelving-kitchen_tamq1p.png);
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}

.formWrapper {
  display: block;
  margin: auto;
  width: 100%;
  max-width: 1024px;
  margin-top: 128px;

  form {
    padding: 32px 25px;

    input.inputBox {
      width: 100%;
    }

    @media (max-width: 600px) {
      input {
        width: auto;
      }
    }


    @media (min-width: 600px) and (max-width: 960px) {
      input {
        width: 90%;
      }
    }

    .fullName {
      display: grid;
      grid-template-columns: repeat(12, minmax(0, 1fr));
      column-gap: 1.5rem; 

      .fName {
        grid-column: span 6 / span 6;
      }

      .lName {
        grid-column: span 6 / span 6;
      }

      @media (max-width: 600px) {
        .fName {
          grid-column: span 12 / span 12;
        }

        .lName {
          grid-column: span 12 / span 12;
        }
      }


      @media (min-width: 600px) and (max-width: 960px) {
        .fName {
          grid-column: span 12 / span 12;
        }

        .lName {
          grid-column: span 12 / span 12;
        }
      }
    }

    .title {
      font-weight: 500;
      font-size: 16px;
      text-transform: uppercase;
    }

    .info {
      font-size: 12px;
    }

    .cols12 {
      display: grid;
      grid-template-columns: repeat(12, minmax(0, 1fr));
      column-gap: 4.2rem; 

      .col1 {
        grid-column: span 6 / span 6;
      }

      .col2 {
        grid-column: span 6 / span 6;
      }

      @media (max-width: 600px) {
        .col1 {
          grid-column: span 12 / span 12;
        }

        .col2 {
          grid-column: span 12 / span 12;
        }
      }


      @media (min-width: 600px) and (max-width: 960px) {
        .col1 {
          grid-column: span 12 / span 12;
        }

        .col2 {
          grid-column: span 12 / span 12;
        }
      }
    }
  }

  .titleWrapper {
    border-bottom: 0.2px solid #707070;
    height: 48px;
    width: 100%;
    text-align: center;

    .title {
      font-weight: 400;
      text-transform: uppercase;
    }
  }
}
</style>