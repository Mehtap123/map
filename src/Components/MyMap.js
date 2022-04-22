import React from "react";
import {Map, Marker} from "pigeon-maps";


const MyMap = () =>{
    return(
        <>
            <Map height={300} defaultCenter={[50.879, 46997]} defaultZoom={11}>
                <Marker width={50} anchor={[50.879, 46997]}/>
            </Map>
        </>
    )
}

export default MyMap;