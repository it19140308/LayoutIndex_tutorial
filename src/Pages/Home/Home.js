import React from 'react'
import './home.css'
import NavBar from '../../Component/NavBar/NavBar'

import { Link } from "react-router-dom";
import Createdevice from '../CreateDivices/Createdevice';


export default function Home() {
  return (
    <div className='home container'>
  
  <div class="img" ></div>
  <div class="center">
    <div class="title">Locations and Devices</div>
    <div class="sub_title">All the details</div>
    <div class="btns">
    <Link to="/location/">
      <button>Locations</button>
      </Link>
      <Link to="/device/">
      <button>Devices</button></Link>
    </div>
  </div>
      
     
    </div>
  )
}
 /*
    <Link to="/device/add">
      <button   >Create Device</button>
      </Link>
      <Link to="/location/add">
      <button   >Create Location</button>
      </Link>
      <Link to="/location/">
      <button   > Locations</button>
      </Link>
      */
