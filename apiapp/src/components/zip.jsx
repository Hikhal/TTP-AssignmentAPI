import React, {useEffect,useState} from "react";
import axios from "axios"

const Zip=(props)=>{

    const [cityListState, setCityListState] = useState([]) ;
    // pokeList === this.state.pokeList
    // setPokeList === this. setState.pokeList
    
    useEffect ( () => {
        async function fetchLocality() {
            try{
                const list = await axios.get ("https://zip-api.eu/api/v1/info/US-"+props.zip);
                console.log(props.zip)
                setCityListState (list.data) ;
            }catch(error){
                console.error("Error getting data:" + error)
            }
        }
        fetchLocality();
    }, [props.zip]);
    console.log(cityListState);
   
    return(
        <div>
            <h1> Zip Code: {props.zip}</h1>
            <h2>CountryCode: {cityListState.country_code}</h2>
            <h2>lat: {cityListState.lat}</h2>
            <h2>lng {cityListState.lng}</h2>
            <h2>postal_code: {cityListState.postal_code}</h2>
            <h2>state: {cityListState.state}</h2>
               
        </div>


        // <div>
        //     { Array.toArray(cityListState).map((item)=>{
        //        return <p>{item.postal_code}</p> ;
        //         })};
        // </div>
    );
}

export default Zip;