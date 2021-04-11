import {
    GET_ORDERS,
    PATCH_ORDER,
} from './actionTypes';

import {
    getAll as getAllOrders, patchOrder,
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

export const create = (idToken) => async (dispatch) => {
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


export const patchOrderSuccess = (order) => ({
    type: PATCH_ORDER,
    payload: order,
})

export const patchOrderAsync = (orderId, data, idToken) => async (dispatch) => {
    try {
        const res = await patchOrder(orderId, data, idToken);
        const order = await res.json();

        if (order.error) {
            throw order.error;
        }

        dispatch(patchOrderSuccess(order));
    } catch (error) {
        console.log(error);
    }
}