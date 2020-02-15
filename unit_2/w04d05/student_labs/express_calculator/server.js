const express = require('express');
const app = express();

const PORT = 3000;

app.listen(PORT, () => {
  console.log('app is running on port: ', PORT)

});

// Route
app.get('/calc/:num1/:num2', (req, res) => {
  console.log(req.params);
  sum = Number(req.params.num1) + Number(req.params.num2)
  res.send("the sum is " + sum);
})
