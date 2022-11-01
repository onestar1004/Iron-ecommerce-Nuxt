import { defineStore } from 'pinia'

import { reviews } from './actions/demo'
import clean from './actions/clean'

const defaultStates = () => {
  return {
    reviews: {
      'monty-shelving-unit': reviews
    }
  }
}

export const useReviews = defineStore('reviews', {
  state: () => {
    return {
      ...defaultStates()
    }
  },
  getters: {
    getActiveCourt () {
      return this.court
    }
  },
  actions: {
    clean
  }
})
