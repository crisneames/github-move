// dependencies
const express = require('express')

// Configuration
const app = express()
const PORT = 3000

// data access
const drinks = require('./models/drinks.js')

// Routes
app.get('/', (req, res) => {
  console.log('Welcome to the Gitpub App!');
  })

app.get('/drinks', (req, res) => {
res.send(drinks);
})
//listener
app.listen(PORT, () => {
  console.log('listening on port', PORT)
})
