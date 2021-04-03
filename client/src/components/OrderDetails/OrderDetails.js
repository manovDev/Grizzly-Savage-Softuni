import MainLayout from '../layouts/MainLayout';
import './OrderDetails.scss';
const OrderDetails = ({ user }) => {
    return (
        <MainLayout>
            <section className="order-details-wrapper">
                {console.log(order)}
                <h1 className="order-details-title">Order # {orderId}</h1>
                <div className="shipping-data">
                    <h2 className="shipping-title">
                        Shipping Info
                    </h2>
                    <p>
                        <span>Name: </span> {`${user.firstName} ${user.lastName}`}
                    </p>
                    <p>
                        <span>Phone: </span> {order.phoneNumber}
                    </p>
                    <p>
                        <span>Address: </span> {`${order.address}, ${order.city}, ${order.postalCode}, ${order.country}`}
                    </p>
                </div>
                <div className="shipping-data">
                    <p className={order.status === 'Processing' ? 'proc-status' : 'dev-status'}>
                        <span>Status: </span> {order.status}
                    </p>
                </div>
                <h2 className="cart-items-title">Order Items:</h2>
                <ul>
                    {
                        order.products && order.products
                            .map((product) =>
                                (
                                    <li key={product._id}>
                                        <div className="selected-product">
                                            <img className="product-image" src={product.image} alt={product.title}/>
                                            
                                            <Link className="product-title" to={"/product/" + product._id}>
                                                {product.title}
                                            </Link>

                                            <div className="product-price">
                                                {`$${(product.price * product.units).toFixed(2)}`}
                                            </div>

                                            <div className="product-price">
                                                {`${product.units} Piece(s)`}
                                            </div>
                                        </div>
                                    </li>
                                )
                            )
                    }
                </ul>
            </section>
        </ MainLayout>
    );
}

export default connect(mapStateToProps, null)(OrderDetails);