import React, { useContext } from 'react';
import Product from './Product';
import { IProduct } from '../interfaces/AppInterfaces';
import '../styles/components/Products.css';
import { AppContext } from '../context/AppContext';

const Products = () => {
    const { products, addToCart } = useContext(AppContext);

    const handleAddToCart = (product: IProduct) => () => addToCart(product);

    return (
        <div className="Products">
            <div className="Products-items">
                {products.map((product) => (
                    <Product
                        key={product.id}
                        product={product}
                        handleAddToCart={handleAddToCart}
                    />
                ))}
            </div>
        </div>
    );
};

export default Products;
