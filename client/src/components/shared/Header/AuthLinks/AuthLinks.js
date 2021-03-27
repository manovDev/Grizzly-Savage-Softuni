import { Link } from 'react-router-dom';
import './AuthLinks.scss';

const AuthLinks = () => {
    return (
        <div className="auth-links">
            <ul>
                <li>
                    <Link to="/sign-in">Sign In</Link>
                </li>
                <li>
                    <div className="separator">|</div>
                </li>
                <li>

                    <Link to="/sign-up">Sign Up</Link>
                </li>
            </ul>
        </div>
    );
}

export default AuthLinks;