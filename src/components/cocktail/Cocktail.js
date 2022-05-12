import React from "react";
import './Cocktail.scss'

const Cocktail = ({ cocktail, openModal }) => {
    const { id, name, image, glassType, alcohol, category } = cocktail;

    if (!cocktail) return <></>;
    return (
        <div className="cocktail col-12" key={id}>
            <div className="row">
                <div className="col-md-4 col-5">
                    <img src={image} alt={name} />
                    <h6 className="mt-2">{alcohol}</h6>
                </div>
                <div className="col-md-8 col-7 cocktail-info">
                    <h4 className="card-title">{name}</h4>
                    <p className="card-title"><span>Glass type:</span> {glassType}</p>
                    <p><span>Category:</span> {category}</p>
                </div>
            </div>
            <hr className="solid" />
        </div>
    );
}

export default Cocktail;
