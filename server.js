const express = require("express")
const path = require("path")

const app = express()

app.use(express.static(path.join(__dirname, 'dist')))
app.use(express.static(path.join(__dirname, 'node_modules')))

PORT = 4200
app.listen(PORT, function(){
  console.log(`Running server on port ${PORT}`)
})
