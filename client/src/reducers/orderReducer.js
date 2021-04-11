import {
    GET_ORDERS,
    PATCH_ORDER,
} from '../actions/actionTypes';

const initialState = {
    orders: []
}

const orderReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_ORDERS:
            return {
                ...state,
                orders: action.payload
            }
        case PATCH_ORDER:
            return {
                ...state,
                orders: state.orders.map(x => x._id === action.payload._id ? action.payload : x),
            };
        default:
            return {
                ...state
            }
    }
}

export default orderReducer;