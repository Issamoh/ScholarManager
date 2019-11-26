import React, { Component } from "react";

export default class Footer extends Component {
  render() {
    return (
      <div className="footer main  column is-8">
        <p className="text-center">
          powered by{" "}
          <a href="https://github.com/Issamoh/ScholarManager.git">
            @ScholarManager app!
          </a>
        </p>
      </div>
    );
  }
}
