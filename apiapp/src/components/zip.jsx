import React, {useEffect,useState} from "react";
import axios from "axios"

const Zip=(props)=>{

    const [cityListState, setCityListState] = useState([]) ;
    // pokeList === this.state.pokeList
    // setPokeList === this. setState.pokeList
    
    useEffect ( () => {
        async function fetchLocality() {
        const list = await axios.get ("https://zip-api.eu/api/v1/info/US-"+props.zip);
        console.log(props.zip)
        setCityListState (list.data) ;
        // this.setState(list.data.results)
        }
        fetchLocality();
    }, []);
    console.log(cityListState);

    return(
        <div>
            {cityListState.map((item)=>{
                return <p>{item.postalcode}</p> ;
                })};
        </div>
    );
}

export default Zip;