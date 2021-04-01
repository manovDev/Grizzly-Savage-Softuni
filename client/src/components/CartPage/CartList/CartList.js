import { connect } from 'react-redux';
import { useEffect } from 'react';

import { Link } from 'react-router-dom';
import { getAll as getAllProducts } from '../../../actions/productActions';

import ProductCounter from './ProductCounter';
import { BsFillTrashFill as RemoveIcon } from 'react-icons/bs';
import './CartList.scss';

const CartList = ({ user, products, getAllProducts }) => {
    useEffect(() => {
        getAllProducts();
        
    }, [getAllProducts]);

    return (
        
        <div className="cart-products-wrapper">
            <h2 className="cart-title">
                Your cart: <span>{products.length} items</span>
            </h2>
            <ul>
                {
                    products && products
                        .map((product, index) =>
                            (
                                <li key={index}>
                                    <div className="selected-product">
                                        <img className="product-image" src={product.image} alt={product.title}/>

                                        <Link className="product-title" to={"/product/" + product._id}>
                                            {product.title}
                                        </Link>

                                        <div className="product-price">
                                            ${product.price.toFixed(2)}
                                        </div>

                                        <ProductCounter qtty={product.qtty}/>
                                        
                                        <div className="product-remove-btn">
                                            <button><RemoveIcon /></button>
                                        </div>
                                    </div>
                                </li>
                            )
                        )
                }
            </ul>
        </div>
    );
}

const mapStateToProps = (state) => ({
    user: state.user.user,
    products: state.products.products,
});

const mapDispatchToProps = {
    getAllProducts,
};

export default connect(mapStateToProps, mapDispatchToProps)(CartList);