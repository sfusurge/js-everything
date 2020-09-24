const undef = undefined
const zero = 0
const one = 1

console.log(`undef && one: ${undef && one}`)
console.log(`undef || one: ${undef || one}`)
console.log(`zero && one: ${zero && one}`)
console.log(`zero || one: ${zero || one}`)

console.log(`zero || one: ${zero || one}`)
console.log(`zero ?? one: ${zero ?? one}`)
console.log(`undef ?? one: ${undef ?? one}`)



function c_and(a, b) {
  if (a) {
    if (b) {
      return true
    }
    return false
  }
  return false
}

function and(a, b) {
  if (a) {
    return b
  } else {
    return a
  }
}

function or(a, b) {
  if (a) {
    return a
  } else {
    return b
  }
}

function nullish(a, b) {
  if (a === undefined || a === null) {
    return b
  } else {
    return a
  }
}