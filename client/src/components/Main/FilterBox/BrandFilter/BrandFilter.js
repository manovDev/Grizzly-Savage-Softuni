import {  useContext, useState, useEffect } from 'react';
import { Filter } from '../../../../contexts/Filter';
import { getAll as getAllBrands } from '../../../../services/brandService';
import './BrandFilter.scss';

const BrandFilter = () => {
    const { filter, setFilter } = useContext(Filter);
    const [brands, setBrands] = useState("");

    useEffect(() => {
        getAllBrands()
            .then(res => res.json())
            .then(brands => {
                setBrands(brands);
            });
    }, [brands, setBrands]);

    const handleBrandFilter = (e) => {
        setFilter((curr) => {
            return {
                ...curr,
                brand: e.target.value,
            }
        });
    }

    return (
        <div className="brand-filter-wrapper">
            <p>Brand:</p>

            <label className="brand-option">All Brands
                <input type="radio" name="radio" value="" onChange={handleBrandFilter}/>
                <span className="checkmark"></span>
            </label>
            {
                brands
                ? brands.map(brand => (
                    <label key={brand._id} className="brand-option">{brand.name}
                        <input type="radio" name="radio" value={brand.name} onChange={handleBrandFilter}/>
                        <span className="checkmark"></span>
                    </label>
                ))
                : ''
            }
        </div>
    );
}

export default BrandFilter;