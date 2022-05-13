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

//get data from ingredient filter
const fetchFilterCocktailByIngredientStart = () => ({
    type: types.FILTER_COCKTAILS_BY_INGREDIENT_START,
});

const fetchFilterCocktailByIngredientSuccess = (cocktails) => ({
    type: types.FILTER_COCKTAILS_BY_INGREDIENT_SUCCESS,
    payload: cocktails,
});

const fetchFilterCocktailByIngredientFail = (error) => ({
    type: types.FILTER_COCKTAILS_BY_INGREDIENT_FAIL,
    payload: error,
});

/***
 * Get cocktails with alcohol
 */
const fetchFilterCocktailByAlcoholStart = () => ({
    type: types.FILTER_COCKTAILS_BY_ALCOHOL_START,
});

const fetchFilterCocktailByAlcoholSuccess = (cocktails) => ({
    type: types.FILTER_COCKTAILS_BY_ALCOHOL_SUCCESS,
    payload: cocktails,
});

const fetchFilterCocktailByAlcoholFail = (error) => ({
    type: types.FILTER_COCKTAILS_BY_ALCOHOL_FAIL,
    payload: error,
});

/***
 * Get cocktails with non alcohol
 */
 const fetchFilterCocktailByNonAlcoholStart = () => ({
    type: types.FILTER_COCKTAILS_BY_NON_ALCOHOL_START,
});

const fetchFilterCocktailByNonAlcoholSuccess = (cocktails) => ({
    type: types.FILTER_COCKTAILS_BY_NON_ALCOHOL_SUCCESS,
    payload: cocktails,
});

const fetchFilterCocktailByNonAlcoholFail = (error) => ({
    type: types.FILTER_COCKTAILS_BY_NON_ALCOHOL_FAIL,
    payload: error,
});

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
                console.log({ cocktails })
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

export function fetchFilterByIngredient(ingredient) {
    return function (dispatch) {
        dispatch(fetchFilterCocktailByIngredientStart());
        axios
            .get(
                `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${ingredient}`
            )
            .then((response) => {
                const cocktails = response.data.drinks;
                console.log('filter by ingredient ', { cocktails })
                dispatch(fetchFilterCocktailByIngredientSuccess(cocktails));
            })
            .catch((error) => {
                dispatch(fetchFilterCocktailByIngredientFail(error));
            });
    };
}

export function fetchCocktailsByAlcohol() {
    console.log('filter by Alcohol')
    return function (dispatch) {
        dispatch(fetchFilterCocktailByAlcoholStart());
        axios
            .get( `https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Alcoholic`)
            .then((response) => {
                const cocktails = response.data.drinks;
                console.log({cocktails}, 'Alcohol')
                dispatch(fetchFilterCocktailByAlcoholSuccess(cocktails));
            })
            .catch((error) => {
                dispatch(fetchFilterCocktailByAlcoholFail(error));
            });
    };
}

export function fetchCocktailsByNonAlcohol() {
    console.log('filter by Alcohol')
    return function (dispatch) {
        dispatch(fetchFilterCocktailByNonAlcoholStart());
        axios
            .get( `https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic`)
            .then((response) => {
                const cocktails = response.data.drinks;
                console.log({cocktails}, 'Alcohol')
                dispatch(fetchFilterCocktailByNonAlcoholSuccess(cocktails));
            })
            .catch((error) => {
                dispatch(fetchFilterCocktailByNonAlcoholFail(error));
            });
    };
}