// dependencies
const express = require('express')

// Configuration
const app = express()
const PORT = 3000

// data access
const drinks = require('./models/drinks.js')
const food = require('./models/food.js')

// Routes
app.get('/', (req, res) => {
  console.log('Welcome to the Gitpub App!');
  })

app.get('/drinks', (req, res) => {
res.render('index.ejs', {
  allDrinks: drinks,
  allFood: food
});
})

//show
app.get('/drinks/:id', (req, res) => {
  res.render('show.ejs', {
  drink: drinks[req.params.id]
  })
})
//listener
app.listen(PORT, () => {
  console.log('listening on port', PORT)
})
