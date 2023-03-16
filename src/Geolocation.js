import React, {useEffect,useState} from "react";




const GeoLocation = ()=> {

const [lat,setLat] = useState([]);
const [long,setLong] = useState([]);

    useEffect(()=>{
    navigator.geolocation.getCurrentPosition(function(position) {
        setLat(position.coords.latitude);
        setLong(position.coords.longitude);
    });

},[lat,long]);   

return(
<button onClick={()=>{console.log(lat,long)}}>Get Location</button>
);
}

export default GeoLocation;