const prom = (res) => {
  return new Promise((reslove, reject) => {
    setTimeout(() => {
      if (res) {
        reslove("promise data")
      } else {
        reject("promise reject")
      }
    }, 1500)
  })
}

prom(true)
  .then(data => {
    console.log("promise resolved!", data)
  })
  .catch(err => {
    console.log("promise errored!", err)
  })

console.log("before? after?")


const wait = async () => {
  // woow fancy ^
  let data = await fetch("./api/data")
  // sooo fancy ^ await only allowed in async function
  let parsed = await data.json()
  console.log("awaited data", parsed)
}

wait()
console.log("before async/await")