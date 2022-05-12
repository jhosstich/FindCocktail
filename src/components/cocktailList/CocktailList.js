import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCocktails } from "../../redux/action";
import Cocktail from "../cocktail/Cocktail";
import ModalCocktail from '../cocktailModal/cocktailModal'
import "./CocktailList.scss";

const CocktailList = () => {
    const { cocktails, loading } = useSelector((state) => ({ ...state.data }));
    const [modifiedCocktails, setModifiedCocktails] = useState([]);

    const [showModal, setShowModal] = useState(false);
    const [cocktailId, setCocktailId] = useState(null);

    var dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchCocktails());
    }, []);

    const modifyCocktailList = (cocktails) => {
        if (cocktails) {
            const newCocktails = cocktails.map((cocktail) => {
                const {
                    idDrink, strDrink, strDrinkThumb, strAlcoholic, strGlass, strCategory } = cocktail;
                return {
                    id: idDrink,
                    name: strDrink,
                    image: strDrinkThumb,
                    alcohol: strAlcoholic,
                    glassType: strGlass,
                    category: strCategory,
                };
            });
            setModifiedCocktails(newCocktails);
        } else {
            setModifiedCocktails([]);
        }
    }

    useEffect(() => {
        modifyCocktailList(cocktails)
    }, [cocktails]);

    const openModal = (item) => {
        setCocktailId(item.id);
        setShowModal(true);
    }

    useEffect(() => {
        if (!showModal) setCocktailId(null);
    }, [showModal]);

    if (loading) {
        return (
            <div className="top spinner-grow" role="status">
                <span className="visually-hidden"> Loading...</span>
            </div>
        );
    }

    if (!cocktails) {
        return (
            <div className="top container">
                <h2> No cocktails match your search criteria</h2>
            </div>
        );
    }

    return (
        <>
            <div className="top container">
                {modifiedCocktails.map((item) => {
                    return <div className="pointer " key={item.id} onClick={() => openModal(item)}><Cocktail key={item.id} cocktail={item} /></div>
                })}
            </div>
            <ModalCocktail cocktailId={cocktailId} onClose={() => setShowModal(false)} show={showModal} />
        </>
    );
};

export default CocktailList;
