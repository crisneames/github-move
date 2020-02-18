// DEPENDENCIES
const express = require('express');
const app = express();
// PORT
const port = 3000;

// run `npm i` to install dependencies in package.json

// * Your mission is to complete the app
// * The app will need routes for index and show
// * The app will need views for index and show
//
// * Make it so you can click on a mission’s name on the index page, and be taken to that mission’s show page
// * Bonus: add images to the data and have them display
// * Bonus: add static css to style the pages

// NOTES:
// ejs has not been installed - install it!
// views folder has not been created - create it!
// views/missions folder has not been created create it!

// data
const missions = require('./models/marsMissions.js')
console.log(missions);
// INDEX Route
// send data to 'missions/index.ejs' view
// the view should display just the names of each mission
// Stretch: the names should provide a link to the show page

app.get('/marsMissions', (req, res) => {
  res.render('index.ejs', {
    allMissions: missions
  })
})

app.get('/marsMissions/:indexOfMissionsArray', (req, res) => {
  res.render('show.ejs', {
    mission: missions[req.params.indexOfMissionsArray]
  })
})

// SHOW Route
// send data to 'missions/show.ejs' view
// the view should display all the data for a single mission
// the view should have a link back to the index
// Stretch: display the image inside an image tag



// LISTENER
app.listen(port, ()=> {
  console.log('Missions to Mars running on port: ', port);
})
