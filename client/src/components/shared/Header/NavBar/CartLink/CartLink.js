import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { FaShoppingCart as CartIcon } from 'react-icons/fa';
import './CartLink.scss';

const CartLink = ({ user, cart }) => {
    return (
        <div className="cart-link" data-added-items={cart.qtty}>
            <Link to="/cart">
                <span className="cart-icon-wrapper">
                    <CartIcon />
                </span>
            </Link>
        </div>
    );
}

const mapStateToProps = (state) => ({
    user: state.user.user,
    cart: state.cart
});

export default connect(mapStateToProps, null)(CartLink);