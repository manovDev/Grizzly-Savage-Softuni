import {
    SIGNIN,
    VERIFY,
} from '../actions/actionTypes';

const initialState = {
    user: null,
};

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case SIGNIN:
            return {
                ...state,
                user: action.payload.user,
                userId: action.payload._id,
            };
        case VERIFY:
            return {
                ...state,
            };
        default:
            return {
                ...state,
            };
    }
};

export default userReducer;