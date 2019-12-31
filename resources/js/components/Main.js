import React, { Component } from "react";
import ReactDOM from "react-dom";
import Footer from "./Footer";
import Affect from "./Affect";
import Apropos from "./Apropos";
import "./Main.css";
import AjoutEtudiant from "./AjouEtudiant";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavigBar from "./NavigBar";
import logo from "./logo.svg";
import { Image } from "react-bootstrap";
/* An example React component */
class Main extends Component {
    render() {
        return (
            <Router>
                <div className="Main">
                    <NavigBar />
                    <Switch>
                        <Route path="/" exact component={Home} />
                        <Route
                            path="/AjoutEtudiant"
                            component={AjoutEtudiant}
                        />
                        <Route path="/Affect" component={Affect} />
                        <Route path="/Apropos" component={Apropos} />
                    </Switch>
                    <Footer />
                </div>
            </Router>
        );
    }
}

function Home() {
    return (
        <div className="container pt-5 mx-auto " style={{ paddingBottom: 68 }}>
            <div className="row">
                <div className="col-sm-6 fadeInLeft animated">
                    <div>
                        <h3>Qu'est ce que ScholarManager ?</h3>
                        <p className="subheading">
                            {" "}
                            une application web de scolarité{" "}
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
                            ScholarManager est une application de scolarité
                            ciblant les étudiants, les enseignants et
                            l’administration.
                        </p>
                        <p
                            style={{
                                fontSize: 21,
                                fontWeight: 400,
                                letterSpacing: 0
                            }}
                        >
                            {" "}
                            Elle leurs facilite les différentes opérations
                            scolaires telles que les inscriptions, les
                            permutations entre-groupes, les affectations , les
                            évaluations ... etc
                        </p>
                    </div>
                </div>
                <div className="col-sm-6 animated">
                    <Image src={logo} fluid />
                </div>
            </div>
        </div>
    );
}
export default Main;

/* The if statement is required so as to Render the component on pages that have a div with an ID of "root";
 */

if (document.getElementById("root")) {
    ReactDOM.render(<Main />, document.getElementById("root"));
}
