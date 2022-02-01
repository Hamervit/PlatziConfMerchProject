import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import { MAPS_API } from '../constantes/AppConstants';

interface MapProps {
    address: { lat: number; lng: number };
}

const Map = ({ address }: MapProps) => {
    const mapStyles = {
        height: '50vh',
        width: '100%',
    };

    const defaultCenter = {
        lat: address.lat,
        lng: address.lng,
    };

    return (
        <LoadScript googleMapsApiKey={MAPS_API}>
            <GoogleMap
                mapContainerStyle={mapStyles}
                zoom={9}
                center={defaultCenter}
            >
                <Marker position={defaultCenter}></Marker>
            </GoogleMap>
        </LoadScript>
    );
};

export default Map;
