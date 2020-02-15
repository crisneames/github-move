const express = require('express')

const app = express ()

app.get('/', (req, res) => {
  res.send('Once in prep school, the Existentialist Club once named me "Most Likely to Be"')
})

app.get('/', (req, res) => {
  res.send('You know, sometimes I wonder if I\'m not just in psychiartry for the money')
})

app.listen(3000, () => {
  console.log('server is listening on port 3000')
})
