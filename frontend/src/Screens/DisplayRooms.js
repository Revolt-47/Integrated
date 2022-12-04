import React from "react"
import { useState, useEffect } from "react"
import { Await, useNavigate } from "react-router-dom"
import axios from "axios"


export default function DisplayRoom() {
 
     let [rooms, setRooms] = useState([]);
    
     async function getdata(){
         const data =  (await axios.get('http://localhost:3001/DisplayRooms')).data
         setRooms(data)
         rooms=data       
     }

    return (

        <div className='row'>
            <h3> Rooms </h3>
            <table className='table table-bordered table-dark'>
                <thead className='bs thead-dark'>
                    <tr>
                        <th>Id</th>
                        <th>Number</th>
                        <th>Type</th>
                        <th>Seats</th>
                        <th>Price</th>
                    </tr>
                </thead>

                <tbody >
                    {rooms.length && (rooms.map(room => {
                        return <tr>
                            <td>{room.id}</td>
                            <td>{room.num}</td>
                            <td>{room.type}</td>
                            <td>{room.seats}</td>
                            <td>{room.price}</td>

                        </tr>
                    }))}
                </tbody>
            </table>
            <button onClick={getdata} id="refresh"> Refresh</button>
        </div>
   
    )
}

