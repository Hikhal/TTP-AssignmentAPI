
import './App.css';
import Zip from "./components/zip.jsx"
import React, {useState} from "react";


function App() {
  const [zipcode, setZipcode] = useState("11230") ; //since we're passing zipcode as a string the return type of useState is expected to be of type string
  function updateZipcode(event){
    setZipcode(event.target.value);

  }
  

  return (
    <div >
      <Zip zip={zipcode}/>
      <input  type = "text" value = {zipcode} onChange = {updateZipcode}></input>

    </div>
  );

}

export default App;
