import { connect } from 'react-redux';

import { useHistory } from 'react-router-dom';

import './OrderSummary.scss';

const OrderSummary = ({ user, cart, setProcOrder }) => {

    let history = useHistory();

    const redirectToLogin = () => {
        history.push('sign-in');
    }

    const handleCheckOut = () => {
        if(user) {
            setProcOrder(cart);
            history.push('order/shipping');
        }
    }

    return (
        <div className="order-summary">
            <h3 className="order-summary-title">Order Summary</h3>
            <div className="order-summary-info">
                <div className="order-summary-info-item">
                    <span className="subtotal-title">Subtotal:</span>
                    <span className="subtotal-info">{cart.qtty} (Units)</span>
                </div>

                <div className="order-summary-info-item">
                    <span className="est-subtotal-title">Est. Total:</span>
                    <span className="est-subtotal-info">${cart.totalPrice.toFixed(2)}</span>
                </div>
            </div>
            <div className="order-summary-buttons">
            {
                user ? (
                    <>
                        <button
                            className="check-out-btn"
                            onClick={handleCheckOut}>Check Out</button>
                    </>
                ) : (
                    <>
                        <button
                            className="must-login-btn"
                            onClick={redirectToLogin}>Login</button>
                        <span className="must-login-msg">You must login to place your order!</span>
                    </>
                )
            }
            </div>
        </div>
    );
}

const mapStateToProps = (state) => ({
    user: state.user.user,
    cart: state.cart
});

export default connect(mapStateToProps, null)(OrderSummary);