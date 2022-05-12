import React, { useEffect, useState } from "react";
import { getCategoryFilters } from './FilterAction'
import { useDispatch } from "react-redux";
import { fetchFilterByCategory, fetchCocktails } from "../../redux/action";
import './Filters.scss'

const NO_CATEGORY = 'NO_CATEGORY'

const Filters = () => {
    const [categoryFilters, setCategoryFilters] = useState(null);
    const [categorySelected, setCategorySelected] = useState(undefined);
    const dispatch = useDispatch();


    useEffect(() => {
        fetchCategories()
    }, []);

    const fetchCategories = async () => {
        setCategoryFilters(await getCategoryFilters())
    }

    const handleCategoryChange = (e) => {
        if(e.target.value == NO_CATEGORY) {
            dispatch(fetchCocktails());
        }
        else setCategorySelected(e.target.value);
    }

    useEffect(() => {
        if (categorySelected) dispatch(fetchFilterByCategory(categorySelected));
    }, [categorySelected]);

    if (!categoryFilters) {
        return <></>
    }

    return (
        <>
            <h5>Filters</h5>
            <form className="row">
                <div className=" col-md-4 col-5 form-group">
                    <label htmlFor="selectCategory">
                        <small> Category</small>
                    </label>
                    <select id="selectCategory" className="form-control" value={categorySelected} onChange={handleCategoryChange}>
                        <option value={NO_CATEGORY}>Select a category</option>
                        {categoryFilters.map((item) => {
                            if (item.strCategory !== null)
                                return <option key={item.strCategory} value={item.strCategory}> {item.strCategory}</option>;
                        })}
                    </select>
                </div>
            </form>
        </>
    );
}

export default Filters;