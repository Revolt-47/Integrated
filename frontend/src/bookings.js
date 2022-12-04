import axios from "axios"
import { useState } from "react"
export default function Bookings({user}){
    
    const [books,setbooks] = useState([{}]);
    
        
        postData('http://localhost:3001/booking','data');
    
    

    async function postData(url = '', data) {
        await axios({
          method: 'post',
          
          url: 'http://localhost:3001/booking',
          data: {
            email : user.email,
          }
        }).then(response =>{
          //callback(response.data.message);
          // res = response.data.message
          // var res =  response.data;
          console.log(response.data)
          setbooks(response.data);
    
          // console.log(`Login Response: ${response.body.name}`);
        })//.then(res => console.log(res.json()))
        .catch(err =>{
          console.log(err);
        });
      }

      const listItems = books.map(
        (element) => {
            return (
                <ul type="disc" >
                    <button      style={{ 
                        fontWeight: 'bold', 
                        color: 'blue',
                        textalign : 'centre' }}
                    >
                      Room number : {element.room_no} <br></br>
                      Checkin Date : {element.checkin} <br></br>
                      Checkout Date : {element.checkout}
                    </button>
                </ul>
            )
        }
    )


    return(
        <div>
            
            {listItems}
        </div>
    )
}