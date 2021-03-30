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
            <Link to={"/product/details/" + _id}>
                <img className="product-image" src={image} alt={title}/>
            </Link>
            <h5>{title}</h5>
            <span>${price}</span>
            <button>Add to cart</button>
        </div>
    );
}

export default ProductItem;