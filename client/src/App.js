import { useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import { verifyAuth } from './actions/userActions';

import Main from './components/Main';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import CartPage from './components/CartPage';
import ProductDetails from './components/ProductDetails';
import OrderShipping from './components/OrderShipping';
import OrderConfirm from './components/OrderConfirm';
import OrderPayment from './components/OrderPayment';
import OrderSuccess from './components/OrderSuccess';
import './App.css';

function App({ verifyAuth }) {
    useEffect(() => {
        verifyAuth();
    }, [verifyAuth]);
    
    return (
        <div className="App">
            <Router>
                <Switch>
                    <Route exact path="/" component={Main} />

                    <Route path="/sign-in" component={SignIn} />
                    
                    <Route path="/sign-up" component={SignUp} />

                    <Route path="/cart" component={CartPage} />

                    <Route path="/product/:productId" component={ProductDetails} />

                    <Route path="/order/shipping" component={OrderShipping} />
                    
                    <Route path="/order/confirm" component={OrderConfirm} />

                    <Route path="/order/payment" component={OrderPayment} />

                    <Route path="/order/success" component={OrderSuccess} />
                </Switch>
            </Router>
        </div>
    );
}

const mapDispatchToProps = {
    verifyAuth,
};

export default connect(null, mapDispatchToProps)(App);
