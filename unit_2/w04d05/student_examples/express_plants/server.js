//DEPENDENCIES
const express = require('express');
const app = express();
const PORT = 3000;

// 'data'
const plants = [
  'Monstera Deliciosa',
  'Corpse Flower',
  'Elephant-Foot Yam',
  "Witches' Butter"
];

// Route

app.get('/awesome', (req, res) => { //this will never be reached
  res.send(`
    <h1>Plants are awesome!</h1>
    <img src="https://static.boredpanda.com/blog/wp-content/uuuploads/plant-sculptures-mosaicultures-internationales-de-montreal/plant-sculptures-mosaicultures-internationales-de-montreal-14.jpg" >
  `);
});

app.get('/oops/:indexOfPlantsArray', (req, res) => {
  if (plants[req.params.indexOfPlantsArray]) {
    res.send(plants[req.params.indexOfPlantsArray])
  } else {
  res.send('this is the index: '+ req.params.indexOfPlantsArray)
}
})

app.get('/:indexOfPlantsArray', (req, res) => {
console.log(req.params);
  res.send(plants[req.params.indexOfPlantsArray])
})

app.get('/hello/:firstname/:lastname', (req, res) => {
	console.log(req.params);
	res.send('hello ' + req.params.firstname + ' ' + req.params.lastname);
});

app.get('/howdy/:firstName', function(req, res) {
  console.log(req.params);
  console.log(req.query);
  res.send('howdy ' + req.query.title + ' ' + req.params.firstName);
});
// Listener
app.listen(PORT, () => {
  console.log('listening on port', PORT);
})
