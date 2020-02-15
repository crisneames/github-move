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

app.get('/magic/:question', (req, res) => {
  const answers = ["It is certain", "It is decidedly so", "Without a doubt", "Yes definitely","You may rely on it", "As I see it yes", "Most likely", "Outlook good","Yes", "Signs point to yes", "Reply hazy try again", "Ask again later","Better not tell you now", "Cannot predict now", "Concentrate and ask again","Don't count on it", "My reply is no", "My sources say no","Outlook not so good", "Very doubtful"]

  let question = req.params.question
  //console.log(question)
  let i = Math.floor(Math.random() * answers.length - 1);
  //console.log(i);
  res.send(`${question} : ${answers[i]}`);
});
