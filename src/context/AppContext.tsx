import React, { createContext, ReactNode, useReducer } from 'react';
import {initialState} from '../initialState';
import { IProduct } from '../interfaces/ProductInterface';
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

    const removeFromCart = (product: IProduct) => {
        dispatch({ type: 'REMOVE_FROM_CART', payload: product });
    };

    return (
        <AppContext.Provider value={{ ...state, addToCart, removeFromCart }}>
            {children}
        </AppContext.Provider>
    );
};
