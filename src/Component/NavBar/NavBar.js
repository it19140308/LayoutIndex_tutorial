import React from 'react'
import './navbar.css'
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <div className="NavbarBox">
        
            
            <div className="leftBar">
                
                <span className="logo">Device controller</span>
            </div>
            <div className="centerBar">
                
            </div>
            <div className="rightBar">
                <Link to='/'><button className="navbarLink">Home</button></Link>
                <Link to='/location/'><button className="navbarLink">locations</button></Link>
                <Link to ='/device/'><button className="navbarLink">Devices</button></Link>
               
            </div>
        
    </div>
  )
}
