import axios from 'axios';
import { useState } from "react";
import React from 'react';
import Button from 'react-bootstrap/Button'
import 'bootstrap/dist/css/bootstrap.min.css'
import { useNavigate } from 'react-router-dom';
export default function Room({setroom}){
    
    const [rooms,setrooms] = useState([{}]);
    const [checkin,setcheckin] = useState('');
    const [checkout,setcheckout] = useState('');

    console.log(checkin);

    const setdate11 = (e) =>{
        setcheckin(e.target.value);
    }
    
    const setdate22 = (e) =>{
        setcheckout(e.target.value);
    }

    

    async function postData(url = '', data) {

        await axios({
            method: 'post',
            
            url: 'http://localhost:3001/rooms',
            data: {
              checkin : checkin,
              checkout : checkout,
            }
          }).then(response =>{
            //callback(response.data.message);
            // res = response.data.message
            // var res =  response.data;
            console.log(response.data)
            setrooms(response.data)
            //setactiveuser(loginRes)
            // console.log(`Login Response: ${response.body.name}`);
          })//.then(res => console.log(res.json()))
          .catch(err =>{
            console.log(err);
          });
    }

    const navigate = useNavigate();


    // const onchange=(e)=>{
    //     setrooms((...rooms)=>{e.target.name:e.target.value})
    // }
    function nav(r){
        if(checkin && checkout){
        setroom({room:r,date1:checkin,date2:checkout});
        navigate('/book')}
        
    }


    

    const listItems = rooms.map(
        (element) => {
            return (
                <ul type="disc" >
                    <Button onClick={()=>nav(element.room_no)}     
                    >
                      Room number : {element.room_no} <br></br>
                      Room type : {element.type} <br></br>
                      Number of seats :  {element.seats} <br></br>
                      Description :{element.description} <br></br>
                      Price :  {element.price}
                    </Button>
                </ul>
            )
        }
    )


function submit(){
    if(checkin && checkout)
postData('http://localhost:3001/rooms','data');
}
//postData('http://localhost:3001/rooms','data');
   
    return(
        <div>
             <div className="heading">
            <h1>My Hotel</h1>
            <span>Highland Street , Islamabad</span><br></br>
            <span>Phone : 051-12345</span>
            </div>
            <div class="elem-group inlined">
    <label for="checkin-date">Check-in Date</label>
    <input type="date" id="checkin-date" name="checkin" required onChange={setdate11}></input>
  </div>
  <div class="elem-group inlined">
    <label for="checkout-date">Check-out Date</label>
    <input type="date" id="checkout-date" name="checkout" required onChange={setdate22}></input>
  </div>
            <div>
                {listItems}
            </div>
        <button onClick={submit}> Refresh</button>
        </div>
    )
}