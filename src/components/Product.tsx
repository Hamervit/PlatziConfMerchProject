import React from 'react';
import { IProduct } from '../interfaces/ProductInterface';

interface ProductProps {
    product: IProduct;
}

const Product = ({ product }: ProductProps) => {
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
            <button type="button">Comprar</button>
        </div>
    );
};

export default Product;
