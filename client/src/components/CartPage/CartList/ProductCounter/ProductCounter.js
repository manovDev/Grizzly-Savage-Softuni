import { connect } from 'react-redux';
import { updateCart } from '../../../../actions/cartActions';

import { useState, useEffect } from 'react';
import './ProductCounter.scss';

const ProductCounter = ({ user, cart, productId, updateCart, productUnits, maxQtty }) => {
    const [productCounter, setProductCounter] = useState({productUnits, lastAction: ''});
    useEffect(() => {
        if(productCounter.lastAction) {
            updateCart(productCounter, productId);
            setProductCounter(curr => {
                return {
                    ...curr,
                    lastAction: ''
                }
            });
        }
        
    }, [productCounter, updateCart, productId]);

    const handleCounter = (e) => {
        const {id} = e.target;

        switch (id) {
            case 'reduceCounter':
                if(productCounter.productUnits - 1 < 1) return;

                setProductCounter(curr => {
                    const newUnits = curr.productUnits - 1 === 0 ? 1 : curr.productUnits - 1;
                    return {
                        productUnits: newUnits,
                        lastAction: 'reduce'
                    }
                });
                break;
            case 'incCounter':
                if(productCounter.productUnits + 1 > maxQtty) return;

                setProductCounter(curr => {
                    const newUnits = curr.productUnits + 1 > maxQtty ? maxQtty : curr.productUnits + 1;
                    return {
                        productUnits: newUnits,
                        lastAction: 'inc'
                    }
                });
                break;
            default:
                break;
        }
    }

    return (
        <div className="product-qtty">
            <button className="reduceCounter" id="reduceCounter" onClick={handleCounter}>-</button>
            <input
                type="number"
                min="1"
                max={maxQtty}
                value={productCounter.productUnits}
                readOnly/>

            <button className="incCounter" id="incCounter" onClick={handleCounter}>+</button>
        </div>
    );
}

const mapStateToProps = (state) => ({
    user: state.user.user,
    cart: state.cart
});

const mapDispatchToProps = {
    updateCart,
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductCounter);