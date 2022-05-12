import axios from "axios";


const fetchCocktailsCategories = async () => {
    const promise =  axios.get(`https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list`);
    const dataPromise = await promise.then((response) => response.data.drinks)
    return Promise.resolve(dataPromise);
};

export const  getCategoryFilters = async () => {
    return  await fetchCocktailsCategories();
}

