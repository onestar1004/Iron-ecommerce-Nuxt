export const viewportWidth = () => {
  try {
    return window.innerWidth;
  } catch(error) {
    return 0;
  }
}