import request from './requester';
import { SERVER_ADDRESS } from '../env';

export const signUp = (data) => {
    return request.post(`${SERVER_ADDRESS}/user/signup`, data);
}
