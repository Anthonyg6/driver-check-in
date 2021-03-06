import React, { Component } from "react";

import Logo from "../../static/images/ESMLogo.png";
import NavBar from "./navbar";

export default class Header extends Component {
  render() {
    return (
      <div className="header">
        <img className="logo-img" src={Logo} />
        <NavBar />
      </div>
    );
  }
}
