import { IProduct } from './ProductInterface';

export interface IAppInitialState {
    addToCart: (product: IProduct) => void;
    removeFromCart: (product: IProduct) => void;
    cart: IProduct[];
    products: IProduct[];
}
