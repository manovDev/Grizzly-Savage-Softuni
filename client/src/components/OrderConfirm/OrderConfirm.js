import { useContext } from 'react';
import { ProcessingOrder } from '../../contexts/ProcessingOrder';

import OrderSteps from '../shared/OrderSteps';
import MainLayout from '../layouts/MainLayout';
import OrderConfirmInfo from './OrderConfirmInfo';
import OrderConfirmSummary from './OrderConfirmSummary';
import './OrderConfirm.scss';

const OrderConfirm = () => {
    const { procOrder, setProcOrder } = useContext(ProcessingOrder);

    return (
        <MainLayout>
            <section className="order-confirm-wrapper">
                <OrderSteps steps={["shipping", "confirm"]}/>
                
                <div className="order-confirm-content">
                    <OrderConfirmInfo procOrder={procOrder}/>
                    
                    <OrderConfirmSummary procOrder={procOrder} setProcOrder={setProcOrder}/>
                </div>
            </section>
        </MainLayout>
    );
}

export default OrderConfirm;