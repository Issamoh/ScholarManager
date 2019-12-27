import React, { useState } from "react";
import logo from "./logo.svg";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import { LinkContainer } from "react-router-bootstrap";
const NavigBar = props => {
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <LinkContainer to="/">
                    <Navbar.Brand href="#home">
                        <img
                            alt=""
                            src={logo}
                            width="30"
                            height="30"
                            className="d-inline-block align-top"
                        />{" "}
                        Gestion de scolarité
                    </Navbar.Brand>
                </LinkContainer>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                        <NavDropdown
                            title="Gestion des étudiants"
                            id="collasible-nav-dropdown"
                        >
                            <LinkContainer to="/AjoutEtudiant">
                                <NavDropdown.Item>
                                    Ajouter un étudiant
                                </NavDropdown.Item>
                            </LinkContainer>
                            <LinkContainer to="/Affect">
                                <NavDropdown.Item>
                                    Affectation aux groupes
                                </NavDropdown.Item>
                            </LinkContainer>
                        </NavDropdown>
                        <Nav.Link disabled>Gestion des enseignants </Nav.Link>
                    </Nav>
                    <Nav>
                        <LinkContainer to="/Apropos">
                            <Nav.Link>A propos de nous</Nav.Link>
                        </LinkContainer>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
};
export default NavigBar;
