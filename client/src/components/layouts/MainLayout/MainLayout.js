import Header from '../../shared/Header';
import './MainLayout.scss';

const MainLayout = ({ children }) => {

    return (
        <div className="main-layout-wrapper">
            <Header />

            <div className="main-layout-content">
                {children}
            </div>
        </div>
    );
}

export default MainLayout;