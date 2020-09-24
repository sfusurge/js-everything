const d = 4
const e = () => 5

const obj = {
  a: 1,
  b: 2,
  c: 3,
  d, // <-- short hand for d: d
  e // <-- works for everything
}


// console.log(`object destructured a=${a}, b=${b}`) //error a, b not defined
const { a, b } = obj
console.log(`object destructured a=${a}, b=${b}`)

const { c: charlie, d: delta } = obj
console.log(`object destructured w/ renaming charlie=${charlie}, delta=${delta}`)

const { e: echo = () => "echo default", f: foxtrot = "foxtrot default" } = obj
console.log(`object destructured w/ renaming and defaulting echo=${echo()}, foxtrot=${foxtrot}`)

// usefull in function calls, ex:
// other properties ignored
const foo = ({ x: xPos = 0, y: yPos = 0, z: zPos = 0 }) => {
  console.log(`function example x=${xPos} y=${yPos} z=${zPos}`)
}

foo({
  x: 1,
  a: 10 //<-- ignored
})

// problem? missing input....
// foo() // error, can't read prop x of undefined


const bar = ({ x: xPos = 0, y: yPos = 0, z: zPos = 0 } = {}) => {
  //             make the object defualt to empty object ^^
  console.log(`function example x=${xPos} y=${yPos} z=${zPos}`)
}

bar()


// Similar thing for arrays

const arr = [1, 2, 3, 4, 5]

let [first] = arr

console.log(`first item: ${first}`)

let [f, second, third, forth] = arr

console.log(`second = ${second}, third = ${third}, forth = ${forth}`)