import React, { Component } from "react";

import Logo from "../../static/images/ESMLogo.png";

export default class Header extends Component {
  render() {
    return (
      <div className="header">
        <img className="logo-img" src={Logo} />
        <div>
          <a className="header-link" href="https://www.esmfulfillment.com">
            ESM Fulfillment
          </a>
        </div>
        <div>
          <h6 className="contact">801-819-7977</h6>
        </div>
      </div>
    );
  }
}
