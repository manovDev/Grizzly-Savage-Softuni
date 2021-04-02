import {
    ADD_TO_CART,
    UPDATE_CART,
    REMOVE_PRODUCT
} from '../actions/actionTypes';

const initialState = {
    products: [],
    totalPrice: 0.00,
    qtty: 0
}

const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_CART:
            const productsArr = [...state.products];
            let foundProductIndex = productsArr.findIndex(x => x._id === action.payload._id);

            if(foundProductIndex === -1) {
                let newItem;
                let totalPrice;

                if(action.payload.loc === 'details') {
                    newItem = Object.assign(action.payload, {units: action.payload.units});
                    totalPrice = state.totalPrice + (action.payload.price * action.payload.units);
                } else {
                    newItem = Object.assign(action.payload, {units: 1});
                    totalPrice = state.totalPrice + action.payload.price;

                }
                return {
                    ...state,
                    products: [...state.products, newItem],
                    totalPrice: totalPrice,
                    qtty: state.products.length + 1
                }
                
            } else {
                productsArr[foundProductIndex].units = action.payload.units;

                return {
                    ...state,
                    products: productsArr,
                    totalPrice: state.totalPrice + action.payload.price,
                    qtty: state.products.length
                }

            }

            
        case UPDATE_CART:
            const foundUpdateProduct = state.products.filter(product => product._id === action.payload._id);
            const newArray = [...state.products];

            let foundIndex = newArray.findIndex(x => x._id === action.payload._id);
            let actionType = action.payload.productCounter.lastAction;
            let newTotalPrice = 0;
            
            if(actionType === 'reduce') {
                newTotalPrice = state.totalPrice - foundUpdateProduct[0].price;
            } else if(actionType === 'inc') {
                newTotalPrice = state.totalPrice + foundUpdateProduct[0].price;
            } else {
                newTotalPrice = state.totalPrice;
            }
            
            newArray[foundIndex].units = action.payload.productCounter.productUnits;
            
            return {
                ...state,
                products: newArray,
                totalPrice: newTotalPrice,
                qtty: state.products.length
            }
        case REMOVE_PRODUCT:
            const foundRemProduct = state.products.filter(product => product._id === action.payload.id);
            const remProductArray = state.products.filter(product => product._id !== action.payload.id);

            return {
                ...state,
                products: remProductArray,
                totalPrice: state.totalPrice - (foundRemProduct[0].price * foundRemProduct[0].units),
                qtty: state.products.length - 1
            }
        default:
            return {
                ...state
            }
    }
}

export default cartReducer;