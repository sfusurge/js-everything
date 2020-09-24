// very C like :
function c_double(a) {
  return a * 2
}
console.log(`C like double: ${c_double(4)}`)

// ES6:
const es6_double = (a) => {
  return a * 2
}
console.log(`ES6 double: ${es6_double(4)}`)

// single perameter:
const double_input = a => {
  return a * 2
}

// single liner:
const double_oneLiner = a => a * 2
console.log(`one liner double: ${double_oneLiner(4)}`)



//functional 'classes' + prototype
function mightAsWellBeAClass(x, y, z) {
  this.x = x
  this.y = y
  this.z = z
  this.someLinAlg = () => Math.sqrt(x * x + y * y + z * z)
  this.moveTo = (x, y, z) => {
    this.x = x
    this.y = y
    this.z = z
  }
  this.getPos = () => ({ x: this.x, y: this.y, z: this.z })
}

const vector = new mightAsWellBeAClass(3, 3, 3)
console.log(`vector class math: ${vector.someLinAlg()}`)
console.log(`vector class pos:`, vector.getPos())
vector.moveTo(1, 1, 1)
console.log(`vector class moved:`, vector.getPos())

function factory() {
  return this.car
}
// console.log(`defualt factory: ${factory()}`) // this is undefined

const honda = factory.bind({ car: "honda" })
console.log(`honda factory: ${honda()}`)


//scoping:
function scoped() {
  this.val = 10
}
const notScoped = () => {
  this.val = 10
}
console.log(`scoped, c like function: ${new scoped().val}`)
// console.log(`not scoped, es6 function: ${new notScoped().val}`) // error