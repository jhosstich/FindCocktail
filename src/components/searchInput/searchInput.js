import React, { useRef } from "react";
import { fetchSearchCocktail } from  "../../redux/action";
import { useDispatch } from "react-redux";
import './searchInput.scss';
import Filters from "../filters/Filters";

const SearchInput = () => {

    const searchValue = useRef();

    const dispatch = useDispatch();
    const searchCocktail = () => {
        dispatch(fetchSearchCocktail(searchValue.current.value));
    };
    const handleSubmit = (e) => {
        e.preventDefault();
    };

    return (
        <section className="section search search-form">
            <form  onSubmit={handleSubmit}>
                <div className="form-control">
                    <label htmlFor="name">Search Cocktail</label>
                    <input
                        type="text"
                        name="name"
                        id="name"
                        ref={searchValue}
                        onChange={searchCocktail}
                        placeholder='Find your favorite cocktail'
                    />
                </div>
            </form>
            <Filters />
        </section>
    );
}

export default SearchInput;