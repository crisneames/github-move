// dependencies

const express = require('express');
const app = express();
const PORT = 3000;

app.listen(PORT, () => {
  console.log('app in running on port: ', PORT);
})

// routes
// Greetings
app.get('/greeting/', (req, res) => {
  console.log(req.params);
  res.send('Hello stranger');
})

app.get('/greeting/:name', (req, res) => {
  console.log(req.params);
  res.send("What's up " + req.params.name + "?");
})

// Tip Calculator
app.get('/tip/:total/:tipPercentage', (req, res) => {
  //console.log(req.params.total);
  tipTotal = Number(req.params.total) * (Number(req.params.tipPercentage) / 100)
  res.send('tip: ' + tipTotal);
});

//Magic 8 Ball
