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
                name: "",
                email: "",
                age: "",
                gender: "",
                phone: "",
                bacDegree: ""
            },

            genderOptions: ["Male", "Female", "Others"]
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
                    age: value
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
                name: "",
                email: "",
                age: "",
                gender: "",
                phone: "",
                bacDegree: ""
            }
        });
    }
    render() {
        return (
            <form className="container-fluid" onSubmit={this.handleFormSubmit}>
                <Input
                    type={"text"}
                    title={"Nom & Prenom"}
                    name={"name"}
                    value={this.state.newUser.name}
                    placeholder={"Entrer le nom "}
                    handleChange={this.handleInput}
                />{" "}
                {/* Name of the user */}
                <Input
                    type={"number"}
                    title={" Age "}
                    name={"age"}
                    value={this.state.newUser.age}
                    placeholder={"Entrer l age "}
                    handleChange={this.handleInput}
                />{" "}
                {/* Input for Age */}
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
                    type={"number"}
                    title={"Téléphone"}
                    name={"phone"}
                    value={this.state.newUser.phone}
                    placeholder={"tel "}
                    handleChange={this.handleInput}
                />{" "}
                {/* phone */}
                <Input
                    type={"number"}
                    title={"Moyenne de Bac"}
                    name={"bacDegree"}
                    value={this.state.newUser.bacDegree}
                    placeholder={"Entrer la moyenne de bac "}
                    handleChange={this.handleInput}
                />{" "}
                {/* bacDegree */}
                <Select
                    title={"Gender"}
                    name={"gender"}
                    options={this.state.genderOptions}
                    value={this.state.newUser.gender}
                    placeholder={"Select Gender"}
                    handleChange={this.handleInput}
                />{" "}
                {/* Gender Selection */}
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
