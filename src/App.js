import Createdevice from "./Pages/CreateDivices/Createdevice.js";
import CreateLocation from "./Pages/CreateLocations/CreateLocation.js";
import Home from "./Pages/Home/Home.js";
import { BrowserRouter as BRouter, Route, Routes } from "react-router-dom";
import ListLocations from "./Pages/ListLocatons/ListLocations.js";
import UpdateDevice from "./Pages/UpdateDevice/UpdateDevice.js";
import UpdateLocation from "./Pages/UpdateLocation/UpdateLocation.js";
import locationDevice from "./Pages/locationDevice/locationDevice.js";
import ListDevices from "./Pages/ListDevices/ListDevices.js";



function App() {
  return (
    
   <BRouter>
    <Routes>

      <Route path="/" Component={Home}></Route>
      <Route path="/device/add" Component={Createdevice}></Route>
      <Route path="/location/add" Component={CreateLocation}></Route>
      <Route path="/location/" Component={ListLocations}></Route>
      <Route path="/location/update/id" Component={UpdateLocation}></Route>
      <Route path="/location/devices" Component={locationDevice}></Route>
      <Route path="/device/" Component={ListDevices}></Route>
      <Route path="/location/delete/id" ></Route>
     


    </Routes>
   </BRouter>
    
  );
}

export default App;
