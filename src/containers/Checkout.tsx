import React, { useContext } from 'react';
import '../styles/components/Checkout.css';
import { Link } from 'react-router-dom';
import { AppContext } from '../context/AppContext';

import { getTotalSumFromCart } from '../utils/utils';
import { IProduct } from '../interfaces/AppInterfaces';

const Checkout = () => {
    const { cart, removeFromCart } = useContext(AppContext);

    const handleRemove = (product: IProduct, i: number) => {
        removeFromCart(product, i);
        console.log(cart, product);
    };

    const handleSumTotal = () => getTotalSumFromCart(cart);

    return (
        <div className="Checkout">
            <div className="Checkout-content">
                {cart.length > 0 ? (
                    <h3>Lista de pedidos</h3>
                ) : (
                    <h3>Sin pedidos</h3>
                )}
                {cart.map((item, i) => (
                    <div className="Checkout-item" key={item.id}>
                        <div className="Checkout-element">
                            <h4>{item.title}</h4>
                            <span>${item.price}</span>
                        </div>
                        <button
                            type="button"
                            onClick={() => handleRemove(item, i)}
                        >
                            <i className="fas fa-trash-alt" title="Eliminar" />
                        </button>
                    </div>
                ))}
            </div>
            {cart.length > 0 && (
                <div className="Checkout-sidebar">
                    <h3>Precio total: ${handleSumTotal()}</h3>
                    <Link to="/checkout/information">
                        <button type="button">Continuar pedido</button>
                    </Link>
                </div>
            )}
        </div>
    );
};

export default Checkout;
