import React, { Component } from "react";
import "./Main.css";
import { Link } from "react-router-dom";
function Nav() {
    return (
        <nav>
            <h3>Logo</h3>
            <ul className="nav-links">
                <Link to="/AjoutEtudiant">
                    <li>Ajouter un Etudiant</li>
                </Link>
                <Link to="/Affect">
                    <li>Affectation aux groupes</li>
                </Link>
                <Link to="/Apropos">
                    <li>A propos</li>
                </Link>
            </ul>
        </nav>
    );
}

export default Nav;
