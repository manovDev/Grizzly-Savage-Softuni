import {
    SIGNIN,
    VERIFY,
} from './actionTypes';

import firebase from '../firebase';
import { 
    signUp as singUpService,
    signIn as singInService,
    verifyUser
} from '../services/userService';

export const signInSuccess = (userData) => ({
    type: SIGNIN,
    payload: userData,
})

export const verify = () => ({
    type: VERIFY,
})

export const signUp = (data) => async (dispatch) => {
    
    const response = await singUpService(data);
    const responseJSON = await response.json();

    if (responseJSON.error) {
        return { error: responseJSON.error };
    } else {
        return responseJSON;
    }
}

export const verifyAuth = () => (dispatch) => {
    firebase.auth().onAuthStateChanged(async (user) => {
        if (user) {
            const uid = user.uid;
            const idToken = user.za;
            const response = await verifyUser(uid, idToken);
            const userData = await response.json();
            
            dispatch(signInSuccess({user: userData}));
        } else {
            dispatch(verify());
        }
    });
}

export const signIn = (email, password) => async (dispatch) => {
    return firebase.auth().signInWithEmailAndPassword(email, password)
            .then(firebaseRes => {
                const uid = firebaseRes.user.uid;
                const idToken = firebaseRes.user.za;
                return singInService(uid, idToken);
            })
            .then(res => res.json())
            .then(user => {
                dispatch(signInSuccess({ user }))
            })
            .catch(err => {
                return err;
            });
    
}
