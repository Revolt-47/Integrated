import React from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import axios from "axios"


export default function Login({setactiveuser}){

  // async function postData(url = '', data) {
  //   axios.get('http://localhost:3001/customers').then((response) => {
  //    // setbackend(response.data);
  //     setactiveuser(response.body)

  //     // Default options are marked with *
  //     var res = 'no response'
  // axios({
  //   method: 'post',
    
  //   url: 'http://localhost:3001/customers',
  //   data: {
  //      email : email,
  //      password : password,
  //   }
  // }).then(response =>{
  //   //callback(response.data.message);
  //   res = response.data.message
  //   // console.log(`Login Response: ${JSON.parse(response.body)}`);
  // }).catch(err =>{
  //   console.log(err);
  // });

  // console.log(res)

  //   });
  // }

  async function postData(url = '', data) {
    await axios({
      method: 'post',
      
      url: 'http://localhost:3001/customers',
      data: {
        email : email,
        password : password,
      }
    }).then(response =>{
      //callback(response.data.message);
      // res = response.data.message
      // var res =  response.data;
      console.log(response.data)
      setLoginRes(response.data)
      setactiveuser(loginRes)
      // console.log(`Login Response: ${response.body.name}`);
    })//.then(res => console.log(res.json()))
    .catch(err =>{
      console.log(err);
    });
  }

  
   

  let [password,setpassword] = useState("")
  let [email,setemail] = useState("")
  let [loginRes, setLoginRes] = useState(null)

    const handleemail = (e) =>{
        setemail(e.target.value);
        console.log(email);
    }

    const handlepass = (e) =>{
        setpassword(e.target.value);
        console.log(password)
    }

    const navigate = useNavigate();

    

    const changeAuthMode = () => {
      navigate('signup')
    }

    const submitdata = () => {
      postData('http://localhost:3001/customers','Daniyal');
      if(loginRes)
       {navigate('/dashboard')}
      }
      
      
    

    
   
    return (

    <div>
           <div className="heading">
            <h1>My Hotel</h1>
            <span>Highland Street , Islamabad</span><br></br>
            <span>Phone : 051-12345</span>
            </div>
        <div className="Auth-form-container">
          
            <div className="Auth-form-content">
              <h3 className="Auth-form-title">Sign In</h3>
              <div className="text-center">
                Not registered yet?{" "}
                <span className="link-primary" onClick={changeAuthMode}>
                  Sign Up
                </span>
              </div>
              <div className="form-group mt-3">
                <label>Email address</label>
                <input
                  type="email" required
                  className="form-control mt-1"
                  placeholder="Enter emai"
                  value={email}
                  onChange={handleemail}
                />
              </div>
              <div className="form-group mt-3">
                <label>Password</label>
                <input
                  type="password" required
                  className="form-control mt-1"
                  placeholder="Enter password"
                  value={password}
                  onChange={handlepass}
                />
              </div>
              <div className="d-grid gap-2 mt-3">
                <button  className="btn btn-primary" onClick={submitdata}>
                  Submit
                </button>
              </div>
              <p className="text-center mt-2">
                Forgot <a >password?</a>
              </p>
            </div>
          
        </div>
        </div>
      )
}