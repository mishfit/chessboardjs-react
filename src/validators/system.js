export function isString (s) {
  return typeof s === 'string'
}

export function isFunction (f) {
  return typeof f === 'function'
}

export function isInteger (n) {
  return typeof n === 'number' &&
         isFinite(n) &&
         Math.floor(n) === n
}

