export default function () {
  const states = this.defaultStates()
  Object.keys(states).forEach(key => {
    this[key] = states[key]
  })
}
