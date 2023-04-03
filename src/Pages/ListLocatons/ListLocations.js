import React,{useState,useEffect } from 'react'
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton'
import axios from 'axios'
import { Link, json, useNavigate } from "react-router-dom";
import './listlocations.css'
import NavBar from '../../Component/NavBar/NavBar';



//get location details
export default function ListLocations() {

    
  const[Locations, setLocation] =useState([]);

  const navigate =useNavigate();

  const[modeldata, setModeldata] =useState({
    
    name:"",
    address:"",
    phone:"",
    
  })


  useEffect(()=>{
      function getlocation(){
        axios.get("http://localhost:8000/location/").then((res)=>{
          console.log(res.data);

          setLocation(res.data);

        }).catch((err)=>{
          alert(err.massage)
        })
      }
      getlocation();
  },[])

  const showDetail = (id) =>
  {
    
    fetch(`http://localhost:8000/location/${id}`)
    .then(resposne=> resposne.json())
    .then(res=>setModeldata(res))
  }



  return (
    <div className='AllstudentContainer'>
        <NavBar/>
        
        <div class="row mt-2 ">
            <div class="col-lg-1 col-md-6 col-sm-12">
            </div>  
            <div class="col-lg-11 col-md-6 col-sm-12">
              <h1 class="heading" >
               Locations
              </h1>
             
              <Link to="/location/add"><button className='btn1'>+Create Location</button>
              </Link>
              
              
              
                <div class=" container">
                  <center >
                    <table class="tablebox">
                        <thead class="thead-light">
                            <tr>
                               
                                <th>Name</th>
                                <th>Address</th>
                                <th>Phone</th>
                               
                            </tr>
                        </thead>
                        <tbody className='tbody'>
                        
                          {Locations.map((names,id)=>
                           
                           <tr key={id} >

                              {console.log("kasun",names._id)}
                               
                              <td>{names.name}</td>
                              <td>{names.address}</td>
                              <td>{names.phone}</td>
                              
                              <td>
                              <Link to='/location/devices'>
                              <button class="btn btn-primary" onClick={() => {
                                localStorage.setItem("locationDetail",JSON.stringify(names))
                              }} >Devices</button>
                              </Link>
                            
                              <Link to='/location/update/id'>
                              <button class="btn btn-primary" onClick={(e)=>{
                                      localStorage.setItem("locationDetail",JSON.stringify(names));
                              }}>Update</button>
                              </Link>
                              <button class="btn btn-primary"  onClick={(e)=>{
                                      handleSubmit(names._id);
                              }}  >Delete</button>
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

      
  );
  //delete location
  
  function handleSubmit(id){
    const conf =window.confirm("Do you want to delete");

    if(conf){
      axios.delete('http://localhost:8000/location/delete/'+id)
      .then(res=>{
        alert('Location has deleted!');
        navigate('/location/')
      }).catch(err=>console.log(err))
    }
  }
}
// onClick={(e)=>{e=>handleSubmit(names.id)}}
