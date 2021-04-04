import {
    SIGNIN,
    VERIFY,
    SIGNOUT,
} from '../actions/actionTypes';

const initialState = {
    user: null,
};

let localStorageUserState = JSON.parse(localStorage.getItem('user'));
localStorageUserState = localStorageUserState?.email ? { ...localStorageUserState, isLoggedIn: true } : initialState;

const userReducer = (state = localStorageUserState, action) => {
    switch (action.type) {
        case SIGNIN:
            return {
                ...state,
                user: action.payload.user,
                userId: action.payload._id,
                isLoggedIn: true
            };
        case VERIFY:
            return {
                ...state,
            };
        case SIGNOUT:
            return {
                ...initialState,
            };
        default:
            return {
                ...state,
            };
    }
};

export default userReducer;