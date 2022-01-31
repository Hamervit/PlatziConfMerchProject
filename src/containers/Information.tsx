import React, { useContext, useRef } from 'react';
import '../styles/components/Information.css';
import { Link, useNavigate } from 'react-router-dom';
import { AppContext } from '../context/AppContext';
import { IBuyer } from '../interfaces/AppInterfaces';

const Information = () => {
    const navigate = useNavigate();
    const { cart, addToBuyer } = useContext(AppContext);

    const form = useRef(null);

    const handleSubmit = () => {
        const formData = new FormData(form.current);
        const buyer: IBuyer = {
            name: formData.get('name').toString(),
            email: formData.get('email').toString(),
            address: formData.get('address').toString(),
            apto: formData.get('apto').toString(),
            city: formData.get('city').toString(),
            country: formData.get('country').toString(),
            state: formData.get('state').toString(),
            cp: formData.get('cp').toString(),
            phone: formData.get('phone').toString(),
        };

        addToBuyer(buyer);
        navigate('/checkout/payment');
    };

    return (
        <div className="Information">
            <div className="Information-content">
                <div className="Information-head">
                    <h2>Información de contacto</h2>
                </div>
                <div className="Information-form">
                    <form ref={form}>
                        <input
                            type="text"
                            placeholder="Nombre completo"
                            name="name"
                        />
                        <input
                            type="text"
                            placeholder="Correo electrónico"
                            name="email"
                        />
                        <input
                            type="text"
                            placeholder="Dirección"
                            name="address"
                        />
                        <input type="text" placeholder="Apto" name="apto" />
                        <input type="text" placeholder="Ciudad" name="city" />
                        <input type="text" placeholder="País" name="country" />
                        <input type="text" placeholder="Estado" name="state" />
                        <input
                            type="text"
                            placeholder="Código postal"
                            name="cp"
                        />
                        <input
                            type="text"
                            placeholder="Teléfono"
                            name="phone"
                        />
                    </form>
                </div>
                <div className="Information-buttons">
                    <div className="Information-back">
                        <Link to="/checkout/">Regresar</Link>
                    </div>
                    <div className="Information-next">
                        <button type="button" onClick={handleSubmit}>
                            Pagar
                        </button>
                    </div>
                </div>
            </div>
            <div className="Information-sidebar">
                <h3>Pedido:</h3>
                {cart.map((item) => (
                    <div className="Information-item">
                        <div className="Information-element">
                            <h4>{item.title}</h4>
                            <span>${item.price}</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Information;
