const express = require('express')
const app = express();
const mongoose = require('mongoose');
//const Log = require('./models/log.js');
const PORT = 3000;
/* End Variables */
/*
***********************
  Express Middleware i.e
  Body Parser, Static, Method Override etc
***********************
*/
app.use(express.urlencoded({extended: true}));
/* Middleware End*/
/* Database Connection */
mongoose.connect('mongodb://localhost:27017/basiccrud', { useNewUrlParser: true })
mongoose.connection.once('open', () => {
  console.log('connected to mogodb database.')
})


// New  is connected Create [ Create has the functionality]
        app.get('/logs/new', (req, res) => {
            res.render('new.ejs')
        })



        /*********************************
             FUNCTIONAL ROUTES
        *********************************/
                // ******CREATE *****

    // Create is connected to New [New shows the form that allows you to call this Create Functionality]
app.post('/logs/', (req, res)=>
res.send(req.body)
{
    if(req.body.readyToEat === 'on'){ //if checked, req.body.readyToEat is set to 'on'
       req.body.readyToEat = true;
          } else { //if not checked, req.body.readyToEat is undefined
                req.body.readyToEat = false;
              }
            //Fruit.create(req.body, (error, createdFruit) => {
            //  res.redirect('/fruits');
          //  })
          });
                /* End Create Route */
        /*****************************
  Tell Node and Express where to listen for requests
*****************************/
  app.listen(PORT, (req, res) => {
    console.log("Listening to port ", PORT)
  })
/* End Listen */
