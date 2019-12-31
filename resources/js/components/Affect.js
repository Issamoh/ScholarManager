import React, { Component } from "react";
import FormAffect from "./FormAffect";
function Affect() {
    return (
        <div>
            <div style={{ padding: 68 }}>
                <div className="container">
                    <div className="row d-flex justify-content-center">
                        <div className="col-md-6 ">
                            <h3
                                className="mt-2 mb-1 text-center"
                                style={{ color: "#0099cc" }}
                            >
                                Affectation aléatoire des étudiants aux groupes
                            </h3>
                            <FormAffect />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Affect;
