// Dependencies
const express = require('express')
const app = express()
const PORT = 3000

// 'Data'
const orders = [
  { item: "Mad cURLy Fries", created_at: Date.now() },
  { item: "Swirly Milkshake", created_at: Date.now() },
  { item: "Burly Burger", created_at: Date.now() }
]

//middleware
//app.use(express.urlencoded({extended:false}))

//Index Route
app.get('/orders', (req, res) => {
  res.send(orders)
})

// create route
app.post('/orders', (req, res) => {
  console.log('Create route accessed!')
  console.log(req.body 'is:' req.body);
  res.redirect('/orders')
  //res.send(req.body)
})

app.listen(PORT, () => {
  console.log('listening on port', PORT)
})
