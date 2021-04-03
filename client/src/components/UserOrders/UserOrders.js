import ViewButton from './ViewButton';
import MainLayout from '../layouts/MainLayout';
import './UserOrders.scss';

const UserOrders = ({ user, orders, getAllOrders }) => {

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
                            orders && orders
                                .map((order) =>
                                    (
                                        <tr>
                                            <td width="40%">{order._id}</td>
                                            <td width="30%">{order.qtty}</td>
                                            <td width="10%">{`$${(order.totalPrice + order.tax).toFixed(2)}`}</td>
                                            <td width="10%" 
                                            className={order.status === 'Processing' ? 'proc-status' : 'dev-status'}
                                            >{order.status}</td>
                                            <td width="10%">
                                                <ViewButton />
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

