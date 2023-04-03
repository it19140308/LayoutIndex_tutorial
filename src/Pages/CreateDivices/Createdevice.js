import React ,{useEffect, useState} from 'react'
import './createdevice.css'
import NavBar from '../../Component/NavBar/NavBar'
import axios from 'axios'


export default function Createdevice() {


    const[serial_number,setSerial_number]= useState('');
    const[type,setType] = useState('');
    const[status,setState] = useState('');
    const[locations,setLocations]=useState([]);
    const[location,setLocation]=useState('');

    function sendData(e){
       e.preventDefault();
       
       const newDevice={
        serial_number,
        type,
        status,
        location
      
        
       }

       axios.post('http://localhost:8000/device/add', newDevice).then(()=>{
        alert("Device Aded Successfully!")
       }).catch((err)=>{
        alert(err)
       })
    }

    

    function getData(){
        axios.get('http://localhost:8000/location/').then((data)=>{
            
            setLocations(data.data)
        }).catch((err)=>{
            console.log(err)
        })
    }

    useEffect(() => {
      getData();
    
     
    }, [])

    useEffect(() => {
      
    console.log('selected location',location)
      
    }, [location])
    
    




  return (
    <div className="addBox">
       
        <div className="deviceContainer">
        <NavBar/>
           <div className="lefpane">

           </div>
        <div className="Centerpane" >
           
            <form className='form' onSubmit={sendData}>
                <h1 className='Topic'>Add Devices </h1>
                <ul className='listInput'>
                <input placeholder='Serial Number:' className='Inputform' required onChange={(e)=>{
                    setSerial_number(e.target.value);
                }}/>
                </ul>
                <ul className='listInput'>
                <select className='Inputform' placeholder='Type' onChange={(e)=>{
                    setType(e.target.value);
                }}>
                    <option value=''>Select Type</option>
                    <option value='pos'>Pos</option>
                    <option value='kisok'>Kisok</option>
                    <option value='signage'>Signage</option>
                </select>
                </ul>
                <ul className='listInput'>
                    <select className='Inputform' onChange={(e)=>setLocation(e.target.value)}>
                        <option value=""  >Select Location</option>
                        {locations.map((location,id)=>(
                            <option key={id} value={location._id}> {location.name}</option>
                        ))}
                    </select>
                </ul>
                <ul className='listInput'>
                <select className='Inputform' placeholder='Type' onChange={(e)=>{
                    setState(e.target.value);
                }}>
                    
                    <option value=''>Select Status</option>
                    <option value='active'>Active</option>
                    <option value='inactive'>inactive</option>
                    
                </select>
                </ul>
                
                
                <button type='submit' className='submitButton' >Create</button>
               
            </form>

        
        </div>
        <div className="rightpane"></div>
        
    </div>

        </div>
  )
}
