import {BrowserRouter,Routes,Route} from 'react-router-dom'
import './App.css';
import { useState } from 'react';
import Login from './Login';
import Signup from './Signup';
import Dashboard from './Dashboard';
import Room from './Rooms';
import Form from './Bookingform';
import Bookings from './bookings';

function App() {

  const [activeuser,setactiveuser] = useState({});
  const [room,setroom] = useState('');
 
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Login setactiveuser={setactiveuser}/>}/>
      <Route path = 'signup' element={<Signup/>}/>
      <Route path = 'dashboard' element={<Dashboard/>}/>
      <Route path = 'room' element={<Room setroom = {setroom} />}/>
      <Route path = 'book' element={<Form room = {room} user = {activeuser} />}/>
      <Route path = 'booked' element={<Bookings user = {activeuser}/>}/>
    </Routes>  
   </BrowserRouter>
    
  );
}

export default App;
