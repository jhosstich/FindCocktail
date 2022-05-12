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
          dispatch(fetchSearchCocktailSuccess(cocktails));
        })
        .catch((error) => {
          dispatch(fetchSearchCocktailFail(error));
        });
    };
  }