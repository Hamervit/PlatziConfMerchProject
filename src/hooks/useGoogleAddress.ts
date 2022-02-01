import { useState, useEffect } from 'react';
import axios from 'axios';
import { MAPS_API } from '../constantes/AppConstants';

const useGoogleAddress = (address: string) => {
    const [map, setMap] = useState({ lat: 0, lng: 0 });
    const API = `https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=${MAPS_API}`;

    useEffect(() => {
        async () => {
            const response = await axios(API);
            setMap(response.data.results[0].geometry.location);
        };
    }, [address]);

    return map;
};

export default useGoogleAddress;
