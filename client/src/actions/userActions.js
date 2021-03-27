import {
    SIGNIN,
    SIGNOUT,
    VERIFY,
} from './actionTypes';

export const signInSuccess = (userData) => ({
    type: SIGNIN,
    payload: userData,
})

export const signOutSuccess = () => ({
    type: SIGNOUT,
})

export const verify = () => ({
    type: VERIFY,
})