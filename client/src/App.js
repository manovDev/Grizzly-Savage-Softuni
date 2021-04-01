import { useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import { verifyAuth } from './actions/userActions';

import Main from './components/Main';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import CartPage from './components/CartPage';
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
                </Switch>
            </Router>
        </div>
    );
}

const mapDispatchToProps = {
    verifyAuth,
};

export default connect(null, mapDispatchToProps)(App);
