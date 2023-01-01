import { v4 as uuidv4 } from 'uuid'

export default defineNuxtPlugin(nuxtApp => {
  return {
    provide: {
      uuid: uuidv4
    }
  }
})
