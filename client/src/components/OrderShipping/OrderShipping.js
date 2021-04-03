import { connect } from 'react-redux';

import useFetch from '../../hooks/useFetch';
import useForm from '../../hooks/useForm';
import { useHistory } from 'react-router-dom';
import { useContext } from 'react';
import { ProcessingOrder } from '../../contexts/ProcessingOrder';

import OrderSteps from '../shared/OrderSteps';
import MainLayout from '../layouts/MainLayout';
import './OrderShipping.scss';

const OrderShipping = ({ user }) => {
    const { procOrder, setProcOrder } = useContext(ProcessingOrder);

    let history = useHistory();

    const [countriesState] = useFetch(
        'https://ajayakv-rest-countries-v1.p.rapidapi.com/rest/v1/all',
        {
            'method': 'GET',
            'headers': {
                'x-rapidapi-key': 'cfae0a60dcmsh9c04c24b2e05c4bp17dbd8jsna8830832a096',
                'x-rapidapi-host': 'ajayakv-rest-countries-v1.p.rapidapi.com'
            }
        });

    const [stateForm, setStateForm] = useForm({
        firstName: '',
        lastName: '',
        address: '',
        city: '',
        phoneNumber: '',
        postalCode: '',
        country: '',
    });
    
    const submitForm = async (e) => {
        e.preventDefault();
        const { address, city, phoneNumber, postalCode, country } = stateForm;

        if (address && city && phoneNumber && postalCode && country) {
            setProcOrder(curr => {
                return {
                    ...curr,
                    ...stateForm,
                    firstName: user.firstName,
                    lastName: user.lastName
                }
            });
            history.push('confirm');
        }
    }

    return (
        <MainLayout>
            <section className="order-shipping-wrapper">
                <OrderSteps steps={["shipping"]}/>
                
                <div className="shipping-form">
                    <h1>Shipping Info</h1>
                    <form onSubmit={submitForm}>
                        <label htmlFor="address">Address</label>
                        <input id="address" type="text" name="address" onChange={setStateForm} placeholder="1234 Wolf Street"/>
                        <label htmlFor="city">City</label>
                        <input id="city" type="text" name="city" onChange={setStateForm} placeholder="New York"/>
                        <label htmlFor="phoneNumber">Phone</label>
                        <input id="phoneNumber" type="text" name="phoneNumber" onChange={setStateForm} placeholder="088 333 4444"/>
                        <label htmlFor="postalCode">Postal Code</label>
                        <input id="postalCode" type="text" name="postalCode" onChange={setStateForm} placeholder="12345"/>
                        <label htmlFor="country">Country</label>
                        <select id="country" name="country" onChange={setStateForm}>
                            <option label="Select a country" value="0">Select a country ... </option>

                        {
                            countriesState 
                            ? countriesState.map((country, index) => (
                                    <option
                                        key={index}
                                        value={country.name}
                                        label={country.name}>
                                            {country.name}
                                    </option>
                                    )
                                )
                            :   (
                                    <option
                                        value="Loading..."
                                        label="Loading...">
                                            Loading...
                                    </option>
                                )
                        }
                        </select>
                        <button className="continue-btn">Continue</button>
                    </form>
                </div>
            </section>
        </MainLayout>
    );
}

const mapStateToProps = (state) => ({
    user: state.user.user,
});

export default connect(mapStateToProps, null)(OrderShipping);