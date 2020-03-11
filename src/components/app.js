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

    this.state = {
      isCheckedIn: "CHECKED_OUT"
    };

    this.handleSuccessfulCheckIn = this.handleSuccessfulCheckIn.bind(this);
    this.handleSucessfulCheckOut = this.handleSucessfulCheckOut.bind(this);
  }

  handleSuccessfulCheckIn() {
    this.setState({
      isCheckedIn: "CHECKED_IN"
    });
  }

  handleSucessfulCheckOut() {
    this.setState({
      isCheckedIn: "CHECKED_OUT"
    });
  }
  render() {
    return (
      <div className="app">
        <Header />
        <CheckInForm />
        <Footer />
      </div>
    );
  }
}
