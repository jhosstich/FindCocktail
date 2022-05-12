import React from "react";
import CocktailList from "../components/cocktailList/CocktailList";
import SearchInput from "../components/searchInput/searchInput";

const Home = () => {
    return (
        <div>
            <SearchInput/>
            <CocktailList/>
        </div>
    );
}

export default Home;