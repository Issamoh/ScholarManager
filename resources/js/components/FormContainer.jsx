import React, { Component } from "react";

/* Import Components */
import Input from "./Input";
import Select from "./Select";
import Button from "react-bootstrap/Button";
import ButtonToolbar from "react-bootstrap/ButtonToolbar";
import { Row, Col } from "react-bootstrap";

class FormContainer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            newUser: {
                nom: "",
                prenom: "",
                email: "",
                dateNaissance: "",
                gender: "",
                tel: "",
                moyenneBac: "",
                lieuNaissance: ""
            },

            genderOptions: ["Mâle", "Femelle"]
        };
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
        this.handleClearForm = this.handleClearForm.bind(this);
        this.handleText = this.handleText.bind(this);
        this.handleNumber = this.handleNumber.bind(this);
        this.handleInput = this.handleInput.bind(this);
    }
    handleText(e) {
        let value = e.target.value;
        this.setState(
            prevState => ({
                newUser: {
                    ...prevState.newUser,
                    name: value
                }
            }),
            () => console.log(this.state.newUser)
        );
    }
    handleNumber(e) {
        let value = e.target.value;
        this.setState(
            prevState => ({
                newUser: {
                    ...prevState.newUser,
                    dateNaissance: value
                }
            }),
            () => console.log(this.state.newUser)
        );
    }
    handleInput(e) {
        let value = e.target.value;
        let name = e.target.name;
        this.setState(
            prevState => {
                return {
                    newUser: {
                        ...prevState.newUser,
                        [name]: value
                    }
                };
            },
            () => console.log(this.state.newUser)
        );
    }

    /* This life cycle hook gets executed when the component mounts */

    // Form submission logic
    handleFormSubmit(e) {
        e.preventDefault();
        let userData = this.state.newUser;

        fetch("api/etudiants/", {
            method: "POST",
            body: JSON.stringify(userData),
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            }
        }).then(response => {
            response.json().then(data => {
                console.log("Successful" + data);
            });
        });
    }
    handleClearForm(e) {
        // Logic for resetting the form

        e.preventDefault();
        this.setState({
            newUser: {
                nom: "",
                prenom: "",
                email: "",
                dateNaissance: "",
                gender: "",
                tel: "",
                moyenneBac: "",
                lieuNaissance: ""
            }
        });
    }
    render() {
        return (
            <form className="container-fluid" onSubmit={this.handleFormSubmit}>
                <Row>
                    <Col>
                        <Input
                            type={"text"}
                            title={"Nom "}
                            name={"nom"}
                            value={this.state.newUser.nom}
                            placeholder={"Entrer le nom "}
                            handleChange={this.handleInput}
                        />{" "}
                        {/* Name of the user */}
                    </Col>
                    <Col>
                        <Input
                            type={"text"}
                            title={"Prenom "}
                            name={"prenom"}
                            value={this.state.newUser.prenom}
                            placeholder={"Entrer le prenom "}
                            handleChange={this.handleInput}
                        />{" "}
                        {/* Name of the user */}
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Input
                            type={"date"}
                            title={" dateNaissance "}
                            name={"dateNaissance"}
                            value={this.state.newUser.dateNaissance}
                            placeholder={"Entrer la date de naissance "}
                            handleChange={this.handleInput}
                        />{" "}
                        {/* Input for birth date */}
                    </Col>
                    <Col>
                        <Input
                            type={"text"}
                            title={" lieuNaissance "}
                            name={"lieuNaissance"}
                            value={this.state.newUser.lieuNaissance}
                            placeholder={"Entrer le lieu de naissance "}
                            handleChange={this.handleInput}
                        />{" "}
                        {/* Input for birth place */}
                    </Col>
                </Row>
                <Input
                    type={"email"}
                    title={"E-mail"}
                    name={"email"}
                    value={this.state.newUser.email}
                    placeholder={"E-mail "}
                    handleChange={this.handleInput}
                />{" "}
                {/* email */}
                <Input
                    type={"tel"}
                    title={"Téléphone"}
                    name={"tel"}
                    value={this.state.newUser.tel}
                    placeholder={"tel "}
                    handleChange={this.handleInput}
                />{" "}
                {/* tel */}
                <Input
                    type={"number"}
                    title={"Moyenne de Bac"}
                    name={"moyenneBac"}
                    value={this.state.newUser.moyenneBac}
                    placeholder={"Entrer la moyenne de bac "}
                    handleChange={this.handleInput}
                />{" "}
                {/* moyenneBac */}
                <Select
                    title={"Sexe"}
                    name={"gender"}
                    options={this.state.genderOptions}
                    value={this.state.newUser.gender}
                    placeholder={"choisir le sexe"}
                    handleChange={this.handleInput}
                />{" "}
                {/* Gender Selection */}
                <ButtonToolbar
                    className="justify-content-between"
                    aria-label="Toolbar with Button groups"
                >
                    <Button
                        type="submit"
                        variant="outline-primary"
                        size="lg"
                        onClick={this.handleFormSubmit}

                        // style={buttonStyle}
                    >
                        Valider
                    </Button>{" "}
                    {/*Submit */}
                    <Button
                        variant="outline-primary"
                        size="lg"
                        //  action={this.handleClearForm}
                        onClick={this.handleClearForm}
                        /*  type={"secondary"}
                    title={"Clear"}*/
                    >
                        Effacer
                    </Button>
                    {/* Clear the form */}
                </ButtonToolbar>
            </form>
        );
    }
}

export default FormContainer;
