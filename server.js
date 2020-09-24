const express = require("express")
const app = express()

app.use(express.static("."))


app.get("/", (req, res) => {
  res.sendFile("./index.js")
})

app.get("/api/data", (req, res) => {
  res.json({ a: 1, b: 2, c: 3 })
})

app.listen(3000, () => { })