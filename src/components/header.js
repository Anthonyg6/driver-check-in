import React, { Component } from "react";

import Logo from "../../static/images/ESM.png";

export default class Header extends Component {
  render() {
    return (
      <div className="header">
        <img className="logo-img" src={Logo} />
        <a href="https://www.esmfulfillment.com">ESM Website</a>
      </div>
    );
  }
}
