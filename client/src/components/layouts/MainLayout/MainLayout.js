import './MainLayout.scss';

const MainLayout = ({ children }) => {

    return (
        <div className="main-layout-wrapper">
            {/* header component */}
            Header component

            <div className="main-layout-content">
                {children}
            </div>
        </div>
    );
}

export default MainLayout;