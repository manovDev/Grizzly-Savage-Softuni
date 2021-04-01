import './ProductCounter.scss';
import { useState } from 'react';

const ProductCounter = ({ qtty }) => {
    const [productCounter, setProductCounter] = useState(1);

    const handleCounter = (e) => {
        const {id} = e.target;

        switch (id) {
            case 'reduceCounter':
                setProductCounter(currNum => {
                    return currNum - 1;
                });
                break;
            case 'incCounter':
                setProductCounter(currNum => {
                    return currNum + 1;
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
                max={qtty}
                value={productCounter}
                readOnly/>

            <button className="incCounter" id="incCounter" onClick={handleCounter}>+</button>
        </div>
    );
}

export default ProductCounter;