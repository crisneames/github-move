/*
**********************
  Initialize my Variables
***********************
*/
const express = require('express')
const app = express();
const mongoose = require('mongoose');
const Product = require('./models/product.js');
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
mongoose.connect('mongodb://localhost:27017/ProductInventoryManagement', { useNewUrlParser: true })
mongoose.connection.once('open', () => {
  console.log('connected to mogodb database.')
})
/* Database Connection End */

/*********************
ROUTES
*******************/
/* **********************************
PRESENTATIONAL ROUTES
***********************************/
        // Index
        app.get('/product', (req, res) => {
          // First argument is going to contain data if something went wrong (**error**,
          // allFruits)
          console.log('Product Route');
          // Second argument will contain data if we got what we asked for (error, **allFruits**)
          Product.find({}, (error, allProducts) => {
            if (error){
              res.send('OOPS There\'s an error')
            }
            res.render('index.ejs', {
              products: allProducts
            })// end the res.render
          })// this is the products call back
        }/*This is the end of the app.get callback*/)
        /* Index Ends */

        // Show
                app.get('/product/:id', (req, res) => {
                  Product.findById(req.params.id, (error, foundProduct) => {
                    res.render('show.ejs', {
                      products: foundProduct
                    })
                  })
                })

        /*****************************
  Tell Node and Express where to listen for requests
*****************************/
  app.listen(PORT, (req, res) => {
    console.log('Listening on port: ', PORT)
  })
/* End Listen */
