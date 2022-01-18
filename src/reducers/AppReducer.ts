const AppReducer = (state: any, action: { type: string; payload: any }) => {
    let reducerState;
    switch (action.type) {
        case 'ADD_TO_CART':
            reducerState = { ...state, cart: [...state.cart, action.payload] };
            break;
        case 'REMOVE_FROM_CART':
            reducerState = {
                ...state,
                cart: state.cart.filter(
                    (item: any) => item.id !== action.payload.id
                ),
            };
        default:
            reducerState = { ...state };
    }
    return reducerState;
};

export default AppReducer;
