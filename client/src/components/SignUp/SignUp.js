import { Link } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import './SignUp.scss';

const SignUp = () => {
    return (
        <MainLayout> 
            <div className="sign-up">
                <div className="sign-up-content">
                    <h1>Sign Up</h1>
                    <form>
                        <label htmlFor="firstName">First Name</label>
                        <input id="firstName" name="firstName" type="text" placeholder="John"/>

                        <label htmlFor="lastName">Last Name</label>
                        <input id="lastName" name="lastName" type="text" placeholder="Wilson"/>

                        <label htmlFor="email">Email</label>
                        <input id="email" name="email" type="email" placeholder="john@domain.com"/>

                        <label htmlFor="password">Password</label>
                        <input id="password" name="password" type="password"/>

                        <button type="button">Sign Up</button>
                    </form>
                    <div className="new-customer">
                        Already a customer?
                        <Link to="/sign-in">Sign In</Link>
                    </div>
                    
                </div>
            </div>
        </MainLayout>
    );
}

export default SignUp;