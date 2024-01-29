export function clamp(number: number, firstBound: number, secondBound: number) {
  const min = Math.min(firstBound, secondBound)
  const max = Math.max(firstBound, secondBound)
  return Math.min(Math.max(number, min), max)
}

export function setProperty(property: string, value: string) {
  document.documentElement.style.setProperty(property, value)
}

export function removeProperty(property: string) {
  document.documentElement.style.removeProperty(property)
}
