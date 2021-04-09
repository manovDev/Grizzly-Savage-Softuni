import { connect } from 'react-redux';
import { useContext } from 'react';
import { ProcessingOrder } from '../../../contexts/ProcessingOrder';
import { Link } from 'react-router-dom';

import './OrderConfirmInfo.scss';

const OrderConfirmInfo = ({ user, cart }) => {
    const { procOrder, setProcOrder } = useContext(ProcessingOrder);

    return (     
        <div className="order-confirm-info-wrapper">
            <div className="shipping-data">
                <h2 className="shipping-title">
                    Shipping Info
                </h2>
                <p>
                    <span>Name: </span> {`${user.firstName} ${user.lastName}`}
                </p>
                <p>
                    <span>Phone: </span> {procOrder.phoneNumber}
                </p>
                <p>
                    <span>Address: </span> {`${procOrder.address}, ${procOrder.city}, ${procOrder.postalCode}, ${procOrder.country}`}
                </p>
            </div>
            <h2 className="cart-items-title">Your Cart Items:</h2>
            <ul>
                {
                    procOrder.products && procOrder.products
                        .map((product) =>
                            (
                                <li key={product._id}>
                                    <div className="selected-product">
                                        <img className="product-image" src={product.image} alt={product.title}/>
                                        
                                        <Link className="product-title" to={"/product/" + product._id}>
                                            {product.title}
                                        </Link>

                                        <div className="product-price">
                                            {`${product.units} x $${product.price.toFixed(2)} = $${(product.units * product.price).toFixed(2)}`}
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

export default connect(mapStateToProps, null)(OrderConfirmInfo);