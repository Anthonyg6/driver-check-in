import React, { Component } from "react";

export default class NavBar extends Component {
  render() {
    return (
      <div className="w3-container nav-bar">
        <a className="link" href="https://www.esmfulfillment.com">
          ESM Fulfillment & Distribution
        </a>
        <h6 className="contact">801-819-7977</h6>
      </div>
    );
  }
}
