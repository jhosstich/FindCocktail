import * as types from "./actionType";
import axios from "axios";

//functions to fetch cocktails List
const fetchCocktailsStart = () => {
    return {
        type: types.FETCH_COCKTAILS_START,
    };
};

const fetchCocktailsSuccess = (cocktails) => {
    return {
        type: types.FETCH_COCKTAILS_SUCCESS,
        payload: cocktails
    };
};

const fetchCocktailsFail = (error) => {
    return {
        type: types.FETCH_COCKTAILS_FAIL,
        payload: error,
    }
};

//get data from search
const fetchSearchCocktailStart = () => ({
    type: types.SEARCH_COCKTAIL_START,
});

const fetchSearchCocktailSuccess = (cocktails) => ({
    type: types.SEARCH_COCKTAIL_SUCCESS,
    payload: cocktails,
});

const fetchSearchCocktailFail = (error) => ({
    type: types.SEARCH_COCKTAIL_FAIL,
    payload: error,
});

//get data from category filter
const fetchFilterCocktailByCategoryStart = () => ({
    type: types.FILTER_COCKTAILS_BY_CATEGORY_START,
});

const fetchFilterCocktailByCategorySuccess = (cocktails) => ({
    type: types.FILTER_COCKTAILS_BY_CATEGORY_SUCCESS,
    payload: cocktails,
});

const fetchFilterCocktailByCategoryFail = (error) => ({
    type: types.FILTER_COCKTAILS_BY_CATEGORY_FAIL,
    payload: error,
});

//get cocktails List
export function fetchCocktails() {
    return function (dispatch) {
        dispatch(fetchCocktailsStart());
        axios
            .get("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=")
            .then((response) => {
                const cocktails = response.data.drinks;
                dispatch(fetchCocktailsSuccess(cocktails));
            })
            .catch((error) => {
                dispatch(fetchCocktailsFail(error));
            });
    };
}

export function fetchSearchCocktail(searchText) {
    return function (dispatch) {
        dispatch(fetchSearchCocktailStart());
        axios
            .get(
                `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchText}`
            )
            .then((response) => {
                const cocktails = response.data.drinks;
                console.log({cocktails})
                dispatch(fetchSearchCocktailSuccess(cocktails));
            })
            .catch((error) => {
                dispatch(fetchSearchCocktailFail(error));
            });
    };
}

export function fetchFilterByCategory(category) {
    return function (dispatch) {
        dispatch(fetchFilterCocktailByCategoryStart());
        axios
            .get(
                `https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${category}`
            )
            .then((response) => {
                const cocktails = response.data.drinks;
                dispatch(fetchFilterCocktailByCategorySuccess(cocktails));
            })
            .catch((error) => {
                dispatch(fetchFilterCocktailByCategoryFail(error));
            });
    };
}