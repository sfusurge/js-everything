const arr = [1, 2, 3, 4, 5]

const [first, second, ...rest] = arr

console.log(`first=${first}, second=${second}, rest:`, rest)

// also in functions
const foo = (a, b, ...rest) => {
  console.log(`function example: a=${a}, b=${b}, rest=`, rest)
}

foo(1, 2, 3, 4, 5)
foo(1, 2)

// also in objects

const obj = {
  a: 1,
  b: 2,
  c: 3,
  d: 4,
  e: 5
}

const { a: alpha, ...others } = obj
console.log(`obj example: alpha=${alpha}, rest=`, others)

// advanced usage examples
// array push:
let arr2 = [arr, 6, 7]
let arr3 = [...arr, 6, 7]

console.log(`array push example w/o spread:`, arr2)
console.log(`array push example w/ spread:`, arr3)


// obj append
let obj2 = {
  f: 6,
  g: 7,
  obj
}
let obj3 = {
  f: 6,
  g: 7,
  ...obj
}

console.log(`obj append example w/o spread:`, obj2)
console.log(`obj append example w/ spread:`, obj3)