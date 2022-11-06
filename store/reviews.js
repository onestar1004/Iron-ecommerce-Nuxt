import { defineStore } from 'pinia'

import {
  montyShelvingUnit,
  osloShelvingUnit,
  rivieraShelvingUnit,
  fayeUnit,
  rouxUnit,
  simonUnit,
  esmeUnit,
  hugoUnit,
  leoUnit,
  felixUnit,
  finishUnit,
  fitzUnit,
  blanketLadderUnit,
  wineRackUnit
} from './actions/demo'
import clean from './actions/clean'

const defaultStates = () => {
  return {
    reviews: {
      'monty-shelving-unit': montyShelvingUnit,
      'oslo-shelving-unit': osloShelvingUnit,
      'riviera-shelving-unit': rivieraShelvingUnit,
      'faye-shelving-unit': fayeUnit,
      'roux-shelving-unit': rouxUnit,
      'simon-shelving-unit': simonUnit,
      'esme-shelving-unit': esmeUnit,
      'hugo-shelving-unit': hugoUnit,
      'leo-shelving-unit': leoUnit,
      'felix-shelving-unit': felixUnit,
      'finish-samples': finishUnit,
      'fitz-potrack-towel-holder': fitzUnit,
      'wine-rack': wineRackUnit,
      '78-round-iron-blanket-ladder': blanketLadderUnit
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
