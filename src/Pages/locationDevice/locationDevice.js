import React from 'react'
//import './locationDevice.css'
import  './locationDevice.css'
import NavBar from '../../Component/NavBar/NavBar';

export default function locationDevice() {
    const details = JSON.parse(localStorage.getItem('locationDetail'))
    console.log("locationDetail : ",details.devices_id)
    const devices= details.devices_id;
  return (
   
    
    <div className='box'>
    <NavBar/>
     <center>
  <table class="tablebox">

      <thead class="thead-light">
          <tr>
             
              <th>Serial number</th>
              <th>Type</th>
              <th>Status</th>
             
          </tr>
      </thead>
      <tbody className='tbody'>
      
        {devices.map((data,name)=>
         <tr key={name}>
             
            <td>{data.serial_number}</td>
            <td>{data.type}</td>
            <td>{data.status}</td>
            
            
         </tr>
         )}
      </tbody>
  </table>
  </center>
  </div>
  




  )}


  /* <div>{devices.map((data,index) => (
    <label> Device no : {data.serial_number} </label>,
    <label></label>
   
 ))}
 </div>*/