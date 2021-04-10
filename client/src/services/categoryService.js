import request from './requester';
import { SERVER_ADDRESS } from '../env';

export const getAll = () => {
    return request.get(`${SERVER_ADDRESS}/category/get-all`, null, null);
}