import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import '../styles/components/Payment.css';
import { PayPalButton } from 'react-paypal-button-v2';
import { CLIENT_ID } from '../constantes/AppConstants';
import { getTotalSumFromCart } from '../utils/utils';
import { IOrder } from '../interfaces/AppInterfaces';
import { useNavigate } from 'react-router-dom';

const Payment = () => {
    const navigate = useNavigate();
    const { cart, buyer, addNewOrder } = useContext(AppContext);

    const paypalOptions = {
        clientId: CLIENT_ID,
        intent: 'capture',
        currency: 'USD',
    };

    const buttonStyles = {
        layout: 'vertical',
        shape: 'rect',
    };

    const handlePaymentSuccess = (data: any) => {
        console.log(data);
        if (data.status === 'COMPLETED') {
            const NEW_ORDER: IOrder = {
                buyer: buyer,
                products: cart,
                payment: data,
            };

            addNewOrder(NEW_ORDER);
            navigate('/checkout/success');
        }
    };

    return (
        <div className="Payment">
            <div className="Payment-content">
                <h3>Resumen del pedido:</h3>
                {cart.map((item) => (
                    <div className="Payment-item" key={item.id}>
                        <div className="Payment-element">
                            <h4>{item.title}</h4>
                            <span>${item.price}</span>
                        </div>
                    </div>
                ))}
                <div className="Payment-button">
                    <PayPalButton
                        options={paypalOptions}
                        style={buttonStyles}
                        amount={getTotalSumFromCart(cart)}
                        onSuccess={handlePaymentSuccess}
                        onError={() =>
                            console.error(
                                'Ha ocurrido un error en la trasancción de PayPal'
                            )
                        }
                    />
                </div>
            </div>
            <div />
        </div>
    );
};

export default Payment;
