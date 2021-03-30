import {
    GET_PRODUCTS
} from './actionTypes';

import {
    getAll as getAllProducts,
} from '../services/productService';

export const getProductsSucces = (products) => ({
    type: GET_PRODUCTS,
    payload: products
})

export const getAll = () => async (dispatch) => {
    try {
        const res = await getAllProducts();
        const data = await res.json();

        if (data.error) {
            throw data.error;
        }

        dispatch(getProductsSucces(data));
    } catch (error) {
        console.log(error);
    }
}
