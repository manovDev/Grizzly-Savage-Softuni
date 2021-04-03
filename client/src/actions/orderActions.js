import {
    GET_ORDERS
} from './actionTypes';

import {
    getAll as getAllOrders,
} from '../services/orderService';

export const getOrdersSuccess = (orders) => ({
    type: GET_ORDERS,
    payload: orders
})

export const getAll = (idToken) => async (dispatch) => {
    try {
        const res = await getAllOrders(idToken);
        const data = await res.json();

        if (data.error) {
            throw data.error;
        }

        dispatch(getOrdersSuccess(data));
    } catch (error) {
        console.log(error);
    }
}
