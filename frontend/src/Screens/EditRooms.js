import React from "react"
import { useState } from "react"
import { Await, useNavigate } from "react-router-dom"
import axios from "axios"

export default function EditRoom() {
    
    let [id, setid] = useState("")
    let [price, setprice] = useState("")
    
    async function editRooms() {
          
        const Room={
            id,
           price
        }
        

        try {
            const result = await (await axios.post('http://localhost:3001/EditRooms',Room)).data
            console.log(result);
            window.alert('Price has been updated successfully')
          } catch (error) {
            console.log(error);
          }
  }

    return (

        <div className='row'>
             <h3>Edit Rooms</h3>
            <div className='col-md-4'></div>
            <div className='col-md-3'>
                <input type='text' className='form-control' placeholder='Room id' 
                 value={id} onChange={(e) => { setid(e.target.value) }} />
                <input type='text' className='form-control' placeholder='New price' 
                 value={price} onChange={(e) => { setprice(e.target.value) }} />
            </div>
            <div className='text-right'>
                <button className='btn btn-primary' onClick={editRooms} id="edit">Update</button>
            </div>
        </div>

    )
}
