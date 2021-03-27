import SearchProducts from './SearchProducts';
import AuthLinks from './AuthLinks';
import './Header.scss';

function Header() {
    return (
        <header className="header">
            <div className="header-logo">
                Logo
            </div>
            <SearchProducts />
            <AuthLinks />

        </header>
    );
}

export default Header;
