import './OrderSummary.scss';

const OrderSummary = () => {
    return (
        <div className="order-summary">
            <h3 className="order-summary-title">Order Summary</h3>

            <div className="order-summary-info">
                <div className="order-summary-info-item">
                    <span className="subtotal-title">Subtotal:</span>
                    <span className="subtotal-info">2 (Units)</span>
                </div>

                <div className="order-summary-info-item">
                    <span className="est-subtotal-title">Est. Total:</span>
                    <span className="est-subtotal-info">$280.00</span>
                </div>
            </div>

            <button className="check-out-btn">Check Out</button>
        </div>
    );
}

export default OrderSummary;