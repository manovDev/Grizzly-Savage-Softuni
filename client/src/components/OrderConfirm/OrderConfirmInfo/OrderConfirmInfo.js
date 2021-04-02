import { connect } from 'react-redux';

import { Link } from 'react-router-dom';

import './OrderConfirmInfo.scss';

const OrderConfirmInfo = ({ user, cart }) => {
    return (
        
        <div className="order-confirm-info-wrapper">
            <div className="shipping-data">
                <h2 className="shipping-title">
                    Shipping Info
                </h2>
                <p>
                    <span>Name: </span> Ivaka Madafaka
                </p>
                <p>
                    <span>Phone: </span> 125125126621
                </p>
                <p>
                    <span>Address: </span> ul. awdaw d.a.wd daw 16
                </p>
            </div>
            <h2 className="cart-items-title">Your Cart Items:</h2>
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

// const mapDispatchToProps = {
//     removeProduct,
// };

export default connect(mapStateToProps, null)(OrderConfirmInfo);