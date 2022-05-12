import React from "react";
import './Header.scss'

const Header = () => {
    return (
        <div>
            <nav className="navbar navbar-light bg-light text-center fixed-top">
                <div className="container-fluid container">
                    <span className="navbar-brand brand-title"> Find Your Cocktail</span>
                </div>
            </nav>
        </div>
    );
}

export default Header;