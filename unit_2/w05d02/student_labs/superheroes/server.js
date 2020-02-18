// dependencies
const express = require('express')

// Configuration
const app = express()
const PORT = 3000

//'Data'
superheroes = ['Superman', 'Wonder Woman', 'Black Panther']
superheroes = [
  { name: "Superman",
    powers: ['flight', 'invulnerability', 'x-ray vision']},
  { name: "Wonder Woman",
    powers: ['telepathic', 'athletic', 'magic lasso']}
  ]
// Routes
// index
app.get('/superheroes', (req, res) => {
  res.send(superheroes)
})

//show
app.get('/superheroes/:index', (req, res) => {
  res.send(`<h1>${superheroes[req.params.index].name}</h1> <ul>powers</ul><li>${superheroes[req.params.index].powers[0]}</li><li>${superheroes[req.params.index].powers[1]}</li><li>${superheroes[req.params.index].powers[2]}</li>`)
})
//listener
app.listen(PORT, () => {
  console.log('Here to save the day', PORT)
})
