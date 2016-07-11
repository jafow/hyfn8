const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const path = require('path')
const fs = require('fs')
const PORT = process.env.PORT || 3000

app.use(express.static('client'))
app.use(bodyParser.json())

app.get('/ads', (req, res) => {
  fs.createReadStream(path.join(__dirname, 'data/ads.json')).pipe(res)
})

app.get('/ads_metrics', (req, res) => {
  fs.createReadStream(path.join(__dirname, 'data/ads_metrics.json')).pipe(res)
})

app.listen(PORT, () => {
  console.log(`server listening on port: ${PORT}`)
})
