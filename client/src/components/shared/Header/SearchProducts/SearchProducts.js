import './SearchProducts.scss';

function SearchProducts() {
    return (
        <div className="search-products">
            <form>
                <input type="text" name="search" placeholder="Search for product..."/>
                <button type="button">Search!</button>
            </form>
        </div>
    );
}

export default SearchProducts;
