import React from 'react'
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import {useNavigate,BrowserRouter,Router,Link, Route, Routes} from 'react-router-dom'

function Navbar() {

    const navigate = useNavigate();

    function addRooms(){
        navigate('/Add');
    }
    function displayRooms(){
        navigate('/Display');
    }
    function editRooms(){
        navigate('/Edit');
    }
    function deleteRooms(){
        navigate('/Delete');
    }

    return (
        <div>
            <nav class="navbar navbar-expand-lg">
                <a class="navbar-brand" href="#">Hotel Management System</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav">

                        <li class="nav-item">
                            <a class="nav-link" href="#">Register</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Login</a>
                        </li>



                    </ul>

                    <ul class="navbar-nav4">

                        <DropdownButton id="dropdown-basic-button" title="Manage Rooms">
                            <Dropdown.Item onClick={addRooms}>Add Rooms</Dropdown.Item>
                            <Dropdown.Item onClick={displayRooms}>View Rooms</Dropdown.Item>
                            <Dropdown.Item onClick={deleteRooms}>Delete Rooms</Dropdown.Item>
                            <Dropdown.Item onClick={editRooms}>Edit Rooms</Dropdown.Item>
                        </DropdownButton>

                    </ul>
                </div>



            </nav>

        </div>)
}

export default Navbar