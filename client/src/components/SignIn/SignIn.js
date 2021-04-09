import { useState } from 'react';
import { Spinner } from 'react-bootstrap'
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
    const [errState, setErrValues] = useState({ emailErr: false, signInErr: false });
    const [isLoading, setIsLoading] = useState(false);


    
    const submitForm = async (e) => {
        e.preventDefault();
        
        if (stateForm.email && stateForm.password) {
            
                setIsLoading(true);

                signIn(stateForm.email, stateForm.password)
                    .then(() => {
                        setIsLoading(false);
                        history.push('/');
                    })
                    .catch(err => {
                        setIsLoading(false);
                        
                        setErrValues((currentErrState) => ({
                            ...currentErrState,
                            signInErr: "Email and password doesn't match!"
                        }))
                    });

        }
    }

    const emailValidation = () => {
        const pattern = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;

        if (!stateForm.email.match(pattern)) {
            setErrValues((currentErrState) => ({
                ...currentErrState,
                emailErr: "You must enter valid email adress!"
            }));
        } else if (errState.emailErr) {
            setErrValues((currentErrState) => ({
                ...currentErrState,
                emailErr: false,
                signInErr: false
            }));
        }
    }

    const clearErrState = () => {
            setErrValues((currentErrState) => ({
                ...currentErrState,
                signInErr: false
            }));
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
                        <label
                            htmlFor="email"
                            data-err={!errState.emailErr ? '' : errState.emailErr}>Email</label>
                        <input
                            id="email"
                            name="email"
                            type="email"
                            placeholder="john@domain.com"
                            onChange={setStateForm}
                            onBlur={emailValidation}
                            />

                        <label
                            htmlFor="password"
                            data-err={!errState.signInErr ? '' : errState.signInErr}>Password</label>
                        <input
                            id="password"
                            name="password"
                            type="password"
                            onChange={setStateForm}
                            onBlur={clearErrState}
                            />

                        {stateForm.email && stateForm.password && !errState.emailErr
                        ? <button>
                                {isLoading
                                    ?   
                                        <div className="loader">
                                            <Spinner animation="border" variant="warning" />
                                        </div>
                                    : 
                                        'Login'
                                }
                            </button>
                        : <button className="dis-btn" disabled>Login</button>
                        }
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