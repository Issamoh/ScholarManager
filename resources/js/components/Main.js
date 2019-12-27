import React, { Component } from "react";
import ReactDOM from "react-dom";
import Footer from "./Footer";
import Nav from "./Nav";
import Affect from "./Affect";
import Apropos from "./Apropos";
import "./Main.css";
import AjoutEtudiant from "./AjouEtudiant";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavigBar from "./NavigBar";

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
const Home = () => (
    <div>
        <h1>Home page</h1>
    </div>
);
export default Main;

/* The if statement is required so as to Render the component on pages that have a div with an ID of "root";
 */

if (document.getElementById("root")) {
    ReactDOM.render(<Main />, document.getElementById("root"));
}
