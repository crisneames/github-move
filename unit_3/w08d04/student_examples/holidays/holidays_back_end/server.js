const express = require('express')
const app = express()
const PORT = 3003
const holidaysController = require('./controllers/holidays.js')
const mongoose = require('mongoose')

// Middleware
app.use(express.json())

// Error / Disconnection
mongoose.connection.on('error', err => console.log(err.message + ' is Mongod not running?'))
mongoose.connection.on('disconnected', () => console.log('mongo disconnected'))

mongoose.connect('mongodb://localhost:27017/batman', { useNewUrlParser: true })
mongoose.connection.once('open', ()=>{
    console.log('connected to mongoose...')
})

app.use('/holidays', holidaysController)

app.listen(PORT, () => {
  console.log('🎉🎊', 'celebrations happening on port', PORT, '🎉🎊',)
})
