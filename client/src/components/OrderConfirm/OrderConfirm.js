// import useForm from '../../hooks/useForm';
// import { useHistory } from 'react-router-dom';

import OrderSteps from '../shared/OrderSteps';
import MainLayout from '../layouts/MainLayout';
import OrderConfirmInfo from './OrderConfirmInfo';
import OrderConfirmSummary from './OrderConfirmSummary';
import './OrderConfirm.scss';

const OrderConfirm = () => {
    // let history = useHistory();

    return (
        <MainLayout>
            <section className="order-confirm-wrapper">
                <OrderSteps steps={["shipping", "confirm"]}/>

                <div className="order-confirm-content">
                    <OrderConfirmInfo />
                    
                    <OrderConfirmSummary />
                </div>
            </section>
        </MainLayout>
    );
}

export default OrderConfirm;