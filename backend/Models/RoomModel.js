import mongoose from 'mongoose';
const { Schema } = mongoose;

const room = new Schema({
  id:  String, 
  num: Number,
  description:   String,
  type:   String,
  seats:   String,
  price:   Number 
});

const roomModel = mongoose.model('RoomModel',room);
export default roomModel
