import React, { Component } from "react";
import { Link } from "react-router-dom";

const Header = () => (
    <nav className="navbar navbar-expand-md navbar-light navbar-laravel">
        <div className="container">
            <Link className="navbar-brand" to="/">
                Ajouter un Etudiant
            </Link>
        </div>
    </nav>
);

export default Header;
