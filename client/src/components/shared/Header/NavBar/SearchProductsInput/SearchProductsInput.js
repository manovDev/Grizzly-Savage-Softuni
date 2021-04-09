import { useContext } from 'react';
import { SearchProducts } from '../../../../../contexts/SearchProducts';

import { FiSearch as SearchIcon} from 'react-icons/fi';
import './SearchProductsInput.scss';

function SearchProductsInput() {
    const { searchProducts, setSearchProducts } = useContext(SearchProducts);

    const handleSearch = (e) => {
        setSearchProducts(e.currentTarget.value);
    }

    return (
        <div className="search-products">
            <form>
                <input
                    type="text"
                    name="search"
                    placeholder="Search for product..."
                    onChange={handleSearch}
                    />

                <button type="button"><SearchIcon /></button>
            </form>
        </div>
    );
}

export default SearchProductsInput;
