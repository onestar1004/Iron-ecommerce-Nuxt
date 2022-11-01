import { defineStore } from 'pinia'

import {
  montyShelvingUnit,
  osloShelvingUnit,
  rivieraShelvingUnit
} from './actions/demo'
import clean from './actions/clean'

const defaultStates = () => {
  return {
    reviews: {
      'monty-shelving-unit': montyShelvingUnit,
      'oslo-shelving-unit': osloShelvingUnit,
      'riviera-shelving-unit': rivieraShelvingUnit
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
