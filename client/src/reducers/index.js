import { combineReducers } from 'redux';

import userReducer from './userReducer';
import productsReducer from './productReducer';

export default combineReducers({
    user: userReducer,
    products: productsReducer,
});