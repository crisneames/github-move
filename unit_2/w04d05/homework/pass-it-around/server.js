// dependencies

const express = require('express');
const app = express();
const PORT = 3000;

app.listen(PORT, () => {
  console.log('app in running on port: ', PORT);
})

// routes
//Take one Down and Pass it around
app.get('/', (req, res) => {
    res.send(`<h4>99 bottles of beer on the wall</h4> <a href="/98">Take one down and pass it around</a>`)
})
app.get('/:beerNumber', (req, res) => {
  console.log(req.params);
  beer = req.params.beerNumber
  if (beer != 0) {
  res.send(`<a href="/${beer - 1}">Take one down and pass it around</a> : ${beer}`); 
}


})

// <h4>99 bottles of beer on the wall</h4> <a href="http://localhost:3000/
