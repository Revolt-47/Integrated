
import express from 'express'; 
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import roomModel from './Models/RoomModel.js';
// Importing room route
import roomsRoute from './routes/Rooms.js';
import adminRoute from './routes/Admin.js';
import cors from 'cors';

//import bodyParser from 'body-parser'

const app = express()
const port = 3001
app.use(cors());
app.use('/Rooms',roomsRoute);
app.use('/Admin',adminRoute);

mongoose.connect('mongodb://hammad:vhwGEQwyrU!2hxp@ac-oi8kxs9-shard-00-00.muzmco7.mongodb.net:27017,ac-oi8kxs9-shard-00-01.muzmco7.mongodb.net:27017,ac-oi8kxs9-shard-00-02.muzmco7.mongodb.net:27017/PROJECT0?ssl=true&replicaSet=atlas-qlfkcm-shard-0&authSource=admin&retryWrites=true&w=majority',{useNewUrlParser: true}).catch(()=>
{console.log("Database connection failed")})
const connection = mongoose.connection;
connection.once("open", () => {
  console.log("MongoDB database connection established successfully");
});

app.use(bodyParser.urlencoded({ extended: true }))
// parse application/json
app.use(bodyParser.json())


const obj=new roomModel({


    id: "2",
    num:4,
    description:"Good",
    type:"Luxury",
    seats:"2",
    price:500,

})

//obj.save();




app.get('/Rooms', async (req, res) => {
    
})

app.get('/', (req, res) => {
    res.send('hy')
})

app.post('/AddRooms', async (req, res) => {
    try {
       const {id,num,description,type,seats,price} = req.body
       await roomModel.create({id,num,description,type,seats,price})
        res.send('New room added successfully')
    } catch (error) {
        return res.status(400).json({error});
    }
})

app.post('/EditRooms', async (req, res) => {
    try {
        
        const rm = await roomModel.find()
        const r = rm.find(r1 => r1.id==req.body.id)
        r.price=req.body.price
        r.save()
        res.send('Room edited successfully')

    } catch (error) {
        return res.status(400).json({error});
    }    
})

app.post('/DeleteRooms', async (req, res) => {
    try {
        await roomModel.remove({"id":req.body.id})
        const data = roomModel.find({"id":req.body.id})
        res.send('room deleted successfully')
    } catch (error) {
        return res.status(400).json({error});
    }
})
app.get('/DisplayRooms', async (req, res) => {
    try {
        
        const data = await roomModel.find({})
        res.send(data)
      
    } catch (error) {
        return res.status(400).json({error});
    }
})



app.post('/', (req, res) => {
    console.log(req.body)
    res.send('Posting a Request')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})