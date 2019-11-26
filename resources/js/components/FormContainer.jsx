import React, { Component } from "react";

/* Import Components */
import Input from "./Input";
import Select from "./Select";
import Button from "react-bootstrap/Button";

class FormContainer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            newUser: {
                matricule:"",
                nom: "",
                prenom: "",
                dateNaissance: "",
                lieuNaissance:"",
                email: "",
                tel: ""
            },

            //genderOptions: ["Male", "Female", "Others"]
        };
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
        this.handleClearForm = this.handleClearForm.bind(this);
        this.handleText = this.handleText.bind(this);
        //this.handleNumber = this.handleNumber.bind(this);
        this.handleInput = this.handleInput.bind(this);
    }
    handleText(e) {
        let value = e.target.value;
        this.setState(
            prevState => ({
                newUser: {
                    ...prevState.newUser,
                    nom: value
                }
            }),
            () => console.log(this.state.newUser)
        );
    }
    /*handleNumber(e) {
        let value = e.target.value;
        this.setState(
            prevState => ({
                newUser: {
                    ...prevState.newUser,
                    age: value
                }
            }),
            () => console.log(this.state.newUser)
        );
    }*/
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
        
        fetch("api/ajoutEtudiant", {
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
                matricule:"",
                nom: "",
                prenom: "",
                dateNaissance: "",
                lieuNaissance:"",
                email: "",
                tel: ""
            }
        });
    }
    render() {
        return (
            <form className="container-fluid" onSubmit={this.handleFormSubmit}>
                <Input
                    type={"text"}
                    title={"Matricule"}
                    name={"matricule"}
                    value={this.state.newUser.matricule}
                    placeholder={"Entrer le nom "}
                    handleChange={this.handleInput}
                />{" "}
                <Input
                    type={"text"}
                    title={"Nom"}
                    name={"nom"}
                    value={this.state.newUser.nom}
                    placeholder={"Entrer le nom "}
                    handleChange={this.handleInput}
                />{" "}
                <Input
                    type={"text"}
                    title={"Prenom"}
                    name={"prenom"}
                    value={this.state.newUser.prenom}
                    placeholder={"Entrer le nom "}
                    handleChange={this.handleInput}
                />{" "}
                <Input
                    type={"text"}
                    title={"date naissance"}
                    name={"dateNaissance"}
                    value={this.state.newUser.dateNaissance}
                    placeholder={"Entrer le nom "}
                    handleChange={this.handleInput}
                />{" "}
                <Input
                    type={"text"}
                    title={"lieu naissance"}
                    name={"lieuNaissance"}
                    value={this.state.newUser.lieuNaissance}
                    placeholder={"Entrer le nom "}
                    handleChange={this.handleInput}
                />{" "}
                <Input
                    type={"text"}
                    title={"Email"}
                    name={"email"}
                    value={this.state.newUser.email}
                    placeholder={"Entrer le nom "}
                    handleChange={this.handleInput}
                />{" "}
                <Input
                    type={"text"}
                    title={"Tel"}
                    name={"tel"}
                    value={this.state.newUser.tel}
                    placeholder={"Entrer le nom "}
                    handleChange={this.handleInput}
                />{" "}
                
                <Button
                    type="submit"
                    variant="outline-primary"
                    onClick={this.handleFormSubmit}

                    // style={buttonStyle}
                >
                    Valider
                </Button>{" "}
                {/*Submit */}
                <Button
                    variant="outline-primary"
                    //  action={this.handleClearForm}
                    onClick={this.handleClearForm}
                    /*  type={"secondary"}
                    title={"Clear"}*/
                >
                    Clear
                </Button>
                {/* Clear the form */}
            </form>
        );
    }
}
const buttonStyle = {
    margin: "10px 10px 10px 10px"
};
export default FormContainer;
