
import './App.css';
import Zip from "./components/zip.jsx"
import React, {useState} from "react";


function App() {
  const [zipcode, setZipcode] = useState([]) ;

  function updateZipcode(event){
    setZipcode(event.target.value);

  }
  

  return (
    <div >
      <Zip zip={zipcode}/>
      <input type='updateZipcode()'></input>

    </div>
  );

}

export default App;
