import React, { Component } from "react";

import Logo from "../../static/images/ESM.png";

export default class Header extends Component {
  render() {
    return (
      <div>
        <img src={Logo} />
      </div>
    );
  }
}
