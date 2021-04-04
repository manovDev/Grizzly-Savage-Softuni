import { Redirect } from 'react-router';
import useForm from '../../hooks/useForm';
import { useHistory, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { signIn } from '../../actions/userActions'

import MainLayout from '../layouts/MainLayout';
import './SignIn.scss';

const SignIn = ({ signIn, user }) => {
    const history = useHistory();

    const [stateForm, setStateForm] = useForm({ email: '', password: '' });

    const submitForm = async (e) => {
        e.preventDefault();

        if (stateForm.email && stateForm.password) {
            try {
                await signIn(stateForm.email, stateForm.password);

                history.push('/');;
            } catch (err) {
                console.log(err);
                
            }
        }
    }

    if (user?.isLoggedIn) {
		return <Redirect to='/' />
	}

    return (
        <MainLayout> 
            <div className="sign-in">
                <div className="sign-in-content">
                    <h1>Login</h1>
                    <form onSubmit={submitForm}>
                        <label htmlFor="email">Email</label>
                        <input id="email" name="email" type="email" placeholder="john@domain.com" onChange={setStateForm}/>

                        <label htmlFor="password">Password</label>
                        <input id="password" name="password" type="password" onChange={setStateForm} />

                        <button>Sign In</button>
                    </form>
                    <div className="new-customer">
                        New customer?
                        <Link to="/sign-up">Register</Link>
                    </div>
                    
                </div>
            </div>
        </MainLayout>
    );
}

const mapStateToProps = (state) => ({
    user: state.user
})

const mapDispatchToProps = {
    signIn,
}   

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);