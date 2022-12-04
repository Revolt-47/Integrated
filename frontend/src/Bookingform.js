import React from "react";
import { useState } from "react";
import axios from "axios";
import Button from 'react-bootstrap/Button'
import 'bootstrap/dist/css/bootstrap.min.css'
import { useNavigate } from "react-router-dom";

export default function Form({room,user}){

  const room_no = room.room;
  const active = user.email; 
  const [checkin,setcheckin] = useState("");
  const [checkout,setcheckout] = useState("");

  const navigate = useNavigate();

  const setdate1 = (e) =>{
    setcheckin(e.target.value);
}

const setdate2 = (e) =>{
    setcheckout(e.target.value);
}

async function postData(url = '', data) {
  

  // Default options are marked with *
axios({
method: 'post',

url: 'http://localhost:3001/newbooking',
data: {
   room_no : room_no,
   email : active,
   checkin : room.date1,
   checkout : room.date2,
}
});




}
function submit () {
  if(room_no && active ){
  postData();
  navigate('/dashboard')}
}
    
    return(
    <div>
            <div className="heading">
            <h1>My Hotel</h1>
            <span>Highland Street , Islamabad</span><br></br>
            <span>Phone : 051-12345</span>
            </div>

            <div>
                <label>Room number</label>
                <input type='text' placeholder={room_no} readOnly ></input> <br></br>
                <label>Email</label>
                <input type='text' placeholder={active} readOnly ></input> <br></br>
                <div class="elem-group inlined">
    <label for="checkin-date">Check-in Date</label>
    <input type="date" id="checkin-date" name="checkin" required value={room.date1} readOnly></input>
  </div>
  <div class="elem-group inlined">
    <label for="checkout-date">Check-out Date</label>
    <input type="date" id="checkout-date" name="checkout" required value={room.date2} readOnly></input>
  </div>
  <div class="elem-group inlined">
             
            </div>

            <div>
                <Button onClick={submit}>Book</Button>
            </div>

        </div>
        </div>)

}