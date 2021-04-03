import { connect } from 'react-redux';
import { useContext } from 'react';
import { ProcessingOrder } from '../../contexts/ProcessingOrder';

import MainLayout from '../layouts/MainLayout';
import CartList from './CartList';
import OrderSummary from './OrderSummary';
import './CartPage.scss';

const CartPage = ({ user, cart }) => {
    const { procOrder, setProcOrder } = useContext(ProcessingOrder);

    return (
        <MainLayout>
            <section className="cart-page">
                <CartList />
                
                <OrderSummary procOrder={procOrder} setProcOrder={setProcOrder}/>
            </section>
        </MainLayout>
    );
}

const mapStateToProps = (state) => ({
    user: state.user.user,
    cart: state.cart
});

export default connect(mapStateToProps, null)(CartPage);