const arr = [1, 2, 3, 4]

// returns undefined
console.log('arr.forEach\nitem\tindex\tsource')
arr.forEach((item, index, source) => {
  console.log(`${item}\t\t${index}\t\t`, source);
})


console.log('arr.reduce\naccum')
let total = arr.reduce((accum = 0, curr, index, source) => {
  console.log(accum)
  return accum + curr
})
console.log(`arr.reduce total: ${total}`)


let odd = arr.filter((item, index, source) => {
  return item % 2
})
console.log(`arr.filter odd:`, odd);


let double = arr.map((item, index, source) => {
  return item * 2
})
console.log(`arr.map double:`, double);