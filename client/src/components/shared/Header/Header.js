import { connect } from 'react-redux';

import NavBar from './NavBar';
import './Header.scss';

function Header({ user }) {
    return (
        <header className="header">

            <NavBar user={user} />

        </header>
    );
}

const mapStateToProps = state => ({
    user: state.user.user,
})

export default connect(mapStateToProps, null)(Header);
