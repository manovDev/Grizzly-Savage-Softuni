import SlideShow from '../../shared/SlideShow';
import Header from '../../shared/Header';
import Footer from '../../shared/Footer';
import './MainLayout.scss';

const MainLayout = ({ children }) => {

    function shallShowSlideshow() {
        if (window.location.pathname === '/') {
            return <SlideShow />;
        }
    }

    return (
        <div className="main-layout-wrapper">
            <Header />
            
            {shallShowSlideshow()}

            <div className="main-layout-content">
                {children}
            </div>

            <Footer />
        </div>
    );
}

export default MainLayout;