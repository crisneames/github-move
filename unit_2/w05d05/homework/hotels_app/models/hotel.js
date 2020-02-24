const mongoose = require('mongoose')
const Hotel = reuire('/models/hotel')
const Schema = mongoose.Schema

const hotelSchema = new Schema (
  {
    const hotelSchema = new Schema(
    {
        name: {type: String, required: true, unique: true},
        location: String,
        rating: {type: Number, maxValue: 5},
        vacancies: Boolean,
        tags: {type: Array{type: String}},
        rooms: [{
            roomNumber: Number,
            size: String,
            price: Number,
            booked: Boolean
        }]
    }
  },
  { timestamps: true }
)


module.exports = hotels
