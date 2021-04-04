import { Redirect } from 'react-router';
import { useState } from 'react';
import { useHistory, Link } from 'react-router-dom';
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
                    <h1>Sign Up</h1>
                    <form onSubmit={submitForm}>
                        <label htmlFor="firstName">First Name</label>
                        <input id="firstName" name="firstName" type="text" onChange={handleChange} placeholder="John"/>

                        <label htmlFor="lastName">Last Name</label>
                        <input id="lastName" name="lastName" type="text" onChange={handleChange} placeholder="Wilson"/>

                        <label htmlFor="email">Email</label>
                        <input id="email" name="email" type="email" onChange={handleChange} placeholder="john@domain.com"/>

                        <label htmlFor="password">Password</label>
                        <input id="password" name="password" onChange={handleChange} type="password"/>

                        <label htmlFor="repPassword">Re-Password</label>
                        <input id="repPassword" name="repPassword" type="password"/>

                        <label htmlFor="profileImage">Profile Image</label>
                        <input id="profileImage" type="file" name="profileImage" onChange={handleImgUpload}/>

                        <button>Sign Up</button>
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

const mapStateToProps = (state) => ({
    user: state.user
})

const mapDispatchToProps = {
    signUp,
}   

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);