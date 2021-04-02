import { connect } from 'react-redux';
import './OrderSummary.scss';

const OrderSummary = ({ user, cart }) => {
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

            <button className="check-out-btn">Check Out</button>
        </div>
    );
}

const mapStateToProps = (state) => ({
    user: state.user.user,
    cart: state.cart
});

export default connect(mapStateToProps, null)(OrderSummary);