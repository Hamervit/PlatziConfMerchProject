import React from 'react';
import { IProduct } from '../interfaces/AppInterfaces';


interface ProductProps {
    product: IProduct;
    handleAddToCart: (product: IProduct) => () => void;
}

const Product = ({ product, handleAddToCart }: ProductProps) => {
    return (
        <div className="Products-item">
            <img src={product.image} alt={product.title} />
            <div className="Products-item-info">
                <h2>
                    {product.title}
                    <span>$ {product.price}</span>
                </h2>
                <p>{product.description}</p>
            </div>
            <button type="button" onClick={handleAddToCart(product)}>
                Comprar
            </button>
        </div>
    );
};

export default Product;
