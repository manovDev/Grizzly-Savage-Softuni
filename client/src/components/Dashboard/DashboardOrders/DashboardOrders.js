import { connect } from 'react-redux';
import { useEffect, useState } from 'react';
import { Spinner } from 'react-bootstrap'
import ViewButton from '../../shared/ViewButton';
import DashboardLayout from '../../layouts/DashboardLayout';
import './DashboardOrders.scss';
import {
    getAll,
    patchOrderAsync,
} from '../../../actions/orderActions';
import { AiOutlineCheck } from 'react-icons/ai';

const DashboardOrders = ({
    user,
    orders,
    getAll,
    patchOrderAsync,
}) => {
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);

        if (user) {

            setIsLoading(false);
            getAll(user?.idToken)
        }

    }, [user]);

    const onClickChangeStatus = (orderId) => {
        patchOrderAsync(orderId, { status: 'Delivered' }, user?.idToken)
    }

    return (
        <DashboardLayout>
            <section className="dashboard-orders-wrapper">
                <h1>Dashboard Orders</h1>

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
                                : orders
                                    .map((order) =>
                                    (
                                        <tr key={order._id}>
                                            <td width="40%">{order._id}</td>
                                            <td width="20%">{order.qtty}</td>
                                            <td width="10%">{`$${(order.totalPrice + order.tax).toFixed(2)}`}</td>
                                            <td width="10%"
                                                className={order.status === 'Processing' ? 'proc-status' : 'dev-status'}
                                            >{order.status}</td>
                                            <td width="15%">
                                                <ViewButton orderId={order._id} />

                                                {order.status === 'Processing' &&
                                                    <button className="change-status-check" onClick={onClickChangeStatus.bind(undefined, order._id)} >
                                                        <AiOutlineCheck />
                                                    </button>
                                                }
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
        </DashboardLayout>
    );
}

const mapStateToProps = (state) => ({
    user: state.user.user,
    orders: state.orders.orders,
})

const mapDispatchToProps = {
    getAll,
    patchOrderAsync,
}

export default connect(mapStateToProps, mapDispatchToProps)(DashboardOrders);
