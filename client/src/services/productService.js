import request from './requester';
import { SERVER_ADDRESS } from '../env';

export const getAll = () => {
    return request.get(`${SERVER_ADDRESS}/product/get-all`, null, null);
}

export const getOne = (productId) => {
    return request.get(`${SERVER_ADDRESS}/product/${productId}`, null, null);
}

export const create = (data) => {
    return request.post(`${SERVER_ADDRESS}/product/create`, data, null);
}