import React, { useState } from "react";
import {
    Nav,
    NavItem,
    Dropdown,
    DropdownItem,
    DropdownToggle,
    DropdownMenu,
    NavLink,
    Navbar
} from "reactstrap";
import { Link } from "react-router-dom";
const NavigBar = props => {
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const toggle = () => setDropdownOpen(!dropdownOpen);

    return (
        <div>
            <Navbar bg="dark" variant="dark">
                <Nav className="mr-auto">
                    <Link to="/">
                        <NavItem>
                            <NavLink active>Gestion de scolarité</NavLink>
                        </NavItem>
                    </Link>
                    <Dropdown nav isOpen={dropdownOpen} toggle={toggle}>
                        <DropdownToggle nav caret>
                            Gestion des étudiants
                        </DropdownToggle>
                        <DropdownMenu>
                            <Link to="/AjoutEtudiant">
                                <DropdownItem>Ajouter un étudiant</DropdownItem>
                            </Link>
                            <Link to="/Affect">
                                <DropdownItem>
                                    Affectation aux groupes
                                </DropdownItem>
                            </Link>
                        </DropdownMenu>
                    </Dropdown>
                    <NavItem>
                        <NavLink disabled href="#">
                            Gestions des enseignants
                        </NavLink>
                    </NavItem>

                    <Link to="/Aprops">
                        <NavItem>
                            <NavLink>A propos de nous</NavLink>
                        </NavItem>
                    </Link>
                </Nav>
            </Navbar>
        </div>
    );
};

export default NavigBar;
