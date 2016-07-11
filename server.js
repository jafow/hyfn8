const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const path = require('path')
const fs = require('fs')
const PORT = process.env.PORT || 3000

app.use(express.static('client'))
app.use(bodyParser.json())

app.get('/ads', (req, res) => {
  res.sendFile(path.join(__dirname, 'data/ads.js'))
})

app.get('/ads_metrics', (req, res) => {
  res.sendFile(path.join(__dirname, 'data/ads_metrics.js'))
})

app.listen(PORT, () => {
  console.log(`server listening on port: ${PORT}`)
})
