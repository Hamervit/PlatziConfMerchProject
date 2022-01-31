import { IAppInitialState, IProduct } from '../interfaces/AppInterfaces';

const AppReducer = (
    state: IAppInitialState,
    action: { type: string; payload: any }
) => {
    let reducerState;
    switch (action.type) {
        case 'ADD_TO_CART':
            reducerState = { ...state, cart: [...state.cart, action.payload] };
            break;
        case 'REMOVE_FROM_CART':
            reducerState = {
                ...state,
                cart: state.cart.filter(
                    (item: IProduct, index: number) =>
                        item.id !== action.payload.product.id &&
                        action.payload.index !== index
                ),
            };
            break;
        case 'ADD_TO_BUYER':
            reducerState = {
                ...state,
                buyer: action.payload,
            };
            break;
        case 'ADD_NEW_ORDER':
            reducerState = {
                ...state,
                orders: [...state.orders, action.payload],
            };
            break;
        default:
            reducerState = { ...state };
    }
    return reducerState;
};

export default AppReducer;
