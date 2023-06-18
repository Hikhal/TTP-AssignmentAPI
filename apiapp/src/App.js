
import './App.css';
import Zip from "./components/zip.jsx"
import React, {useState} from "react";
import Distance from './components/distance'


function App() {
  const [zipcode, setZipcode] = useState("11230") ; //since we're passing zipcode as a string the return type of useState is expected to be of type string
  function updateZipcode(event){
    setZipcode(event.target.value);

  }
  //Will be sent to the distance.jsx child component
  const [zipcode1, setZipcode1] = useState({
    zipcode1: "11230",
    zipcode2: "35004"
  }) ; 

  function updateZipcode1(event){
    setZipcode1((prev)=>({...prev, zipcode1: event.target.value}))
  }
  
  function updateZipcode2(event){
    setZipcode1((prev)=>({...prev, zipcode2: event.target.value}))
  }
  

  return (
    <div >
      <div className='form'>
        <Zip zip={zipcode}/>
        <input  type = "text" value = {zipcode} onChange = {updateZipcode}></input>
      </div>

      <Distance  zip1 ={zipcode1.zipcode1} zip2={zipcode1.zipcode2}/>
      <div className='form'>
        <input type = "text" placeholder="Zipcode1" onChange={updateZipcode1}></input>
        <br></br>
        <input type = "text" placeholder="Zipcode2" onChange={updateZipcode2}></input>
      </div>

    </div>
  );

}

export default App;
