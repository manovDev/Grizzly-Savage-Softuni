import { Redirect } from 'react-router';
import { useState, useEffect, useCallback } from 'react';
import { useHistory, Link } from 'react-router-dom';
import { validateField } from './helpers/formValidation';
import { connect } from 'react-redux';
import { signUp } from '../../actions/userActions';

import MainLayout from '../layouts/MainLayout';
import './SignUp.scss';

const SignUp = ({ signUp, user }) => {
    const history = useHistory();
    
    const [formData, setFormData] = useState({
        firstName: null,
        lastName: null,
        email: null,
        password: null,
        profileImage: null,
    });

    const [errState, setErrValues] = useState({
        firstNameErr: null,
        lastNameErr: null,
        emailErr: null,
        passwordErr: null,
        profileImageErr: null,
    });

    const [profileImageFile, setProfileImageFile] = useState({
        profileImage: null,
    });

    const handleChange = (e) => {
            
        setFormData((currentErrState) => ({
            ...currentErrState,
            [e.target.name]: e.target.value
        }));
    }

    const handleImgUpload = (e) => {
        const file = e.target.files[0];

        setFormData((currentErrState) => ({
            ...currentErrState,
            [e.target.name]: file.name
        }));

        setProfileImageFile((currentErrState) => ({
            ...currentErrState,
            [e.target.name]: file
        }));
    }

    const [signUpErr, setSignUpErr] = useState(false);

    const existError = useCallback((currentErrState) => {
        for (let prop in currentErrState) {
            if(errState[prop] !== false && prop !== 'signUpErr') {
                return true;
            }
        }

        return false;
    }, [errState])

    useEffect(() => {
        setSignUpErr(existError(errState));
    }, [existError, errState]);

    const clearErrState = (err) => {
        setErrValues((currentErrState) => ({
            ...currentErrState,
            [err]: false
        }));
    }

    const handleValidation = (e) => {
        if(!e.target.value) {
            clearErrState(e.target.name + 'Err');
            return;
        }

        setErrValues((currentErrState) => {
            
            return ({
                ...currentErrState,
                [e.target.name + 'Err']: validateField(e.target.name, e.target.value),
            })
        });
    }

    const submitForm = async (e) => {
        e.preventDefault();

        if (formData.firstName && formData.lastName && formData.email && formData.password && formData.profileImage) {
                try {
                    await signUp(formData, profileImageFile.profileImage);

                    history.push('/sign-in');   
                } catch (res) {
                    console.log(res.error);
                }      
        }
    }

    if (user?.isLoggedIn) {
		return <Redirect to='/' />
	}

    return (
        <MainLayout> 
            <div className="sign-up">
                <div className="sign-up-content">
                    <h1>Register</h1>
                    <form onSubmit={signUpErr ? '' : submitForm}>
                        <label
                            htmlFor="firstName"
                            data-err={!errState.firstNameErr ? '' : errState.firstNameErr}>First Name</label>

                        <input
                            id="firstName"
                            name="firstName"
                            type="text"
                            onChange={handleChange}
                            onBlur={handleValidation}
                            placeholder="John"
                        />

                        <label
                            htmlFor="lastName"
                            data-err={!errState.lastNameErr ? '' : errState.lastNameErr}>Last Name</label>

                        <input
                            id="lastName"
                            name="lastName"
                            type="text"
                            onChange={handleChange}
                            onBlur={handleValidation}
                            placeholder="Wilson"
                        />

                        <label
                            htmlFor="email"
                            data-err={!errState.emailErr ? '' : errState.emailErr}>Email</label>
                        <input
                            id="email"
                            name="email"
                            type="email"
                            onChange={handleChange}
                            onBlur={handleValidation}
                            placeholder="john@domain.com"
                        />

                        <label
                            htmlFor="password"
                            data-err={!errState.passwordErr ? '' : errState.passwordErr}>Password</label>
                        <input
                            id="password"
                            name="password"
                            onChange={handleChange}
                            onBlur={handleValidation}
                            type="password"
                        />

                        <label
                            htmlFor="profileImage"
                            data-err={!errState.profileImageErr ? '' : errState.profileImageErr}>Profile Image</label>
                        <input
                            id="profileImage"
                            type="file"
                            name="profileImage"
                            onBlur={handleValidation}
                            onChange={handleImgUpload}
                        />

                    {signUpErr 
                        ? <button className="dis-btn" disabled>Register</button>
                        : <button>Register</button>
                    }
                    </form>
                    <div className="new-customer">
                        Already a customer?
                        <Link to="/sign-in">Login</Link>
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
    signUp,
}   

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);