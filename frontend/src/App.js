import './App.css';
import Navbar from './Components/Navbar';
import AdminScreen from './Screens/Admin';
import DisplayRoom from './Screens/DisplayRooms';
import AddRooms from './Screens/AddRooms';
import DeleteRoom from './Screens/DeleteRooms';
import EditRoom from './Screens/EditRooms';
import {BrowserRouter,Router,Link, Route, Routes} from 'react-router-dom'
function App() {
  return (
    <div className="App">
     
     <BrowserRouter>
     <Navbar/>
     <Routes>
     <Route path="/" element={<DisplayRoom/>}/>
      <Route path="/Display" element={<DisplayRoom/>}/>
      <Route path="/Add" element={<AddRooms/>}/>
      <Route path="/Delete" element={<DeleteRoom/>}/>
      <Route path="/Edit" element={<EditRoom/>}/>
      </Routes>
     </BrowserRouter>
    
    </div>
  );
}

export default App;
