import React, { useEffect, useState } from "react";
import { getCategoryFilters, getCategoryIngredients } from './FilterAction'
import { useDispatch } from "react-redux";
import { fetchFilterByCategory, fetchCocktails, fetchFilterByIngredient, fetchCocktailsByAlcohol, fetchCocktailsByNonAlcohol } from "../../redux/action";
import './Filters.scss'

const NO_SELECTED = 'NO_SELECTED';

const Filters = () => {
    const [categoryFilters, setCategoryFilters] = useState(undefined);
    const [categorySelected, setCategorySelected] = useState(undefined);

    const [ingredientsFilters, setIngredientsFilters] = useState(undefined);
    const [ingredientSelected, setIngredientSelected] = useState(undefined);

    const [alcoholChecked, setAlcoholChecked] = useState(false);
    const [nonAlcoholChecked, setNonAlcoholChecked] = useState(false);


    const dispatch = useDispatch();

    useEffect(() => {
        fetchCategories();
        fetchingredients();
    }, []);

    const fetchCategories = async () => {
        setCategoryFilters(await getCategoryFilters())
    }

    const handleCategoryChange = (e) => {
        if (e.target.value == NO_SELECTED) {
            dispatch(fetchCocktails());
            setCategorySelected(NO_SELECTED)
        }
        else setCategorySelected(e.target.value);
        setIngredientSelected(NO_SELECTED)
        setAlcoholChecked(false)
        setNonAlcoholChecked(false)
    }

    const fetchingredients = async () => {
        setIngredientsFilters(await getCategoryIngredients());
    }

    const handleIngredientChange = (e) => {
        if (e.target.value == NO_SELECTED) {
            dispatch(fetchCocktails());
            setIngredientSelected(NO_SELECTED)
        }
        else setIngredientSelected(e.target.value);
        setCategorySelected(NO_SELECTED)
        setAlcoholChecked(false)
        setNonAlcoholChecked(false)
    }

    const handleFilterByAlchohol = () => {
        setAlcoholChecked(!alcoholChecked)
        setCategorySelected(NO_SELECTED)
        setIngredientSelected(NO_SELECTED)
        setNonAlcoholChecked(false)
    }

    const handleFilterByNonAlchohol = () => {
        setNonAlcoholChecked(!nonAlcoholChecked)
        setCategorySelected(NO_SELECTED)
        setIngredientSelected(NO_SELECTED)
        setAlcoholChecked(false)
    }

    useEffect(() => {
        if (categorySelected && categorySelected !== NO_SELECTED) dispatch(fetchFilterByCategory(categorySelected));
    }, [categorySelected]);

    useEffect(() => {
        if (ingredientSelected && ingredientSelected !== NO_SELECTED) dispatch(fetchFilterByIngredient(ingredientSelected));
    }, [ingredientSelected]);

    useEffect(() => {
        if (alcoholChecked) dispatch(fetchCocktailsByAlcohol())
        if (nonAlcoholChecked) dispatch(fetchCocktailsByNonAlcohol())
        if(!alcoholChecked && !nonAlcoholChecked) dispatch(fetchCocktails());

    }, [alcoholChecked, nonAlcoholChecked]);

    if (!categoryFilters || !ingredientsFilters) {
        return <></>
    }

    return (
        <>
            <h5>Filters</h5>
            <form className="row">
                <div className=" col-md-4 col-6 form-group">
                    <label>
                        <small> Category</small>
                    </label>
                    <select id="selectCategory" className="form-control" value={categorySelected} onChange={handleCategoryChange}>
                        <option value={NO_SELECTED}>Select a category</option>
                        {categoryFilters.map((item) => {
                            if (item.strCategory !== null)
                                return <option key={item.strCategory} value={item.strCategory}> {item.strCategory}</option>
                            return <></>
                        })}
                    </select>
                </div>
                <div className=" col-md-4 col-6 form-group">
                    <label>
                        <small> Ingredient</small>
                    </label>
                    <select className="form-control" value={ingredientSelected} onChange={handleIngredientChange}>
                        <option value={NO_SELECTED}>Select a Ingredient</option>
                        {ingredientsFilters.map((item) => {
                            if (item.strIngredient1 !== null)
                                return <option key={item.strIngredient1} value={item.strIngredient1}> {item.strIngredient1}</option>
                            return <></>
                        })}
                    </select>
                </div>
                <div className="col-md-4 col-12 form-check mt-2">
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" id="flexCheckDefault" onChange={handleFilterByAlchohol} checked={alcoholChecked} />
                        <label className="form-check-label" htmlFor="flexCheckDefault">
                            <small>Alchoholic</small>
                        </label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" id="flexCheckChecked" onChange={handleFilterByNonAlchohol} checked={nonAlcoholChecked} />
                        <label className="form-check-label" htmlFor="flexCheckChecked">
                            <small>Non Alcoholic</small>
                        </label>
                    </div>
                </div>
            </form>
        </>
    );
}

export default Filters;