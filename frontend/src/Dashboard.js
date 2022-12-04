import React from "react";
import { useNavigate } from "react-router-dom";
import Button from 'react-bootstrap/Button'
import 'bootstrap/dist/css/bootstrap.min.css'
export default function Dashboard(props){

    const navigate = useNavigate();

    function viewrooms(){
        navigate('/room');
    }

    function viewbookings(){
        navigate('/booked');
    }

    return(
        <div className="dash">
            <div className="heading">
            <h1>My Hotel</h1>
            <span>Highland Street , Islamabad</span><br></br>
            <span>Phone : 051-12345</span>
            </div>
            <div className="options">
            <ul>
                <Button onClick={viewrooms}>View Rooms</Button>
                <Button onClick={viewbookings}>View Bookings</Button>
            </ul>
            </div>
            
        </div>
    )
}