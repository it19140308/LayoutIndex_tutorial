import React,{useState,useEffect } from 'react'
import axios from 'axios'
import { Link, json, useNavigate } from "react-router-dom";
import './listdevice.css'
import NavBar from '../../Component/NavBar/NavBar';

export default function ListDevices() {
    const[devices, setDevices] =useState([]);
    const navigate =useNavigate();

    const[modeldata, setModeldata] =useState({
      
      serial_number:"",
      type:"",
      status:"",
      
    })
  
  
    useEffect(()=>{
        function getDivices(){
          axios.get("http://localhost:8000/device/").then((res)=>{
            console.log(res.data);
  
            setDevices(res.data);
  
          }).catch((err)=>{
            alert(err.massage)
          })
        }
        getDivices();
    },[])
  
    const showDetail = (name) =>
    {
      
      fetch(`http://localhost:8000/device/${name}`)
      .then(resposne=> resposne.json())
      .then(res=>setModeldata(res))
    }
  
  
  
    return (
      <div className='alldivicescontainer'>
        
          <NavBar/>
          <div class="row mt-2 ">
              <div class="col-lg-1 col-md-6 col-sm-12">
              </div>  
              <div class="col-lg-11 col-md-6 col-sm-12">
                <h1 class="heading" >
                 Devices
                </h1>
               
                <Link to="/device/add"><button className='btn1'>+Create Device</button>
                </Link>
                
                
                
                  <div class=" container">
                    <center >
                      <table class="tablebox">
                          <thead class="thead-light">
                              <tr>
                                 
                                  <th>Serial Number</th>
                                  <th>Type</th>
                                  <th>Status</th>
                                 
                              </tr>
                          </thead>
                          <tbody className='tbody'>
                          
                            {devices.map((names,name)=>
                             <tr key={name}>
                                 
                                <td>{names.serial_number}</td>
                                <td>{names.type}</td>
                                <td>{names.status}</td>
                                
                              <td>
                              <td>
                             
                            
                              <Link to='/device/update/id'>
                              <button class="btn btn-primary" onClick={(e)=>{
                                      localStorage.setItem("locationDetail",JSON.stringify(names));
                              }}>Update</button>
                              </Link>
                              <button class="btn btn-primary"  onClick={(e)=>{
                                      handleSubmit(names._id);
                              }}  >Delete</button>
                              </td>
                              </td>
                                
                             </tr>
                             )}
                          </tbody>
                      </table>
                      </center>
                  </div>
              
          </div>
        </div>
  
                              
      
        </div>
  
        
    )

    function handleSubmit(id){
      const conf =window.confirm("Do you want to delete");
  
      if(conf){
        axios.delete('http://localhost:8000/device/delete/'+id)
        .then(res=>{
          alert('Location has deleted!');
          navigate('/device/')
        }).catch(err=>console.log(err))
      }
    }
   
}
