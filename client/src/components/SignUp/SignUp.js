import { useState } from 'react';
// import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import './SignUp.scss';

const SignUp = () => {
    // const history = useHistory();
    const [formData, setFormData] = useState({
        firstName: null,
        lastName: null,
        email: null,
        password: null,
    });

    const handleChange = (e) => {
            
        setFormData((currentErrState) => ({
            ...currentErrState,
            [e.target.name]: e.target.value
        }));
    }

    const submitForm = async (e) => {
        e.preventDefault();

        if (formData.firstName && formData.lastName && formData.email && formData.password) {
                try {
                    await signUp(formData);
                    
                    // await signIn(formData.email, formData.password);

                    // history.push('/sign-in');   
                } catch (res) {
                    console.log(res.error);
                }      
        }
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

export default SignUp;