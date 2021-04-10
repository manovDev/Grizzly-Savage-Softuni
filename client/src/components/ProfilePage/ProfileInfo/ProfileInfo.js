import { Link } from 'react-router-dom';
import './ProfileInfo.scss';

const ProfileInfo = ({ user }) => {
    return (
        <>
            <div className="profile-image-wrapper">
                <img src={user.user.profileImage} alt=""/>
            </div>
            <div className="profile-info-wrapper">
                <div className="info-container">
                    <h2>Full Name</h2>
                    <p>{user.user.firstName} {user.user.lastName}</p>
                </div>

                <div className="info-container">
                    <h2>Email Address</h2>
                    <p>{user.user.email}</p>
                </div>

                <div className="info-container">
                    <h2>Joined On</h2>
                    <p>{user.user.date.split('T')[0]}</p>
                </div>

                <Link to="orders">My Orders</Link>
            </div>
        </>
    );
}

export default ProfileInfo;