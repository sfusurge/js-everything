const arr = [10, 20, 30]

const foo = function (i) {
  let index = i
  return () => { // <-- return a function
    // index is *within* this function's closure, even though it's defined outside.
    // tricky concept to get
    return arr[index]
  }
}

const zeroth = foo(0)
const first = foo(1)
const second = foo(2)

console.log(`0th:${zeroth()}\n1st:${first()}\n2nd:${second()}`)