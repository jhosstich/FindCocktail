import React, { useState, useEffect } from "react";
import Modal from 'react-modal';
import './cocktailModal.scss'
import axios from "axios";


const ModalCocktail = (props) => {
    const [cocktail, setCocktail] = useState(null);

    const fetchCocktailById = (id) => {
        axios
            .get(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`)
            .then((response) => {
                setCocktail(response.data.drinks);
            })
    };

    useEffect(() => {
        if(props.cocktailId) fetchCocktailById(props.cocktailId)
    }, [props.cocktailId]);

    useEffect(() => {
        if (cocktail) console.log({ cocktail })
    }, [cocktail]);

    if (!cocktail) {
        return <></>
    }

    const {
        strDrink: name,
        strDrinkThumb: image,
        strAlcoholic: alcohol,
        strCategory: category,
        strGlass: glassType,
        strInstructions: instructions,
        strIngredient1,
        strIngredient2,
        strIngredient3,
        strIngredient4,
        strIngredient5,
    } = cocktail[0];

    const ingredients = [
        strIngredient1,
        strIngredient2,
        strIngredient3,
        strIngredient4,
        strIngredient5,
    ];

    Modal.setAppElement(document.getElementById('root'));
    return (
        <Modal
            isOpen={props.show}
            onRequestClose={props.onClose}
            style={customStyles}
            className="react-modal"
        >
            <div className="modal-header">
                <h5 className="modal-title">Cocktail Details</h5>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={props.onClose}></button>
            </div>
            <div className="modal-body">
                <div className="row">
                    <div className=" col-5">
                        <img src={image} alt={name} />
                        <h6 className="mt-2">{alcohol}</h6>
                    </div>
                    <div className=" col-7 cocktail-info">
                        <h4 className="card-title">{name}</h4>
                        <p className="card-title"><span>Glass type:</span> {glassType}</p>
                        <p><span>Category:</span> {category}</p>
                    </div>
                    <div className="mt-3 col-12">
                        <span className="drink-data">Instructions:</span>
                        <p>{instructions}</p>
                        <div>
                            <span className="drink-data">Ingredients:</span>
                            <ul>
                                {ingredients.map((item, index) => {
                                    return item ? <li key={index}>{item}</li> : null;
                                })}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </Modal>
    );
}

export default ModalCocktail;

const customStyles = {
    content: {
        top: '55%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',

    },
};
