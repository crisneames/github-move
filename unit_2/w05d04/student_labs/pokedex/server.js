// Dependencies
const express = require('express')
const methodOverride = require('method-override')
const app = express()
const PORT = 3000

// middleware
app.use(express.static('public'))
// body parser
app.use(express.urlencoded({extended: false}))
app.use(methodOverride('_method'))

// 'Data'
const pokemon = require('./models/pokemon.js')

// Index
app.get('/pokemon', (req, res) => {
  res.render('index.ejs', {
    pokemon: pokemon
  })
})

// New
app.get('/pokemon/new', (req, res) => {
  res.render('new.ejs');
})

// Show
app.get('/pokemon/:index', (req, res) => {
  const currentPokemon = pokemon[req.params.index]
  res.render('show.ejs', {
    pokemon: currentPokemon
  })
})

// Edit
app.get('/pokemon/:index/edit', (req, res)=>{
	res.render(
		'edit.ejs', //render views/edit.ejs
		{ //pass in an object that contains
			pokemon: pokemon[req.params.index], //the pokemon object
			index: req.params.index //... and its index in the array
		}
	)
})

// Delete
 app.delete('/pokemon/:index', (req, res) => {
   pokemon.splice(req.params.index, 1); //remove the item from the arrray
   res.redirect('/pokemon'); //redirect back to index route
 });

 // Update
  app.put('/pokemon/:index', (req, res) => { // :index is the index of our pokemon array that we want to change
 	pokemon[req.params.index] = req.body //in our pokemon array, find the index that is specified in the url (:index).  Set that element to the value of req.body (the input data)
 	res.redirect('/pokemon'); //redirect to the index page
 })

// Create
app.post('/pokemon', (req, res) => {

  pokemon.push(req.body)
  res.redirect('/pokemon')
})
app.listen(PORT, () => {
  console.log('listening on port', PORT)
})
