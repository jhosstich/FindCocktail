import * as types from './actionType';

const initialState = {
    cocktails: [],
    loading: false,
    error: null
};

const cocktailReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.FETCH_COCKTAILS_START:
            return {
                ...state,
                loading: true
            }

        case types.FETCH_COCKTAILS_SUCCESS:
            return {
                ...state,
                loading: false,
                cocktails: action.payload
            }

        case types.FETCH_COCKTAILS_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        case types.SEARCH_COCKTAIL_START:
            return {
                ...state,
                loading: true,
            };
        case types.SEARCH_COCKTAIL_SUCCESS:
            return {
                ...state,
                loading: false,
                cocktails: action.payload,
            };
        case types.SEARCH_COCKTAIL_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload,
            };

        case types.FILTER_COCKTAILS_BY_CATEGORY_START:
            return {
                ...state,
                loading: true,
            };
        case types.FILTER_COCKTAILS_BY_CATEGORY_SUCCESS:
            return {
                ...state,
                loading: false,
                cocktails: action.payload,
            };
        case types.FILTER_COCKTAILS_BY_CATEGORY_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload,
            };

        case types.FILTER_COCKTAILS_BY_INGREDIENT_START:
            return {
                ...state,
                loading: true,
            };
        case types.FILTER_COCKTAILS_BY_INGREDIENT_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload,

            };
        case types.FILTER_COCKTAILS_BY_INGREDIENT_SUCCESS:
            return {
                ...state,
                loading: false,
                cocktails: action.payload,
            };
        case types.FILTER_COCKTAILS_BY_ALCOHOL_START:
            return {
                ...state,
                loading: true,
            };
        case types.FILTER_COCKTAILS_BY_ALCOHOL_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload,

            };
        case types.FILTER_COCKTAILS_BY_ALCOHOL_SUCCESS:
            return {
                ...state,
                loading: false,
                cocktails: action.payload,
            };
        case types.FILTER_COCKTAILS_BY_NON_ALCOHOL_START:
            return {
                ...state,
                loading: true,
            };
        case types.FILTER_COCKTAILS_BY_NON_ALCOHOL_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload,

            };
        case types.FILTER_COCKTAILS_BY_NON_ALCOHOL_SUCCESS:
            return {
                ...state,
                loading: false,
                cocktails: action.payload,
            };
        default:
            return state;
    }
}

export default cocktailReducer;