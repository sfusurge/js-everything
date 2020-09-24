
const a = "a"
const b = "b"

const obj = {
  a: 1,
  b: 2,
  c: 3

}
const arr = [1, 2, 3]

const double = x => x * 2

const triple = x => x * 3

export {
  obj as someObject,
  a as someString,
  b,
  arr,
  double
}

export default triple
// or ...