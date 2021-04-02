import MainLayout from '../layouts/MainLayout';
import './OrderShipping.scss';

const OrderShipping = () => {

    return (
        <MainLayout>
            <section className="order-shipping-wrapper">

                <div className="shipping-form">
                    <h1>Shipping Info</h1>
                    <form onSubmit={submitForm}>
                        <label htmlFor="address">Address</label>
                        <input id="address" type="text" name="address" onChange={setStateForm} placeholder="1234 Wolf Street"/>
                        <label htmlFor="city">City</label>
                        <input id="city" type="text" name="city" onChange={setStateForm} placeholder="New York"/>
                        <label htmlFor="phone">Phone</label>
                        <input id="phone" type="text" name="phone" onChange={setStateForm} placeholder="088 333 4444"/>
                        <label htmlFor="postalCode">Postal Code</label>
                        <input id="postalCode" type="text" name="postalCode" onChange={setStateForm} placeholder="12345"/>
                        <label htmlFor="country">Country</label>
                        <select id="country" name="country" onChange={setStateForm}>
                            <option label="Select a country" value="0">Select a country ... </option>

                        </select>
                        <button className="continue-btn">Continue</button>
                    </form>
                </div>
            </section>
        </MainLayout>
    );
}

export default OrderShipping;