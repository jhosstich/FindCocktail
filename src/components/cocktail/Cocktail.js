import React from "react";
import './Cocktail.scss'

const Cocktail = ({ cocktail }) => {
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
                    { glassType && <p className="card-title"><span>Glass type:</span> {glassType}</p> }
                    { category && <p><span>Category:</span> {category}</p>}
                    { !glassType && !category && <a> Click here for more details</a> }
                </div>
            </div>
            <hr className="solid" />
        </div>
    );
}

export default Cocktail;
