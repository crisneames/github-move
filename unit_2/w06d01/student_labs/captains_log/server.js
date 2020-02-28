const express = require('express')
const app = express();
const mongoose = require('mongoose');
const methodOverride = require('method-override');
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
app.use(methodOverride('_method'));
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

        // Edit
              app.get('/logs/:id/edit', (req, res)=>{
                Log.findById(req.params.id, (err, foundLog)=>{ //find the fruit
                  res.render('edit.ejs', {
                  logs: foundLog //pass in found fruit
              });
          });
      });

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

// Update
    app.put('/logs/:id/', (req, res) => {
      if (req.body.shipIsBroken === 'on'){
          req.body.shipIsBroken = true;
          } else {
          req.body.shipIsBroken = false;
          }
          Log.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, updatedLog)=>{
          res.redirect(`/logs/${updatedLog.id}`);
      });
    })
    // Delete
    app.delete('/logs/:id', (req, res) => {
      Log.findByIdAndRemove(req.params.id, (err, deletedLog) => {
        res.redirect('/logs')
      })
    })
/*********************************
 FUNCTIONAL ROUTES End
*********************************/
                /* End Create Route */
        /*****************************
  Tell Node and Express where to listen for requests
*****************************/
  app.listen(PORT, (req, res) => {
    console.log("Listening to port ", PORT)
  })
/* End Listen */
