import {  useContext, useState, useEffect } from 'react';
import { Filter } from '../../../../contexts/Filter';
import { getAll as getAllCategories } from '../../../../services/categoryService';
import './CategoryFilter.scss';

const CategoryFilter = () => {
    const { filter, setFilter } = useContext(Filter);
    const [categories, setCategories] = useState("");

    useEffect(() => {
        getAllCategories()
            .then(res => res.json())
            .then(categories => {
                setCategories(categories);
            });
    }, [categories, setCategories]);

    const handleCategoryFilter = (e) => {
        setFilter((curr) => {
            return {
                ...curr,
                category: e.target.value,
            }
        });
    }

    return (
        <div className="category-filter-wrapper">
            <p>Category:</p>

            <label class="category-option">All Categories
                <input type="radio" name="radio" value="" onChange={handleCategoryFilter}/>
                <span class="checkmark"></span>
            </label>
            {
                categories
                ? categories.map(category => (
                    <label key={category._id} class="category-option">{category.name}
                        <input type="radio" name="radio" value={category.name} onChange={handleCategoryFilter}/>
                        <span class="checkmark"></span>
                    </label>
                ))
                : ''
            }
        </div>
    );
}

export default CategoryFilter;