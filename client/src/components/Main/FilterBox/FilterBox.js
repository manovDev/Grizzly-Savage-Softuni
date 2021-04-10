import Slider from './Slider';
import CategoryFilter from './CategoryFilter';
import BrandFilter from './BrandFilter';
import './FilterBox.scss';

const FilterBox = () => {

    return (
        <aside className="filter-box">
            <Slider />
            <CategoryFilter />
            <BrandFilter />
        </aside>
    );
}

export default FilterBox;