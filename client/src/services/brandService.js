import request from './requester';
import { SERVER_ADDRESS } from '../env';

export const getAll = () => {
    return request.get(`${SERVER_ADDRESS}/brand/get-all`, null, null);
}