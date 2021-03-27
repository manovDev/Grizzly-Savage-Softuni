import {
    SIGNIN,
    SIGNOUT,
    VERIFY,
} from '../actions/actionTypes';

const userInitialState = {
    
}

const userReducer = (state = userInitialState, action) => {
    switch (action.type) {
        case SIGNIN:
            return {
                ...state,
                
            }
        case SIGNOUT:
            return {
                ...userInitialState,
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