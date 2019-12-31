import React, { Component } from "react";
import Select from "./Select";
import Button from "react-bootstrap/Button";
import ButtonToolbar from "react-bootstrap/ButtonToolbar";
import Input from "./Input";
class FormAffect extends Component {
    constructor(props) {
        super(props);
        this.state = {
            affectation: {
                niveauEtude: "",
                nbrMaxPGroupe: ""
            },

            niveauOptions: [
                "1CP",
                "2CP",
                "1CS",
                "2CSSIQ",
                "2CSSIL",
                "2CSSIT",
                "3CSSIQ",
                "3CSSIL",
                "3CSSIT"
            ]
        };
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
        this.handleClearForm = this.handleClearForm.bind(this);
        this.handleInput = this.handleInput.bind(this);
    }
    handleInput(e) {
        let value = e.target.value;
        let name = e.target.name;
        this.setState(
            prevState => {
                return {
                    affectation: {
                        ...prevState.affectation,
                        [name]: value
                    }
                };
            },
            () => console.log(this.state.affectation)
        );
    }

    /* This life cycle hook gets executed when the component mounts */

    // Form submission logic
    handleFormSubmit(e) {
        e.preventDefault();
        let affectData = this.state.affectation;

        fetch("api/affect", {
            method: "POST",
            body: JSON.stringify(affectData),
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            }
        })
            .then(response => response.json())
            .then(
                data => console.log("Successful" + data),
                alert("Affectation terminée avec succes"),
                e.preventDefault(),
                this.setState({
                    affectation: {
                        niveauEtude: "",
                        nbrMaxPGroupe: ""
                    }
                })
            )
            .catch(
                err => console.log("échec"),
                alert("Affectation non terminée")
            );
    }
    handleClearForm(e) {
        // Logic for resetting the form

        e.preventDefault();
        this.setState({
            affectation: {
                niveauEtude: "",
                nbrMaxPGroupe: ""
            }
        });
    }
    render() {
        return (
            <form className="container-fluid" onSubmit={this.handleFormSubmit}>
                <Select
                    title={"Niveau d'étude"}
                    name={"niveauEtude"}
                    options={this.state.niveauOptions}
                    value={this.state.affectation.niveauOptions}
                    placeholder={"choisir le niveau d'étude"}
                    handleChange={this.handleInput}
                />{" "}
                {/* study level Selection */}
                <Input
                    type={"number"}
                    title={"nombre maximale d'étudiants par groupe"}
                    name={"nbrMaxPGroupe"}
                    value={this.state.affectation.nbrMaxPGroupe}
                    placeholder={
                        "Entrer le nombre maximale d'étudiants par groupe "
                    }
                    handleChange={this.handleInput}
                />{" "}
                {/* nbr max par groupe */}
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

export default FormAffect;
