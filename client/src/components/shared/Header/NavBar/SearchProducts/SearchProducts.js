import { FiSearch as SearchIcon} from 'react-icons/fi';
import './SearchProducts.scss';

function SearchProducts() {
    return (
        <div className="search-products">
            <form>
                <input type="text" name="search" placeholder="Search for product..."/>
                <button type="button"><SearchIcon /></button>
            </form>
        </div>
    );
}

export default SearchProducts;
