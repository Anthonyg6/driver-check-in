import React, { Component } from "react";
import Header from "./header";

export default class App extends Component {
  render() {
    return (
      <div className="app">
        <h1>Hello world!</h1>
        <Header />
      </div>
    );
  }
}
