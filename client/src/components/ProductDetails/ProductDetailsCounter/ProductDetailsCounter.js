import { connect } from 'react-redux';

import './ProductDetailsCounter.scss';

const ProductDetailsCounter = ({ user, cart, maxQtty, productCounter, setProductCounter }) => {
    
    const handleCounter = (e) => {
        const {id} = e.target;

        switch (id) {
            case 'reduceCounter':
                if(productCounter.units - 1 < 1) return;

                setProductCounter(curr => {
                    const newUnits = curr.units - 1 === 0 ? 1 : curr.units - 1;
                    return {
                        units: newUnits,
                        lastAction: 'reduce'
                    }
                });
                break;
            case 'incCounter':
                if(productCounter.units + 1 > maxQtty) return;

                setProductCounter(curr => {
                    const newUnits = curr.units + 1 > maxQtty ? maxQtty : curr.units + 1;
                    return {
                        units: newUnits,
                        lastAction: 'inc'
                    }
                });
                break;
            default:
                break;
        }
    }

    return (
        <div className="product-counter">
            <button className="reduceCounter" id="reduceCounter" onClick={handleCounter}>-</button>
            <input
                type="number"
                min="1"
                max={maxQtty}
                value={productCounter.units}
                readOnly/>

            <button className="incCounter" id="incCounter" onClick={handleCounter}>+</button>
        </div>
    );
}

const mapStateToProps = (state) => ({
    user: state.user.user,
    cart: state.cart
});

// const mapDispatchToProps = {
//     updateCart,
// };

export default connect(mapStateToProps, null)(ProductDetailsCounter);