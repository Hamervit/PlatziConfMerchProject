import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import Map from '../components/Map';
import '../styles/components/Success.css';
import useGoogleAddress from '../hooks/useGoogleAddress';
const Success = () => {
    const { buyer } = useContext(AppContext);
    const address = useGoogleAddress(buyer.address);
    
    return (
        <div className="Success">
            <div className="Success-content">
                <h2>{`${buyer.name}, gracias por tu compra `}</h2>
                <span>Tu pedido llegará en 3 días a tu dirección</span>
                <div className="Success-map">
                    <Map address={address} />
                </div>
            </div>
        </div>
    );
};

export default Success;
