import React, { Component } from "react";
import axios from "axios";
import moment from "moment";
import Header from "./header";
import CheckInForm from "./check-in-form";
import Footer from "./footer";
import CheckInContainer from "./check-in-container";

export default class App extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div className="app">
        <Header />
        <CheckInForm />
        <CheckInContainer />
        <Footer />
      </div>
    );
  }
}
