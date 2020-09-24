const foo = (obj) => {
  return obj.a.b
}

// let none = foo()
// console.log(`no peram: ${none}`) //error, cannot read a of undefined (obj)

// let empty = foo({})
// console.log(`empty obj: ${empty}`) //error, cannot read b of undefined (a)

let works = foo({
  a: {
    b: 10
  }
})
console.log(`valid obj: ${works}`)

const bar = (obj) => {
  return obj?.a?.b
  //        ^^ optional chain
  // doesn't crash
}

let none = bar()
console.log(`no peram: ${none}`)

let empty = bar({})
console.log(`empty obj: ${empty}`)

let valid = bar({
  a: {
    b: 10
  }
})
console.log(`valid obj: ${valid}`)


// old:
const old = (obj) => {
  if (obj && obj.propone && obj.propone.proptwo) {
    // do stuff with obj.propone.proptwo
  }
}

// new:
const neww = (obj) => {
  if (obj?.propone?.proptwo) {
    // do stuff with obj.propone.proptwo
  }
}