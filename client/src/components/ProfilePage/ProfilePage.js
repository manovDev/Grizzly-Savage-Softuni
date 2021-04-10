import { connect } from 'react-redux';
import { Redirect } from 'react-router';
import { useState, useEffect } from 'react';
import { Spinner } from 'react-bootstrap'
import MainLayout from '../layouts/MainLayout';
import ProfileInfo from './ProfileInfo';
import './ProfilePage.scss';

const ProfilePage = ({ user }) => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setIsLoading(true);

        if(user.user) {
            setIsLoading(false);
        } else {
            return <Redirect to='/' />
        }

    }, [user]);

    return (
        <MainLayout>
            <section className="profile-page-wrapper">
                <h1>My Profile</h1>

                <div className="profile-content">
                    {
                        isLoading
                            ?   <div className="loader">
                                    <Spinner animation="border" variant="warning" />
                                </div>
                            :   <ProfileInfo user={user} />
                                
                    }
                </div>
            </section>
        </MainLayout>
    );
}

const mapStateToProps = (state) => ({
    user: state.user
})

export default connect(mapStateToProps, null)(ProfilePage);