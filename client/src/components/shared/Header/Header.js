import { connect } from 'react-redux';
import SearchProducts from './SearchProducts';
import AuthLinks from './AuthLinks';
import './Header.scss';

function Header({ user }) {
    return (
        <header className="header">
            <div className="header-logo">
                Logo
            </div>
            <SearchProducts />
            <AuthLinks user={user} />

        </header>
    );
}

const mapStateToProps = state => ({
    user: state.user.user,
})

export default connect(mapStateToProps, null)(Header);
