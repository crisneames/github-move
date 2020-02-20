// Dependencies
const express = require('express')
const app = express()
const port = 3000

// 'Data'
const budget = require('./models/budget.js')

//middleware
app.use(express.urlencoded({extended:false}))
app.use(express.static('public')); //tells express to try to match requests with files in the directory called 'public'

// routes
// index
app.get('/budget', (req, res) => {
  res.render('index.ejs', {
    budgets: budget
  })
})

//post route
app.post('/budget', (req, res) => {
  const object = {...req.body}
  console.log(object)
  budget.push(req.body)
  res.redirect('/budget')
})

// new route
app.get('/budget/new', (req, res) => {
    res.render('new.ejs');
});

// show route
app.get('/budget/:index', (req, res) => {
  const currentBudget = budget[req.params.index]
  res.render('show.ejs', {
    budget: currentBudget
  })
})


app.listen(port, () => {
  console.log('listening on port', port)
})
