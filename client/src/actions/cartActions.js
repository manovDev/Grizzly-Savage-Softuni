import {
    ADD_TO_CART,
    UPDATE_CART,
    REMOVE_PRODUCT
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


export const addToCart = (productId, productUnits, loc) => async (dispatch) => {
    try {
        const res = await getOneProduct(productId);
        const data = await res.json();


        if (data.error) {
            throw data.error;
        }

        if(data._id) {
            data.units = productUnits;
            data.loc = loc;
            dispatch(addToCartSuccess(data));
        }
    } catch (error) {
        console.log(error);
    }
}

export const updateCart = (productCounter, _id) => async (dispatch) => {
    const data = {productCounter, _id};

    dispatch(updateCartSuccess(data));
}

export const removeProduct = (id) => async (dispatch) => {
    const data = {id};
    
    dispatch(removeProductSuccess(data));
}
