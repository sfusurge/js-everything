const obj = {
  a: 1,
  b: 2,
  c: 3
}
const arr = [1, 2, 3]

console.log(obj);

console.log(arr);

// console.log(`obj.hasOwnProperty("a"): ${obj.hasOwnProperty("a")}`);

// console.log(`arr.avg(): ${arr.avg()}`) // error arr.avg is not a function

Array.prototype.avg = function () { // <-- has to be function not =>, else `this` would not be defined!!
  let i = 0, sum = 0
  for (; i < this.length; i++) {
    sum += this[i]
  }
  return sum / i;
}

console.log(`arr.avg(): ${arr.avg()}`)