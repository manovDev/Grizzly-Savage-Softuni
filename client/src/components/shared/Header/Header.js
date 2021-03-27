import SearchProducts from './SearchProducts';
import './Header.scss';

function Header() {
    return (
        <header className="header">
            <div className="header-logo">
                Logo
            </div>
            <SearchProducts />
        </header>
    );
}

export default Header;
