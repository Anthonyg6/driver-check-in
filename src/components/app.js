import React, { Component } from "react";
import Header from "./header";
import CheckIn from "./check-in";
import CheckInContainer from "./check-in-container";

export default class App extends Component {
  render() {
    return (
      <div className="app">
        <Header />
        <CheckIn />
        <CheckInContainer />
      </div>
    );
  }
}
