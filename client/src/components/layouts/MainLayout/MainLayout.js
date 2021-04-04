import SlideShow from '../../shared/SlideShow';
import Header from '../../shared/Header';
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
        </div>
    );
}

export default MainLayout;