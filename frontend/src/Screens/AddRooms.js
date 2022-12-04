import React from "react"
import { useState } from "react"
import { Await, useNavigate } from "react-router-dom"
import axios from "axios"
import Alert from 'react-bootstrap/Alert';

export default function AddRoom() {



    let [id, setid] = useState("")
    let [num, setnum] = useState("")
    let [description, setdescription] = useState("")
    let [type, settype] = useState("")
    let [seats, setseats] = useState("")
    let [price, setprice] = useState("")


    async function addRoom() {

        const newRoom = {
            id,
            num,
            description,
            type,
            seats,
            price
        }

        try {
            const result = await (await axios.post('http://localhost:3001/AddRooms', newRoom)).data
            console.log(result);
            window.alert('Room has been added successfully')
            
        } catch (error) {
            console.log(error);
        }
    }



    return (

        <div className='row'>
            <h3>Add Rooms</h3>
            <div className='col-md-3'>
                <input type='text' className='form-control' placeholder='Room id'
                    value={id} onChange={(e) => { setid(e.target.value) }} />
                <input type='text' className='form-control' placeholder='Room Number'
                    value={num} onChange={(e) => { setnum(e.target.value) }} />
                <input type='text' className='form-control' placeholder='Room type'
                    value={type} onChange={(e) => { settype(e.target.value) }} />

            </div>
            <div className='col-md-4'>
                <input type='text' className='form-control' placeholder='Room Price'
                    value={price} onChange={(e) => { setprice(e.target.value) }} />
                <input type='text' className='form-control' placeholder='Room Seats'
                    value={seats} onChange={(e) => { setseats(e.target.value) }} />
                <input type='text' className='form-control' placeholder='Room Description'
                    value={description} onChange={(e) => { setdescription(e.target.value) }} />

            </div>
            <div className='col-md-2'>
                <div className='text-right'>
                    <button className='btn btn-primary' onClick={addRoom} id="add">Add Room</button>
                </div>
            </div>
        </div>
    )
}
