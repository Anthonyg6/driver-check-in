import React, { Component } from "react";
import Header from "./header";
import CheckInForm from "./check-in-form";
import Footer from "./footer";
import CheckInContainer from "./check-in-container";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faTruck, faSpinner } from "@fortawesome/free-solid-svg-icons";

library.add(faTruck, faSpinner);

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
