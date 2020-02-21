// Dependencies
const express = require('express')
const app = express()
const port = 3000

// 'Data'
const fruits = require('./models/fruits.js')

//middleware
app.use(express.urlencoded({extended:false}))
app.use(express.static('public')); //tells express to try to match requests with files in the directory called 'public'

// routes

// index
app.get('/fruits', (req, res) => {
  res.render('index.ejs', {
    fruits: fruits
  })
})

// create route
// app.post('/fruits', (req, res) => {
//   console.log('Create route accessed!')
//   console.log(`The name of the fruit is: ${req.body.name}`);
//   console.log(`The color of the fruit is: ${req.body.color}`);
//   res.send(req.body)
// })

//post route
app.post('/fruits', (req, res) => {
  const object = {...req.body}
  console.log(object)
  if (req.body.readyToEat === 'on') { // if checked, req.body.readyToEat is set to 'on'
    req.body.readyToEat = true
  } else { // if not checked, req.body.readyToEat is undefined
    req.body.readyToEat = false
  }
  fruits.push(req.body)
  res.redirect('/fruits')
})

// new route
app.get('/fruits/new', (req, res) => {
    res.render('new.ejs');
});



// show route
app.get('/fruits/:index', (req, res) => {
  const currentFruit = fruits[req.params.index]
  res.render('show.ejs', {
    fruit: currentFruit
  })
})

app.listen(port, () => {
  console.log('listening on port', port)
})
