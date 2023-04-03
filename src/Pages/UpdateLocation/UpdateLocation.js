import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import {useParams} from "react-router-dom"
import { Link, json, useNavigate } from "react-router-dom";
import axios from 'axios'
import './updatelocation.css'


export default function UpdateLocation() {
  
    const {_id}=useParams();
    const[data, setData] =useState([]);
    const navigate =useNavigate();

    useEffect(()=>{
      axios.get(`http://localhost:8000/location/get/${_id}`)
      .then(res=>setData(res.data))
      .catch(err=>console.log(err))
    },[])

    function handleSubmit(id){
      
      axios.put('http://localhost:8000/location/update'+ id,data)
      .then(res=>{
        alert("data added Successfully!")
        navigate('/');
      })
    }



  return (
    <div className="addBox">
        <div className="registerContainer">
           
        <div className="Centerpane" >
           
            <form className='form' >
                <h1 className='registerTopic'>Add Locations </h1>
                <ui className='listInput'>
                <input placeholder='Human Readable Name' value ={data.name} className='Inputform' required
                onChange={e=>setData({...data,name:e.target.value})} />
                </ui>
                <ui className='listInput'>
                <input placeholder='Adress:' value ={data.address} className='Inputform' required
                onChange={e=>setData({...data,address:e.target.value})} />
                </ui>
                <ui className='listInput'>
                <input placeholder='Phone:' value ={data.phone} className='Inputform' required 
                onChange={e=>setData({...data,phone:e.target.value})}/>
                </ui>
                
                <button type='submit' className='submitButton' >Update</button>
               
            </form>

        
        </div>
       
        
    </div>

        </div>
  )
}
