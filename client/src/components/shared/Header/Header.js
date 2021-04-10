import { connect } from 'react-redux';

import NavBar from './NavBar';
import './Header.scss';

function Header({ user }) {
    const path = window.location.pathname.split('/')[1];

    return (
        <header className={`${path === '' ? 'header sticky' : 'header'}`}>
            <NavBar user={user} />

        </header>
    );
}

const mapStateToProps = state => ({
    user: state.user.user,
})

export default connect(mapStateToProps, null)(Header);
