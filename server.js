const express = require("express")
const bodyParser = require('body-parser')

const app = express()
const host = "0.0.0.0"
const port = 8080

app.use(express.static(__dirname + "/json"))
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }))
app.listen(port, host, () => {
  console.info(`Running on ${host}:${port}!\n`)
})
