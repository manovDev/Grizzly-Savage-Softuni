import {
    ADD_TO_CART,
    UPDATE_CART,
} from './actionTypes';

import {
    getOne as getOneProduct,
} from '../services/productService';

export const addToCartSuccess = (product) => ({
    type: ADD_TO_CART,
    payload: product
})

export const updateCartSuccess = (product) => ({
    type: UPDATE_CART,
    payload: product
})

export const removeProductSuccess = (product) => ({
    type: REMOVE_PRODUCT,
    payload: product
})


export const addToCart = (productId, productUnits) => async (dispatch) => {
    try {
        const res = await getOneProduct(productId);
        const data = await res.json();


        if (data.error) {
            throw data.error;
        }

        if(data._id) {
            data.units = productUnits;
            dispatch(addToCartSuccess(data));
        }
    } catch (error) {
        console.log(error);
    }
}

