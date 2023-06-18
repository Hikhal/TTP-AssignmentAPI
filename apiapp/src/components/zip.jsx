import React, {useEffect,useState} from "react";
import axios from "axios"

const Zip=(props)=>{
    
    // cityListState will hold the information about the zip code received from the API.
    // setCityListState is the function that we'll use to set this state.
    
    const [cityListState, setCityListState] = useState([]) ;
    
     // useEffect hook to perform side effects in our functional component.
     // Here, the side effect is the HTTP request to the API.
    
    useEffect ( () => {
        async function fetchLocality() {
            try{
                const list = await axios.get ("https://zip-api.eu/api/v1/info/US-"+props.zip);
                console.log(props.zip)
                setCityListState (list.data) ;
                 // Error handling in case the API request fails.
            }catch(error){
                console.error("Error getting data:" + error)
            }
        }
        fetchLocality();
        // The dependency array. Our effect will run again if the value of props.zip changes.
    }, [props.zip]);
    console.log(cityListState);
    
     // The render method, which returns what the component should render to the DOM.
    return(
        <div className="zipcodeInfo">
            <div>
                <h1> Zip Code: {props.zip}</h1>
                <p>CountryCode: {cityListState.country_code}</p>
                <p>lat: {cityListState.lat}</p>
                <p>lng {cityListState.lng}</p>
                <p>postal_code: {cityListState.postal_code}</p>
                <p>state: {cityListState.state}</p>
            </div>
        </div>

    );
}

export default Zip;
