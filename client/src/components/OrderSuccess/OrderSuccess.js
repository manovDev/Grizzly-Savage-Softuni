import { Link } from 'react-router-dom';

import orderSuccessImage from './assets/order-success.png';
import MainLaout from '../layouts/MainLayout';
import './OrderSuccess.scss';

const OrderSuccess = () => {
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

export default OrderSuccess;