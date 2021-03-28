import useForm from '../../hooks/useForm';
import { useHistory, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { signIn } from '../../actions/userActions'

import MainLayout from '../layouts/MainLayout';
import './SignIn.scss';

const SignIn = ({ signIn }) => {
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

    return (
        <MainLayout> 
            <div className="sign-in">
                <div className="sign-in-content">
                    <h1>Sign In</h1>
                    <form onSubmit={submitForm}>
                        <label htmlFor="email">Email</label>
                        <input id="email" name="email" type="email" placeholder="john@domain.com" onChange={setStateForm}/>

                        <label htmlFor="password">Password</label>
                        <input id="password" name="password" type="password" onChange={setStateForm} />

                        <button>Sign In</button>
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

const mapDispatchToProps = {
    signIn,
}   

export default connect(null, mapDispatchToProps)(SignIn);