import { connect } from 'react-redux';

import { useHistory } from 'react-router-dom';
// import { placeOrder } from '../../../services/orderService';

import './OrderConfirmSummary.scss';

const OrderConfirmSummary = ({ user, cart }) => {

    let history = useHistory();

    const handleProceedToPayment = () => {
        history.push('payment');
        // if(user) {
        //     placeOrder(cart, user.idToken);
        // }
    }

    return (
        <div className="order-confirm-summary-wrapper">
            <h3 className="order-summary-title">Order Summary</h3>

            <div className="order-summary-info">
                <div className="order-summary-info-item">
                    <span className="info-item-title">Subtotal:</span>
                    <span className="info-item-info">${cart.totalPrice.toFixed(2)}</span>
                </div>

                <div className="order-summary-info-item">
                    <span className="info-item-title">Shipping:</span>
                    <span className="info-item-info">$0</span>
                </div>

                <div className="order-summary-info-item">
                    <span className="info-item-title">Tax:</span>
                    <span className="info-item-info">$36.24</span>
                </div>
            </div>

            <div className="order-summary-info">
                <div className="order-summary-info-item">
                    <span className="info-item-title">Total:</span>
                    <span className="info-item-info">${cart.totalPrice.toFixed(2)}</span>
                </div>
            </div>

            <div className="order-summary-buttons">
                <button
                    className="check-out-btn"
                    onClick={handleProceedToPayment}>Proceed to Payment</button>
            </div>
        </div>
    );
}

const mapStateToProps = (state) => ({
    user: state.user.user,
    cart: state.cart
});

export default connect(mapStateToProps, null)(OrderConfirmSummary);