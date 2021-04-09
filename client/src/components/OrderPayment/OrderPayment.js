import { connect } from 'react-redux';
import { Spinner } from 'react-bootstrap'
import { Redirect } from 'react-router';
import { useHistory } from 'react-router-dom';
import { useState, useContext } from 'react';
import { ProcessingOrder } from '../../contexts/ProcessingOrder';
import { placeOrder } from '../../services/orderService';

import OrderSteps from '../shared/OrderSteps';
import MainLayout from '../layouts/MainLayout';
import './OrderPayment.scss';

const OrderPayment = ({ user }) => {
    const { procOrder, setProcOrder } = useContext(ProcessingOrder);
    const [isLoading, setIsLoading] = useState(false);

    let history = useHistory();

    if(procOrder === '') {
        return <Redirect to='/' />
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        setIsLoading(true);

        if(user) {

            placeOrder(procOrder, user.idToken)
                .then(() => {
                    setIsLoading(false);
    
                    setProcOrder('');
    
                    history.push('order/success');
                })
                .catch(err => {
                    console.log(err);
                });
        }
    }

    return (
        <MainLayout>
            <section className="order-payment-wrapper">
                <OrderSteps steps={["shipping", "confirm", "payment"]}/>

                {isLoading
                    ?   
                        <div className="loader">
                            <Spinner animation="border" variant="warning" />
                        </div>
                    : 
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
                }
            </section>
        </MainLayout>
    );
}

const mapStateToProps = (state) => ({
    user: state.user.user,
});

export default connect(mapStateToProps, null)(OrderPayment);