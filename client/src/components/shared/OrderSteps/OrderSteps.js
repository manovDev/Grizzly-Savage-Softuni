import './OrderSteps.scss';

const OrderSteps = ({ steps }) => {

    return (
        <div className="order-steps-wrapper">
            <div className={steps.includes('shipping') ? "active-step order-step" : "order-step"}>Shipping</div>
            <div className={steps.includes('confirm') ? "active-step order-step" : "order-step"}>Confirm Order</div>
            <div className={steps.includes('payment') ? "active-step order-step" : "order-step"}>Payment</div>
        </div>
    );
}

export default OrderSteps;