const express = require('express')
const app = express();
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const Log = require('./models/logs.js');
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
mongoose.connect('mongodb://localhost:27017/captainLogs', { useNewUrlParser: true })
mongoose.connection.once('open', () => {
  console.log('connected to mogodb database.')
})

// Index
        app.get('/logs', (req, res) => {
          Log.find({}, (error, allLogs) => {
            if (error){
              res.send('OOPs you have an error')
            }
            console.log(allLogs)
            res.render('index.ejs', {
              logs: allLogs
            })// end the res.render
          })// this is the fruits call back
        })

// New  is connected Create [ Create has the functionality]
        app.get('/logs/new', (req, res) => {
            res.render('new.ejs')
        })

        // SHOW
        app.get('/logs/:id', (req, res) => {
          //if (req.session.currentUser) {
            Log.findById(req.params.id, (error, foundLog) => {
              console.log(error);
              res.render('show.ejs', {
                logs: foundLog
              //  currentUser: req.session.currentUser
              })
            })
          //} else {
        //    res.redirect('/sessions/new')
        //  }
        })


        /*********************************
             FUNCTIONAL ROUTES
        *********************************/
                // ******CREATE *****

    // Create is connected to New [New shows the form that allows you to call this Create Functionality]
app.post('/logs/', (req, res)=> {

    if (req.body.shipIsBroken === 'on')  {
                req.body.shipIsBroken = true;
     } else {
                req.body.shipIsBroken = false;
              }
            Log.create(req.body, (error, createdLog) => {
              console.log(error);
              res.redirect('/logs');
            })
})
                /* End Create Route */
        /*****************************
  Tell Node and Express where to listen for requests
*****************************/
  app.listen(PORT, (req, res) => {
    console.log("Listening to port ", PORT)
  })
/* End Listen */
