import {
    SIGNIN,
} from './actionTypes';

import firebase from '../firebase';
import { 
    signUp as singUpService,
    signIn as singInService,
} from '../services/userService';

export const signInSuccess = (userData) => ({
    type: SIGNIN,
    payload: userData,
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
