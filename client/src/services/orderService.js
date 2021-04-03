import request from './requester';
import { SERVER_ADDRESS } from '../env';

export const placeOrder = (data, idToken) => {
    return request.post(`${SERVER_ADDRESS}/order/place-order`, data, idToken);
}

export const getAll = (idToken) => {
    return request.get(`${SERVER_ADDRESS}/order/get-all`, null, idToken);
}

export const getOne = (orderId, idToken) => {
    return request.get(`${SERVER_ADDRESS}/order/${orderId}`, null, idToken);
}