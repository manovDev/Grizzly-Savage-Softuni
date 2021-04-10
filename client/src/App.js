import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import { verifyAuth } from './actions/userActions';
import { ProcessingOrder } from './contexts/ProcessingOrder';
import { SearchProducts } from './contexts/SearchProducts';
import { Notify } from './contexts/Notify';
import { Filter } from './contexts/Filter';

import NotifyBox from './components/shared/NotifyBox';
import LoggedRoute from './components/LoggedRoute';
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
import OrderDetails from './components/OrderDetails';
import ProfilePage from './components/ProfilePage';
import AboutUs from './components/AboutUs';
import Faq from './components/Faq';
import ContactUs from './components/ContactUs';
import './App.css';

function App({ verifyAuth }) {
    useEffect(() => {
        verifyAuth();
    }, [verifyAuth]);
    
    const [procOrder, setProcOrder] = useState("");
    const [searchProducts, setSearchProducts] = useState("");
    const [notify, setNotify] = useState("");
    const [filter, setFilter] = useState({ price: 1000, category: "", brand: "" });

    return (
        <div className="App">
            <Router>
                <Notify.Provider value={{ notify, setNotify }}>
                    <NotifyBox />
                    <SearchProducts.Provider value={{ searchProducts, setSearchProducts }}>
                        <Filter.Provider value={{ filter, setFilter }}>
                            <ProcessingOrder.Provider value={{ procOrder, setProcOrder }}>
                                <Switch>
                                    <Route exact path="/" component={Main} />

                                    <Route path="/about-us" component={AboutUs} />

                                    <Route path="/contact-us" component={ContactUs} />

                                    <Route path="/faq" component={Faq} />

                                    <Route path="/sign-in" component={SignIn} />
                                    
                                    <Route path="/sign-up" component={SignUp} />
                                        
                                    <Route path="/cart" component={CartPage} />

                                    <Route path="/product/:productId" component={ProductDetails} />

                                    <LoggedRoute exact path="/profile" component={ProfilePage} />

                                    <LoggedRoute path="/order/shipping" component={OrderShipping} />
                                    
                                    <LoggedRoute path="/order/confirm" component={OrderConfirm} />

                                    <LoggedRoute path="/order/payment" component={OrderPayment} />

                                    <LoggedRoute path="/order/success" component={OrderSuccess} />

                                    <LoggedRoute exact path="/orders" component={UserOrders} />

                                    <LoggedRoute path="/orders/:orderId" component={OrderDetails} /> */}

                                </Switch> 
                            </ProcessingOrder.Provider>
                        </Filter.Provider>
                    </SearchProducts.Provider>
                </Notify.Provider>
            </Router>
        </div>
    );
}

const mapDispatchToProps = {
    verifyAuth,
};

export default connect(null, mapDispatchToProps)(App);
