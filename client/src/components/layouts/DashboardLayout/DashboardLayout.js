import { connect } from 'react-redux';
import { Spinner } from 'react-bootstrap'
import { useState, useEffect } from 'react';

import { Redirect } from 'react-router';
import Header from '../../shared/Header';
import DashboardNav from './DashboardNav';
import './DashboardLayout.scss';

const DashboardLayout = ({ user, children }) => {
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);

        if(user) {
            if(user.role === 'admin') {
                setIsLoading(false);
            }
        }
    }, [user]);

    if(user) {
        if(user.role !== 'admin') {
            return <Redirect to='/' />
        }
    }

    return (

        <div className="dashboard-layout-wrapper">
            <Header />
            <DashboardNav />
            
            {
                isLoading
                    ?   <div className="loader">
                            <Spinner animation="border" variant="warning" />
                        </div>
                    :   <div className="dashboard-layout-content">
                            {children}
                        </div>

            }
        </div>
    );
}

const mapStateToProps = state => ({
    user: state.user.user,
})

export default connect(mapStateToProps, null)(DashboardLayout);