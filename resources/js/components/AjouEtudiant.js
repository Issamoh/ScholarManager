import React, { Component } from "react";
import FormContainer from "./FormContainer";

class AjoutEtudiant extends Component {
    render() {
        return (
            <div style={{ padding: 68 }}>
                <div className="container">
                    <div className="row d-flex justify-content-center">
                        <div className="col-md-9 centered">
                            <h3
                                className="mt-2 mb-1 text-center"
                                style={{ color: "#0099cc" }}
                            >
                                Ajouter un étudiant
                            </h3>
                            <FormContainer />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default AjoutEtudiant;
