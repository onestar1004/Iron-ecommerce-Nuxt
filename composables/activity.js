/**
 * Current page activity
 */
export const useActivity = () => {
  // Compute product review by page name
  const productReviews = computed(() => {
    return []
  })

  // Expose the data
  return {
    productReviews
  }
}
