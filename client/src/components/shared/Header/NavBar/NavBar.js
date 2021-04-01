import { Link } from 'react-router-dom';

import gsLogo from './assets/grizzly-savage-logo.png';
import CartLink from './CartLink';

import SearchProducts from './SearchProducts';
import ProfileNav from './ProfileNav';
import './NavBar.scss';

const NavBar = ({ user }) => {
    return (
        <div className="nav-wrapper">
            <nav>
                <SearchProducts />

                <ul className="nav-links">
                    <li>
                        <Link to="/">
                            SHOP
                        </Link>
                    </li>
                    <li>
                        <Link to="/">
                            ABOUT US
                        </Link>
                    </li>
                    <li>
                        <Link to="/">
                            <div className="header-logo">
                                <img src={gsLogo} alt="Grizzly Savage Logo"/>
                            </div>
                        </Link>
                    </li>
                    <li>
                        <Link to="/">
                            FAQ
                        </Link>
                    </li>
                    <li>
                        <Link to="/">
                            CONTACT US
                        </Link>
                    </li>
                </ul>
                
                <div className="nav-additions">
                    <ProfileNav user={user} />

                    <CartLink />
                </div>
            </nav>
        </div>
    );
}

export default NavBar;