import React, {useState} from 'react'
import './createlocation.css'
import NavBar from '../../Component/NavBar/NavBar'
import axios from 'axios'

export default function CreateLocation() {


    const [name,setName]=useState('');
    const [address,setAdress]=useState('');
    const[phone,setPhone]=useState('');

    function sendData(e){
        e.preventDefault();
        
        const newLocation ={
            name,
            address,
            phone
        }
        axios.post('http://localhost:8000/location/add',newLocation).then(()=>{
            alert("Location added Successfully!")
        }).catch((err)=>{
            alert(err)
        })

    }

    return (
    <div className="addBox">
        <NavBar/>
        <div className="registerContainer">
           <div className="lefpane">

           </div>
        <div className="Centerpane" >
           
            <form className='form' onSubmit={sendData}>
                <h1 className='registerTopic'>Add Locations </h1>
                <ui className='listInput'>
                <input placeholder='Human Readable Name' className='Inputform' required onChange={(e)=>{
                    setName(e.target.value);
                }}/>
                </ui>
                <ui className='listInput'>
                <input placeholder='Adress:' className='Inputform' required onChange={(e)=>{
                    setAdress(e.target.value);
                }}/>
                </ui>
                <ui className='listInput'>
                <input placeholder='Phone:' className='Inputform' required onChange={(e)=>{
                    setPhone(e.target.value);
                }}/>
                </ui>
                
                <button type='submit' className='submitButton' >Create</button>
               
            </form>

        
        </div>
        <div className="rightpane"></div>
        
    </div>

        </div>
  )
}
