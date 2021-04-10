import {  useContext } from 'react';
import { Filter } from '../../../../contexts/Filter';
import './Slider.scss';

const Slider = () => {
    const { filter, setFilter } = useContext(Filter);

    const handlePriceFilter = (e) => {
        setFilter((curr) => {
            return {
                ...curr,
                price: e.target.value,
            }
        });
    }

    return (
        <div className="slider-wrapper">
            <p>Price Range:</p>
            <p className="price-range"><span>$0.00</span> - <span>${filter.price}.00</span></p>

            <input
                onChange={handlePriceFilter}
                type="range"
                min="0"
                max="1000"
                value={filter.price}
                className="slider"
                />
        </div>
    );
}

export default Slider;