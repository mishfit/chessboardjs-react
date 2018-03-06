import { isInteger } from './system'

export function isTouchDevice () => { return 'ontouchstart' in document.documentElement }

export function isValidAnimationSpeed (speed) {
  if (speed === 'fast' || speed === 'slow') return true
  if (!isInteger(speed)) return false
  return speed >= 0
}

export function isValidThrottleRate (rate) {
  return isInteger(rate) && rate >= 1
}
