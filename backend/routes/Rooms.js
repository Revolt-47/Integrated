import express from 'express'; 
const router = express.Router();
// import roomModel from '/home/umer/SCD/backend/Models/RoomModel.js';


router.get( "/getAllRooms", async (req,res) => {
    
    try {
        const firstarticle = await roomModel.findOne ({});
       // res.send(firstarticle); 
        return res.json({firstarticle});  
    } catch (error) {
        return res.status(400).json({message: "Retreival failed"})
    }
    
} )

export default router;