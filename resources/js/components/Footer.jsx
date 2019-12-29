import React, { Component } from "react";
import { footer } from "react-bootstrap";
import giticon from "./github.svg";
export default class Footer extends Component {
    render() {
        return (
            <footer className="footer mt-auto py-1 bg-light text-dark fixed-bottom">
                <div className="container mx-auto" style={{ width: 350 }}>
                    © copyrights to{" "}
                    <a href="https://github.com/Issamoh/ScholarManager.git">
                        @ScholarManager app !<span> </span>
                        <img
                            alt=""
                            src={giticon}
                            width="20"
                            height="20"
                            className="d-inline-block align-top"
                        />
                    </a>
                </div>
            </footer>
        );
    }
}
