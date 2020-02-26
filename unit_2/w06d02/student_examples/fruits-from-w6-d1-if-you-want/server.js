/*
**********************
  Initialize my Variables
***********************
*/
const express = require('express')
const app = express();
const mongoose = require('mongoose');
const methodOverride = require('method-override');
const fruitsController = require('./controllers/fruits.js');
const PORT = 3000;
/* End Variables */

/*
***********************
  Express Middleware i.e
  Body Parser, Static, Method Override etc
***********************
*/
app.use(express.urlencoded({extended: true}));
//use methodOverride.  We'll be adding a query parameter to our delete form named _method
app.use(methodOverride('_method'));
app.use('/fruits', fruitsController);

/* Middleware End*/


/* Database Connection */
mongoose.connect('mongodb://localhost:27017/fruits1', { useNewUrlParser: true })
mongoose.connection.once('open', () => {
  console.log('connected to mongodb database.')
})
/* Database Connection End */


/*****************************
  Tell Node and Express where to listen for requests
*****************************/
  app.listen(PORT, (req, res) => {
    console.log("Cristi is awesome...")
  })
/* End Listen */
