import { connect } from 'react-redux';

import './ProductDetailsCounter.scss';

const ProductDetailsCounter = ({ user, cart, maxQtty, productCounter, setProductCounter }) => {
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

export default connect(mapStateToProps, null)(ProductDetailsCounter);