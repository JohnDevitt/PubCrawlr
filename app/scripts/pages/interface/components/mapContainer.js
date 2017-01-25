

import React from 'react';
import ReactDOM from 'react-dom';
import { GoogleMap, withGoogleMap, Marker } from "react-google-maps";

const MapContainer = withGoogleMap(props => (
    <GoogleMap
        defaultZoom={14}
        defaultCenter={{ lat: 51.4545, lng: -2.5879 }}
    >
        {props.markers.map (marker => (
            <Marker
                {...marker}
                onClick = {() => props.onMarkerClick(marker)}
            />
        ))}
    </GoogleMap>
))

export default MapContainer
