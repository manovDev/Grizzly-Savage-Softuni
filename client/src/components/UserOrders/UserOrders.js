import { connect } from 'react-redux';
import { useEffect, useState } from 'react';

import { Spinner } from 'react-bootstrap'
import ViewButton from './ViewButton';
import MainLayout from '../layouts/MainLayout';
import './UserOrders.scss';

const UserOrders = ({ user }) => {
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);

        if(user) {
            
            setIsLoading(false);
        }
        
    }, [ user ]);

    return (
        <MainLayout>
            <section className="user-orders-wrapper">
                <h1 className="user-orders-title">My Orders</h1>

                <table className="orders-list">
                    <thead>
                        <tr>
                            <th>Order ID</th>
                            <th>Num of Items</th>
                            <th>Amount</th>
                            <th>Status</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                        isLoading || !user
                            ?   
                                <tr>
                                    <td>
                                        <div className="loader">
                                            <Spinner animation="border" variant="warning" />
                                        </div>
                                    </td>
                                    
                                </tr>
                            : user.orders
                                .map((order) =>
                                    (
                                        <tr key={order._id}>
                                            <td width="40%">{order._id}</td>
                                            <td width="30%">{order.qtty}</td>
                                            <td width="10%">{`$${(order.totalPrice + order.tax).toFixed(2)}`}</td>
                                            <td width="10%" 
                                            className={order.status === 'Processing' ? 'proc-status' : 'dev-status'}
                                            >{order.status}</td>
                                            <td width="10%">
                                                <ViewButton orderId={order._id}/>
                                            </td>
                                        </tr>
                                    )
                                )
                        }
                        
                    </tbody>
                    <tfoot>
                        <tr>
                            <th>Order ID</th>
                            <th>Num of Items</th>
                            <th>Amount</th>
                            <th>Status</th>
                            <th>Actions</th>
                        </tr>
                    </tfoot>
                </table>
            </section>
        </MainLayout>
    );
}

const mapStateToProps = (state) => ({
    user: state.user.user,
});

export default connect(mapStateToProps, null)(UserOrders);