import React, { createContext, ReactNode, useReducer } from 'react';
import { initialState } from '../initialState';
import { IBuyer, IOrder, IProduct } from '../interfaces/AppInterfaces';
import AppReducer from '../reducers/AppReducer';

interface AppContextProps {
    children: ReactNode;
}

export const AppContext = createContext(initialState);

export const AppStore = ({ children }: AppContextProps) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    const addToCart = (product: IProduct) => {
        dispatch({ type: 'ADD_TO_CART', payload: product });
    };

    const removeFromCart = (product: IProduct, index: number) => {
        dispatch({ type: 'REMOVE_FROM_CART', payload: { product, index } });
    };

    const addToBuyer = (buyer: IBuyer) => {
        dispatch({ type: 'ADD_TO_BUYER', payload: buyer });
    };

    const addNewOrder = (order: IOrder) => {
        dispatch({ type: 'ADD_NEW_ORDER', payload: order });
    };

    return (
        <AppContext.Provider
            value={{
                ...state,
                addToCart,
                removeFromCart,
                addToBuyer,
                addNewOrder,
            }}
        >
            {children}
        </AppContext.Provider>
    );
};
