import request from './requester';
import { SERVER_ADDRESS } from '../env';

export const placeOrder = (data, idToken) => {
    return request.post(`${SERVER_ADDRESS}/order/place-order`, data, idToken);
}