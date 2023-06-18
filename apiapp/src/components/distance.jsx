import React, {useEffect, useState} from 'react';
import axios from "axios";

const Distance = (props) => {
    const[distanceListState, setDistanceListState] = useState();

    useEffect( () => {
        async function fetchDistance(){
            //const list = await axios.get("https://zip-api.eu/api/v1/distance/US-11230/US-11230");
            try {
                const list = await axios.get("https://zip-api.eu/api/v1/distance/US-"+props.zip1 + "/US-" + props.zip2);
                setDistanceListState(list.data);
                console.log(list.data);
                
            } catch (error) {
                console.error()
            }
        }
        fetchDistance();
    },[props]);

    return(
        <div className='zipcodeInfo'>
          {distanceListState ? (
            <>
            <div>
                <h2>Start Location:</h2>
                <p>Latitude: {distanceListState.info.start.lat}</p>
                <p>Longitude: {distanceListState.info.start.lng}</p>
                <p>Country Code: {distanceListState.info.start.country_code}</p>
                <p>Postal Code: {distanceListState.info.start.postal_code}</p>
            </div>

            <div>
                <h2>End Location:</h2>
                <p>Latitude: {distanceListState.info.end.lat}</p>
                <p>Longitude: {distanceListState.info.end.lng}</p>
                <p>Country Code: {distanceListState.info.end.country_code}</p>
                <p>Postal Code: {distanceListState.info.end.postal_code}</p> 
            </div>

            <div>
                <h2>Distance:</h2>
                <p>{distanceListState.distance} {distanceListState.unit}</p>
            </div>
            </>
          ) : (
            <p>Loading...</p>
          )}
        </div>
      );
    }
export default Distance;