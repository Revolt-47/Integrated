const mongoose=require('mongoose')
const Schema= mongoose.Schema

var RoomSchema = Schema({
    room_no : Number,
    type : String,
    seats : Number,
    description : String,
    price  : Number
  })

  var rooms = mongoose.model('rooms',RoomSchema);
  module.exports = rooms;