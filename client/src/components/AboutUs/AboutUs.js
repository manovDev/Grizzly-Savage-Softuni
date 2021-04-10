import aboutUsImage from './assets/about-us-img.png';
import MainLayout from '../layouts/MainLayout';
import './AboutUs.scss';

const AboutUs = () => {
    return (
        <MainLayout>
            <section className="about-us-wrapper">
                <h1>About Us</h1>

                <div className="about-us-content">
                    <div className="about-us-image-wrapper">
                        <img src={aboutUsImage} alt=""/>
                    </div>

                    <div className="about-us-info-wrapper">
                        <h2>Grizzly Savage</h2>
                        <p>Grizzly Savage is eCommerce website / brand where you can find the best hiking/camping equipment. (SoftUni React project) The users can can search products by name, product id and filter by category and brand. If the user is logged in, he can place orders and view them and their details. There is also profile page where he can edit some of his account information.</p>
                    </div>
                </div>
            </section>
        </MainLayout>
    );
}

export default AboutUs;