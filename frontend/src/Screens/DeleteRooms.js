import React from "react"
import { useState } from "react"
import { Await, useNavigate } from "react-router-dom"
import axios from "axios"

export default function DeleteRoom() {
    let [id, setid] = useState("")
    
    async function deleteRooms() {
          
        const Room={
            id            
        }

        try {
            const result = (await axios.post('http://localhost:3001/DeleteRooms',Room)).data
            console.log(result);
            window.alert('Room has been deleted successfully')
            
          } catch (error) {
            console.log(error);
          }
  }
   
   
    return (
        
        <div className='row'>
            <h3>Delete Rooms</h3>
            <div className='col-md-3'>
                <input type='text' className='form-control' placeholder='Room id' 
                 value={id} onChange={(e) => { setid(e.target.value) }} />
            </div>
            <div className='text-right'>
                    <button className='btn btn-primary' onClick={deleteRooms} id="delete">Delete Room</button>
                </div>
            </div>
        
    )
}
