import request from './requester';
import { SERVER_ADDRESS } from '../env';

export const signUp = (data) => {
    return request.post(`${SERVER_ADDRESS}/user/signup`, data);
}

export const signIn = (uid, idToken) => {
    return request.post(`${SERVER_ADDRESS}/user/signin`, { uid }, idToken);
}

export const verifyUser = (uid, idToken) => {
    return request.post(`${SERVER_ADDRESS}/user/verifyuser`, { uid }, idToken);
}

