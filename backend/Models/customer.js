const mongoose=require('mongoose')
const Schema= mongoose.Schema

var CustSchema = Schema({
    name: String,
    email :  {
        type : String ,
        unique : true
    } ,
    phone : String,
    password : String,
  });

  var customer = mongoose.model('customers', CustSchema);
  module.exports = customer