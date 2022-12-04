const express = require('express')
const app = express()
var bodyParser = require('body-parser')
const mongoose = require('mongoose')
var customer = require('./Models/customer')
var rooms = require('./Models/rooms')
var bookings = require('./Models/bookings')

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))
// parse application/json
app.use(bodyParser.json())


mongoose.connect('mongodb://hammad:vhwGEQwyrU!2hxp@ac-oi8kxs9-shard-00-00.muzmco7.mongodb.net:27017,ac-oi8kxs9-shard-00-01.muzmco7.mongodb.net:27017,ac-oi8kxs9-shard-00-02.muzmco7.mongodb.net:27017/PROJECT0?ssl=true&replicaSet=atlas-qlfkcm-shard-0&authSource=admin&retryWrites=true&w=majority');
var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
 
db.once('open', function() {
    console.log("Connection Successful!");
});
 

  
  

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://localhost:3000");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });
app.get("/customers",(req,res , next)=>{
    res.json({"users":["userone","usertwo","userthree"]})
})



app.post("/customers" , (req , res ,next)=>{
    console.log(req.body)
    const query = customer.findOne({'email' : req.body.email , 'password' : req.body.password})
   // query.select('email name');
    query.exec(function (err,customer){
        if(err){
        res.sendStatus(400);
        return console.error(err);}
        console.log(customer);
        res.send(customer)
        return;
    })
    // res.send({msg: 'Customer not Found'})
})


app.get("/createcustomer",(req,res , next)=>{
    res.send('lllll');
})
 

app.post("/createcustomer",(req,res,next)=>{

    //const article = new cust(req.body)
    console.log(req.body);
   /* const query = customer.findOne({'email' : req.body.email})
    query.select('email');
    query.exec(function (err,customer){
        if(err) return console.error(err);
        console.log(customer.email);
    });*/

    var cus = new customer(req.body);
    cus.save(function (err, customer) {
        if (err){ 
            res.sendStatus(400)
            return console.error(err);}
            res.sendStatus(201);
        console.log(customer.name + " added to customers.");
      });

})

app.get("/rooms",(req,res , next)=>{
  //  res.json({"users":["userone","usertwo","userthree"]})
    const query = rooms.find({'booked' : false});
    query.exec(function (err,rooms){
        if(err) return console.error(err);
        console.log(rooms)
        res.json(rooms);
    })  

})

app.post("/rooms",(req,res,next)=>{
            const query = rooms.aggregate([
                { $lookup :
                    {
                        from : 'bookings',
                        localField : 'room_no',
                        foreignField : 'room_no',
                        as : 'books'
                    }

                }
            ])

            var x = [];
            console.log('hi');
            query.exec(function (err,rooms){
                if(err) return console.error(err);
                rooms.map(
                    (element) => {
                       //console.log(element)
                       // x.push(element);
                        if(element.books.length > 0){          
                        element.books.map(
                            (e) => {
                                console.log(e.checkin)
                             if(e.checkin >= req.body.checkin && e.checkout <= req.body.checkin){
                                if(e.checkin >= req.body.checkout && e.checkin <= req.body.checkout){
                                    x.push(element);
                                    console.log(element);
                                    r
                                }
                             }
                            }
                          )
                        return}
                        
                            x.push(element);
                           console.log(x);
                           
                          
                        
                        })
                        res.json(x);
                        
                         
                      
                                  
                             
                                })
                            

                            
                            })
                    
                
                
            
         
        
        
      






app.post("/newbooking",(req,res,next)=>{
    var book = new bookings(req.body);
    book.save(function (err, booking) {
        if (err){ 
            return console.error(err);}
        console.log(booking._id + " added to bookings.");
        const query = rooms.updateOne({'room_no' : req.body.room_no},
        {
            $set : {
                booked : true
            }
        });
        query.exec(function (err,rooms){
            if(err) return console.error(err);
            console.log(rooms)
            res.json(rooms);
        })
        
        
      });

})

app.post("/booking",(req,res,next)=>{
    const query = bookings.find({'email' : req.body.email});
    query.exec(function(err,books){
        if(err) return console.error(err);
        console.log(books);
        res.json(books);
    })
    
})


module.exports = app;
