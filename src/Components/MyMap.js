import React from "react";
import {Map, Marker} from "pigeon-maps";


const MyMap = (props) =>{
    return(
        <>
            <Map height={300} defaultCenter={props.mapvalue} defaultZoom={11}>
                <Marker width={50} anchor={props.mapvalue}/>
            </Map>
        </>
    )
}

export default MyMap;


// Uni:
//defaultCenter={[50.93632, 6.9892]} 
// anchor={[50.93632, 6.9892]} 

// Strandurlaub:
//defaultCenter={[30.90096, 31.4430]} 
// anchor={[30.90096, 31.4430]} 

// schönste Stadt in Europa
//defaultCenter={[41.3828939, 2.1774322]} 
// anchor={[41.3828939, 2.1774322]} 
