import React, { Component } from "react";
import FormContainer from "./FormContainer";

class AjoutEtudiant extends Component {
    render() {
        return (
            <div>
                <div className="container">
                    <div className="columns">
                        <div className="col-md-9 centered">
                            <h3>Ajouter un étudiant</h3>
                            <FormContainer />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default AjoutEtudiant;
