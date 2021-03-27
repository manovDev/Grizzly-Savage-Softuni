import { Link } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import './SignIn.scss';

const SignIn = () => {
    return (
        <MainLayout> 
            <div className="sign-in">
                <div className="sign-in-content">
                    <h1>Sign In</h1>
                    <form>
                        <label htmlFor="email">Email</label>
                        <input id="email" name="email" type="email" placeholder="john@domain.com"/>

                        <label htmlFor="password">Password</label>
                        <input id="password" name="password" type="password"/>

                        <button type="button">Sign In</button>
                    </form>
                    <div className="new-customer">
                        New customer?
                        <Link to="/sign-up">Sign Up</Link>
                    </div>
                    
                </div>
            </div>
        </MainLayout>
    );
}

export default SignIn;