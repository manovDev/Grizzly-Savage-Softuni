import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';

import { verifyAuth } from '../../actions/userActions';

import orderSuccessImage from './assets/order-success.png';
import MainLaout from '../layouts/MainLayout';
import './OrderSuccess.scss';

const OrderSuccess = ({ verifyAuth }) => {
    useEffect(() => {
        verifyAuth();
    }, [verifyAuth]);

    return (
        <MainLaout>
            <section className="order-success-wrapper">
                <img src={orderSuccessImage} alt=""/>
                <h2>Your order has been placed successfully.</h2>
                <Link to="/orders">Go To Orders</Link>
            </section>
        </MainLaout>
    );
}

const mapDispatchToProps = {
    verifyAuth,
};

export default connect(null, mapDispatchToProps)(OrderSuccess);