import React, { Component } from "react";
import ReactDOM from "react-dom";
import FormContainer from "./FormContainer";
//import Header from "./Header";
import Footer from "./Footer";
import Nav from "./Nav";
//import Header from "./Header";

/* An example React component */
class Main extends Component {
    render() {
        return (
            <div>
                <Nav />
                <div className="container">
                    <div className="columns">
                        <div className="col-md-9 centered">
                            <h3>Ajouter un étudiant</h3>
                            <FormContainer />
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        );
    }
}

export default Main;

/* The if statement is required so as to Render the component on pages that have a div with an ID of "root";
 */

if (document.getElementById("root")) {
    ReactDOM.render(<Main />, document.getElementById("root"));
}
