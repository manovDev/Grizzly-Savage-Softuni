import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { signOut } from '../../../../actions/userActions';
import './AuthLinks.scss';

const AuthLinks = ({ user, signOut }) => {

    const handleSignOut =  () => {
        signOut();
    }

    return (
        <div className="auth-links">
            <ul>
                {
                    !user ?
                        <>
                            <li>
                            <Link to="/sign-in">Sign In</Link>
                            </li>
                            <li>
                                <div className="separator">|</div>
                            </li>
                            <li>
                                <Link to="/sign-up">Sign Up</Link>
                            </li>
                        </>
                        : <Link to="/" onClick={handleSignOut}>Sign Out</Link>
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
    
export default connect(mapStateToProps, mapDispatchToProps)(AuthLinks);