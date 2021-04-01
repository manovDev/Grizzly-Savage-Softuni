import { useEffect } from 'react';
import { connect } from 'react-redux';
import { getAll as getAllProducts } from '../../../actions/productActions';
import ProductItem from './ProductItem';
import './Products.scss'

const Products = ({ products, getAllProducts }) => {
    useEffect(() => {
        getAllProducts();
        
    }, [getAllProducts]);

    return (
        <section className="products-wrapper">
            <ul>
                {
                    products && products
                        .map((product) =>
                            (
                                <li key={product._id}>
                                    <ProductItem
                                        productData={product} />
                                </li>
                            )
                        )
                }
            </ul>
        </section>
    );
}

const mapStateToProps = (state) => ({
    user: state.user.user,
    products: state.products.products,
});

const mapDispatchToProps = {
    getAllProducts,
};

export default connect(mapStateToProps, mapDispatchToProps)(Products);