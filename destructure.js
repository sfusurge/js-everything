const obj = {
  a: 1,
  b: 2,
  c: 3,
  d: 4
}

console.log(obj)
console.log(obj.a)
// console.log(a) //error does not exist

let { a, b } = obj

console.log(a)
console.log(b)

let { a: alpha } = obj

console.log(alpha)


const arr = [
  1, 2, 3, 4
]




const foo = ({ b: beta = 10 }) => {
  console.log(beta)
}

foo(obj)
foo({})
foo(undefined)