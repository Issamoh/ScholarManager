import React, { Component } from "react";
import team from "./team.jpg";
import { Image } from "react-bootstrap";
function Apropos() {
    return (
        <div className="container pt-5 mx-auto " style={{ paddingBottom: 68 }}>
            <div className="row">
                <div className="col-sm-6 fadeInLeft animated">
                    <div>
                        <h3>Qui sommes nous ?</h3>
                        <p className="subheading">
                            {" "}
                            Trois étudiants de l'école nationale supérieure
                            d'informatique.{" "}
                        </p>
                        <hr />
                    </div>
                    <div>
                        <p
                            style={{
                                fontSize: 21,
                                fontWeight: 400,
                                letterSpacing: 0
                            }}
                        >
                            {" "}
                            <a href="https://github.com/Issamoh">
                                Ben messaoud Mohamed Issam Daoud
                            </a>
                        </p>
                        <p
                            style={{
                                fontSize: 21,
                                fontWeight: 400,
                                letterSpacing: 0
                            }}
                        >
                            {" "}
                            <a href="https://github.com/rezakaziz">
                                Aziz Rezak{" "}
                            </a>
                        </p>
                        <p
                            style={{
                                fontSize: 21,
                                fontWeight: 400,
                                letterSpacing: 0
                            }}
                        >
                            {" "}
                            <a href="https://github.com/Saidaniriadh">
                                Saidani Riadh{" "}
                            </a>
                        </p>
                    </div>
                </div>
                <div className="col-sm-6 animated roundedCircle">
                    <Image src={team} fluid />
                </div>
            </div>
        </div>
    );
}

export default Apropos;
