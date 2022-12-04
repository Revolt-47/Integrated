const mongoose=require('mongoose')
const Schema= mongoose.Schema

var bookSchema = Schema({
    room_no : Number,
    email : String,
    checkin : Date,
    checkout : Date,
    price : Number,
  })

  var bookings = mongoose.model('bookings',bookSchema)
  module.exports = bookings;
