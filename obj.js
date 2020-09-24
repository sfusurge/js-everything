const obj = {
  "a": 1,
  b: 2,
  4: 3
}

console.log(`obj.a: ${obj.a}`)
console.log(`obj["a"]: ${obj["a"]}`)

console.log(`obj.b: ${obj.b}`)
console.log(`obj["b"]: ${obj["b"]}`)

console.log(`obj[4]: ${obj[4]}`)
console.log(`obj["4"]: ${obj["4"]}`)

const arr = []

console.log(`typeof (obj): ${typeof (obj)}`)
console.log(`typeof (arr): ${typeof (arr)}`)

// console.log(obj.4) // syntax error, missplaced number
// console.log(obj[b]) // b is not defined

obj.d = 4
obj[6] = 5
obj["6"] = 5
console.log("object w/ new items", obj)
delete obj.d
delete obj.a
console.log("object w/ deleted items", obj)