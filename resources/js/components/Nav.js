import React, { Component } from "react";
import "./nav.scss";
import logo from "./ESI_Logo.png";
//
export default class Nav extends Component {
    render() {
        return (
            <div className="menu columns">
                <div className="column is-2 logo">
                    <img src={logo} />
                </div>
                <div className="columns column nav is-8">
                    <div className="nav-item">
                        <a href="">Home</a>
                    </div>
                    <div className="nav-item">
                        <a href="">Todo</a>
                    </div>
                    <div className="nav-item">
                        <a href="">Github</a>
                    </div>
                </div>
                <div className="column is-2"></div>
            </div>
        );
    }
}
