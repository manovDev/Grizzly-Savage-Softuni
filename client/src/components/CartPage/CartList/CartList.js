import { connect } from 'react-redux';

import { Link } from 'react-router-dom';

import ProductCounter from './ProductCounter';
import { removeProduct } from '../../../actions/cartActions';

import { BsFillTrashFill as RemoveIcon } from 'react-icons/bs';
import './CartList.scss';

const CartList = ({ user, cart, removeProduct }) => {
    const handleRemoveProduct = (e) => {
        removeProduct(e.currentTarget.id);
    }

    return (
        
        <div className="cart-products-wrapper">
            <h2 className="cart-title">
                Your cart: <span>{cart.qtty} items</span>
            </h2>
            <ul>
                {
                    cart.products && cart.products
                        .map((product) =>
                            (
                                <li key={product._id}>
                                    <div className="selected-product">
                                        <img className="product-image" src={product.image} alt={product.title}/>

                                        <Link className="product-title" to={"/product/" + product._id}>
                                            {product.title}
                                        </Link>

                                        <div className="product-price">
                                            ${product.price.toFixed(2)}
                                        </div>

                                        <ProductCounter
                                            productId={product._id}
                                            productUnits={product.units}
                                            maxQtty={product.qtty}/>
                                        
                                        <div className="product-remove-btn">
                                            <button id={product._id} onClick={handleRemoveProduct}>
                                                <RemoveIcon />
                                            </button>
                                        </div>
                                    </div>
                                </li>
                            )
                        )
                }
            </ul>
        </div>
    );
}

const mapStateToProps = (state) => ({
    user: state.user.user,
    cart: state.cart,
});

const mapDispatchToProps = {
    removeProduct,
};

export default connect(mapStateToProps, mapDispatchToProps)(CartList);