import { connect } from 'react-redux';

import { useState, useEffect } from 'react';
import { addToCart } from '../../actions/cartActions';
import { getOne as getOneProduct } from '../../services/productService';

import MainLayout from '../layouts/MainLayout';
import  ProductDetailsCounter from './ProductDetailsCounter';

import './ProductDetails.scss';

const ProductDetails = ({ user, addToCart }) => {
    const [product, setProduct] = useState({
        _id: "",
        brand: {name: ""},
        category: {name: ""},
        description: "",
        image: "",
        model: "",
        price: 0,
        qtty: 0,
        title: ""
    });
    const productId = window.location.pathname.split('/product/')[1];

    const [productCounter, setProductCounter] = useState({units: 1, lastAction: ''});

    useEffect(() => {
        getOneProduct(productId)
            .then(res => res.json())
            .then(data => {
                setProduct(data);
            })
            .catch(err => {
                console.log(err);
            });
    }, [productId]);

    const handleAddToCart = () => {
        addToCart(product._id, productCounter.units, 'details');
    }

    return (
        <MainLayout>
            
            <section className="product-details-wrapper">
                <div className="product-image">
                    <img src={product.image} alt={product.title}/>
                </div>

                <div className="product-information">
                    <h1 className="product-title">{product.title}</h1>

                    <span className="product-id">Product id # {product._id}</span>

                    <h2 className="product-price">${product.price.toFixed(2)}</h2>

                    <div className="add-to-cart-options">
                        <ProductDetailsCounter
                            maxQtty={product.qtty}
                            productCounter={productCounter}
                            setProductCounter={setProductCounter}/>

                        <button
                            onClick={handleAddToCart}
                            className="add-to-cart-btn">Add To Cart</button>
                    </div>

                    <div className="product-stock">
                        In stock: <span className="product-qtty">{product.qtty}</span>
                    </div>
                    
                    <div className="product-details">
                        <span className="product-details-item">
                            Category:
                            <span className="product-details-data">
                                {product.category.name}
                            </span>
                        </span>
                        <span className="product-details-item">
                            Brand:
                            <span className="product-details-data">
                                {product.brand.name}
                            </span>
                        </span>
                        <span className="product-details-item">
                            Model:
                            <span className="product-details-data">
                                {product.model}
                            </span>
                        </span>
                    </div>
                    <div className="product-description">
                        <h2>Description:</h2>
                        <p>{product.description}</p>
                    </div>
                </div>
            </section>
        </MainLayout>
    );
}

const mapStateToProps = (state) => ({
    user: state.user.user,
    cart: state.cart
});

const mapDispatchToProps = {
    addToCart,
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductDetails);