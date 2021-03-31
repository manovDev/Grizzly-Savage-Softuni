import { Link } from 'react-router-dom';
import './ProductItem.scss';

const ProductItem = ({
    productData: { 
        _id,
        title,
        image,
        price,
    } 
}) => {

    return (
        <div className="product-item" data-id={_id}>
            <div className="product-container">
                <Link to={"/product/" + _id}>
                    <img className="product-image" src={image} alt={title}/>
                </Link>
            </div>
            <div className="product-detail">
                <Link className="product-title" to={"/product/" + _id}>
                    {title}
                </ Link>
                <div className="product-price">${price.toFixed(2)}</div>
                <button className="add-to-cart-btn">Add To Cart</button>
            </div>
        </div>
    );
}

export default ProductItem;