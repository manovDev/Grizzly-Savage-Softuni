import { connect } from 'react-redux';

import MainLayout from '../layouts/MainLayout';
import CartList from './CartList';
import OrderSummary from './OrderSummary';
import './CartPage.scss';

const CartPage = ({ user, cart }) => {
    return (
        <MainLayout>
            <section className="cart-page">
                <CartList />
                
                <OrderSummary />
            </section>
        </MainLayout>
    );
}

const mapStateToProps = (state) => ({
    user: state.user.user,
    cart: state.cart
});

export default connect(mapStateToProps, null)(CartPage);