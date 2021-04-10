import { useEffect } from 'react';
import { connect } from 'react-redux';
import { getAll as getAllProducts } from '../../../actions/productActions';
import { useContext } from 'react';
import { SearchProducts } from '../../../contexts/SearchProducts';
import { Spinner } from 'react-bootstrap'
import TitleSeparator from '../../shared/TitleSeparator';
import ProductItem from './ProductItem';
import './Products.scss'

const Products = ({ products, getAllProducts }) => {
    useEffect(() => {
        getAllProducts();
        
    }, [getAllProducts]);

    const { searchProducts, setSearchProducts } = useContext(SearchProducts);


    return (
        <section className="products-wrapper">
            <TitleSeparator title="Products"/>
            <ul>
                {products.length === 0
                    ?   (
                            <>
                                <Spinner animation="border" variant="warning" />
                            </>
                        )
                    : searchProducts
                        ? products.filter(x => 
                            x.title.toLowerCase().includes(searchProducts.toLowerCase())         ||
                            x._id.toLowerCase().includes(searchProducts.toLowerCase())           ||
                            x.category.name.toLowerCase().includes(searchProducts.toLowerCase()) ||
                            x.brand.name.toLowerCase().includes(searchProducts.toLowerCase())
                            )
                            .map((product) =>
                                <li key={product._id}>
                                    <ProductItem
                                        productData={product} />
                                </li>
                            )
                        : products
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