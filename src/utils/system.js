export function throttle (f, interval, scope) {
  let timeout = 0,
      shouldFire = false,
      args = []

  var handleTimeout = function () {
    timeout = 0
    if (shouldFire) {
      shouldFire = false
      fire()
    }
  }

  var fire = function () {
    timeout = window.setTimeout(handleTimeout, interval)
    f.apply(scope, args)
  }

  return function (_args) {
    args = arguments
    if (!timeout) {
      fire()
    } else {
      shouldFire = true
    }
  }
}

export function uuid () {
    return 'xxxx-xxxx-xxxx-xxxx-xxxx-xxxx-xxxx-xxxx'.replace(/x/g, function (c) {
      const r = (Math.random() * 16) | 0
      return r.toString(16)
    })
}

export function copy (source) {
  return Object.assign({}, source)
}

export function deepCopy (thing) {
  return JSON.parse(JSON.stringify(thing))
}

export function interpolateTemplate(template, data) {
 return Object.keys(data)
    .map(key => { return { value: data[key], token: `{${key}}` } })
    .reduce((accumulator, tokenValuePair, i, all) => {
      return accumulator.split(tokenValuePair.token)
        .join(tokenValuePair.value)
    }, template)
}


