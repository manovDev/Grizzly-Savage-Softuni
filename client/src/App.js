import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import { verifyAuth } from './actions/userActions';
import { ProcessingOrder } from './contexts/ProcessingOrder';

import Main from './components/Main';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import CartPage from './components/CartPage';
import ProductDetails from './components/ProductDetails';
import OrderShipping from './components/OrderShipping';
import OrderConfirm from './components/OrderConfirm';
import OrderPayment from './components/OrderPayment';
import OrderSuccess from './components/OrderSuccess';
import UserOrders from './components/UserOrders';
import './App.css';

function App({ verifyAuth }) {
    useEffect(() => {
        verifyAuth();
    }, [verifyAuth]);
    
    const [procOrder, setProcOrder] = useState("");

    return (
        <div className="App">
            <Router>
                <Switch>
                    <Route exact path="/" component={Main} />

                    <Route path="/sign-in" component={SignIn} />
                    
                    <Route path="/sign-up" component={SignUp} />

                    <Route exact path="/orders" component={UserOrders} />

                    <ProcessingOrder.Provider value={{ procOrder, setProcOrder }}>
                        <Route path="/cart" component={CartPage} />

                        <Route path="/product/:productId" component={ProductDetails} />

                        <Route path="/order/shipping" component={OrderShipping} />
                        
                        <Route path="/order/confirm" component={OrderConfirm} />

                        <Route path="/order/payment" component={OrderPayment} />

                        <Route path="/order/success" component={OrderSuccess} />
                    </ProcessingOrder.Provider>

                </Switch> 
            </Router>
        </div>
    );
}

const mapDispatchToProps = {
    verifyAuth,
};

export default connect(null, mapDispatchToProps)(App);
