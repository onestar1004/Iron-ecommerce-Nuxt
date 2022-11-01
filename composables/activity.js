/**
 * Current page activity
 */
import { useReviews } from '@/store/reviews'

export const useActivity = () => {
  // Compute product review by page name
  const productReviews = computed(() => {
    return useReviews().reviews['monty-shelving-unit'] || []
  })

  // Expose the data
  return {
    productReviews
  }
}
