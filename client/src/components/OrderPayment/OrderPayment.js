import { connect } from 'react-redux';

import { useHistory } from 'react-router-dom';
import { useContext } from 'react';
import { ProcessingOrder } from '../../contexts/ProcessingOrder';
import { placeOrder } from '../../services/orderService';

import OrderSteps from '../shared/OrderSteps';
import MainLayout from '../layouts/MainLayout';
import './OrderPayment.scss';

const OrderPayment = ({ user }) => {
    const { procOrder, setProcOrder } = useContext(ProcessingOrder);

    let history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();

        placeOrder(procOrder, user.idToken)
            .then(() => {
                setProcOrder('');

                history.push('success');
            })
            .catch(err => {
                console.log(err);
            });
    }

    return (
        <MainLayout>
            <section className="order-payment-wrapper">
                <OrderSteps steps={["shipping", "confirm", "payment"]}/>

                <div className="shipping-form">
                    <h1>Card Info</h1>
                    <form onSubmit={handleSubmit}>
                        <label htmlFor="cardNumber">Card Number</label>
                        <input id="cardNumber" type="text" name="cardNumber" placeholder="1234 1234 1234 1234"/>
                        <label htmlFor="cardExpiry">Card Expiry</label>
                        <input id="cardExpiry" type="text" name="cardExpiry" placeholder="MM / YY"/>
                        <label htmlFor="phone">Card CVC</label>
                        <input id="cardCvc" type="text" name="cardCvc" placeholder="CVC"/>
                        <button className="continue-btn" onClick={handleSubmit}>Pay</button>
                    </form>
                </div>
            </section>
        </MainLayout>
    );
}

const mapStateToProps = (state) => ({
    user: state.user.user,
});

export default connect(mapStateToProps, null)(OrderPayment);