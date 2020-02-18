// dependencies
const express = require('express')

// Configuration
const app = express()
const PORT = 3000

//'Data'
// 'DATA'
const fruits = require('./models/fruits.js')
console.log(fruits);
// Routes
// index
app.get('/fruits', (req, res) => {
  res.render('index.ejs', {
    allFruits: fruits
  })
})

//show
app.get('/fruits/:indexOfFruitsArray', (req, res) => {
  // res.send(fruits[req.params.indexOfFruitsArray])
//first argument is a string and it is what file we want to load
//second argument is always an object - the data you want to pass
  res.render('show.ejs', {
    fruit: fruits[req.params.indexOfFruitsArray]
  })
})

//listener
app.listen(PORT, () => {
  console.log('listening on port', PORT)
})
