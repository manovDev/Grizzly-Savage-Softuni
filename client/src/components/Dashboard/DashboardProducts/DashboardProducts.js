import { connect } from 'react-redux';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Spinner } from 'react-bootstrap'
import { getAll as getAllProducts } from '../../../actions/productActions';
import DashboardLayout from '../../layouts/DashboardLayout';
import './DashboardProducts.scss';

const DashboardProducts = ({ user, products, getAllProducts }) => {
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);

        getAllProducts()
            .then(() => {
                if(user) {
                    setIsLoading(false);
                }
            })
        
    }, [getAllProducts, user]);

    return (
        <DashboardLayout>
            <section className="dashboard-products-wrapper">
                <h1>Dashboard Products</h1>

                <div className="add-product-btn-wrapper">
                    <Link to="/dashboard/products/add">Add Product</Link>
                </div>

                <table className="products-list">
                    <thead>
                        <tr>
                            <th>Product ID</th>
                            <th>Title</th>
                            <th>Category</th>
                            <th>Brand</th>
                            <th>Price</th>
                            <th>Stock</th>
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
                            : products
                                .map((product) =>
                                    (
                                        <tr key={product._id}>
                                            <td>{product._id}</td>
                                            <td>{product.title}</td>
                                            <td>{product.category.name}</td>
                                            <td>{product.brand.name}</td>
                                            <td>{`$${product.price}`}</td>
                                            <td>{product.qtty}</td>
                                            <td>
                                            </td>
                                        </tr>
                                    )
                                )
                        }
                        
                    </tbody>
                    <tfoot>
                        <tr>
                            <th>Product ID</th>
                            <th>Title</th>
                            <th>Category</th>
                            <th>Brand</th>
                            <th>Price</th>
                            <th>Stock</th>
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
    products: state.products.products,
});

const mapDispatchToProps = {
    getAllProducts,
};

export default connect(mapStateToProps, mapDispatchToProps)(DashboardProducts);