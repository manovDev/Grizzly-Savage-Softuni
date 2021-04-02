import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { signOut } from '../../../../../actions/userActions';

import { BsFillPersonFill } from 'react-icons/bs';
import './ProfileNav.scss';

const ProfileNav = ({ user, signOut }) => {

    const handleSignOut =  () => {
        signOut();
    }

    return (
        <div className="profile-nav">
            <span className="profile-icon-wrapper">
                <BsFillPersonFill />
            </span>
            <ul>
                {
                    !user ?
                        <>
                            <li>
                                <Link to="/sign-in">Login</Link>
                            </li>
                            <li>
                                <Link to="/sign-up">Register</Link>
                            </li>
                        </>
                        : 
                        <>
                            <li>
                                <Link to="/profile">Profile</Link>
                            </li>
                            <li>
                                <Link to="/profile">Orders</Link>
                            </li>
                            <li>
                                <Link className="logout" to="/sign-in" onClick={handleSignOut}>Logout</Link>
                            </li>
                        </>
                }
                
            </ul>
        </div>
    );
}

const mapStateToProps = state => ({
    user: state.user.user,
})

const mapDispatchToProps = {
    signOut,
}
    
export default connect(mapStateToProps, mapDispatchToProps)(ProfileNav);