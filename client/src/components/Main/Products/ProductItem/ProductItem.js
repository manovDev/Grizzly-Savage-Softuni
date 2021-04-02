import { connect } from 'react-redux';
import { useState } from 'react';

import { addToCart } from '../../../../actions/cartActions';

import { Link } from 'react-router-dom';
import './ProductItem.scss';

const ProductItem = ({
    user,
    cart, 
    addToCart,
    productData: { 
        _id,
        title,
        image,
        price,
    }
}) => {
    const [counter, setCounter] = useState(1);

    const incCounter = (cartProducts, productsId) => {
        setCounter(curr => curr += 1);
        
    }

    const handleAddToCart = () => {
        incCounter(cart.products, _id);
        addToCart(_id, counter);
    }

    return (
        <div className="product-item" data-id={_id}>
            <div className="product-container">
                <Link to={"/product/" + _id}>
                    <img className="product-image" src={image} alt={title}/>
                </Link>
            </div>
            <div className="product-detail">
                <Link className="product-title" to={"/product/" + _id}>
                    {title}
                </ Link>
                <div className="product-price">${price.toFixed(2)}</div>
                <button className="add-to-cart-btn" onClick={handleAddToCart}>Add To Cart</button>
            </div>
        </div>
    );
}
const mapStateToProps = (state) => ({
    user: state.user.user,
    cart: state.cart
});

const mapDispatchToProps = {
    addToCart,
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductItem);