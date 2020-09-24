fetch("./api/data")
  .then(data => {
    console.log("we got some data", data)
    return data.json()
  })
  .then(parsed => {
    console.log("we parsed some data:", parsed)
  })