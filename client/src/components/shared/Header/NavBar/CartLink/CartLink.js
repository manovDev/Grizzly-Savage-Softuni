import { Link } from 'react-router-dom';

import { FaShoppingCart as CartIcon } from 'react-icons/fa';
import './CartLink.scss';

const CartLink = () => {
    return (
        <div className="cart-link" data-added-items="3">
            <Link to="/cart">
                <span className="cart-icon-wrapper">
                    <CartIcon />
                </span>
            </Link>
        </div>
    );
}

export default CartLink;