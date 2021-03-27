import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Main from './components/Main';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import './App.css';

function App() {
    return (
        <div className="App">
            <Router>
                <Switch>
                    <Route exact path="/" component={Main} />
                    <Route path="/sign-in" component={SignIn} />
                    <Route path="/sign-up" component={SignUp} />
                </Switch>
            </Router>
        </div>
    );
}

export default App;
