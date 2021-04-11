import MainLayout from '../layouts/MainLayout';
import './ContactUs.scss';

const ContactUs = () => {
    return (
        <MainLayout>
            <section className="contact-us-wrapper">
                <h1>Contact Us</h1>

                <div className="contact-us-content">
                    <div className="contact-info">
                        <div className="contact-info-wrapper">
                            <div className="info-container">
                                <h2>Address</h2>
                                <p>str. Oborishte 16, Sofia, Bulgaria</p>
                            </div>

                            <div className="info-container">
                                <h2>Email</h2>
                                <p>support@grizzlysavage.com</p>
                            </div>

                            <div className="info-container">
                                <h2>Phone</h2>
                                <p>+359 88 624 5341</p>
                            </div>

                            <div className="info-container">
                                <h2>Timing</h2>
                                <p>available at 10am-8pm</p>
                            </div>
                        </div>
                    </div>

                    <form>
                        <label htmlFor="firstName" >Name</label>
                        <input
                            id="firstName"
                            name="firstName"
                            type="text"
                            placeholder="John"
                        />

                        <label htmlFor="email">Your Email</label>
                        <input
                            id="email"
                            name="email"
                            type="email"
                            placeholder="john@domain.com"
                        />

                        <label htmlFor="phoneNumber">Phone</label>
                        <input
                            id="phoneNumber"
                            name="phoneNumber"
                            type="text"
                        />

                        <label htmlFor="messageBody">Message</label>
                        <textarea
                            id="messageBody"
                            name="messageBody"
                            placeholder="Message"
                        > </textarea>

                        <button type="button">Send</button>
                    </form>
                </div>
            </section>
        </MainLayout>
    );
}

export default ContactUs;