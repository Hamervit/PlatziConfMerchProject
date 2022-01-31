export interface IBuyer {
    name: string;
    email: string;
    address: string;
    apto: string;
    city: string;
    country: string;
    state: string;
    cp: string;
    phone: string;
}

export interface IProduct {
    id: string;
    image: string;
    title: string;
    price: number;
    description: string;
}

export interface IOrder {
    buyer: IBuyer;
    products: IProduct[];
    payment: any;
}

export interface IAppInitialState {
    addToCart: (product: IProduct) => void;
    removeFromCart: (product: IProduct, index: number) => void;
    addToBuyer: (buyer: IBuyer) => void;
    addNewOrder: (order: IOrder) => void;
    cart: IProduct[];
    products: IProduct[];
    buyer: IBuyer;
    orders: IOrder[];
}
