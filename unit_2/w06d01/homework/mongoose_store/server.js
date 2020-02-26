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
  console.log('connected to mongodb database.')
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
          console.log('Product Route');
          Product.find({}, (error, allProducts) => {
            if (error){
              res.send('OOPS! There\'s an error')
            }
            console.log(allProducts);
            res.render('index.ejs', {
              products: allProducts
            })// end the res.render
          })// this is the products call back
        }/*This is the end of the app.get callback*/)
        /* Index Ends */

        // New  is connected Create [ Create has the functionality]
        app.get('/product/new', (req, res) => {
              res.render('new.ejs')
                })
        // Show
        app.get('/product/:id', (req, res) => {
          Product.findById(req.params.id, (error, foundProduct) => {
          res.render('show.ejs', {
          products: foundProduct
                    })
                  })
                })
                /* PRESENTATIONAL routes END */
/*********************************
                     FUNCTIONAL ROUTES
*********************************/
// ******CREATE *****
                        // Create is connected to New [New shows the form that allows you to call this Create Functionality]
app.post('/product/', (req, res)=>{
  console.log(req.body);
    Product.create(req.body, (error, createdProduct) => {
      console.log(error);
                              res.redirect('/product');
                            })
                        });
    /* End Create Route */
    // Update
    app.put('product/:id', (req, res) => {
          // if (req.body.readyToEat === 'on'){
          //     req.body.readyToEat = true;
          //     } else {
          //     req.body.readyToEat = false;
          //     }
              Product.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, updatedProduct)=>{
              res.redirect(`/product/${updatedProduct.id}`);
          });
        })
        // Delete
        app.delete('/:id', (req, res) => {
          Product.findByIdAndRemove(req.params.id, (err, deletedProduct) => {
            res.redirect('/product')
          })
        })
                        /* Routes End */
        /*****************************
  Tell Node and Express where to listen for requests
*****************************/
  app.listen(PORT, (req, res) => {
    console.log('Listening on port: ', PORT)
  })
/* End Listen */
