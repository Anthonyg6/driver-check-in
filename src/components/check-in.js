import React, { Component } from "react";

export default class CheckIn extends Component {
  constructor() {
    super();

    // this.state = {
    //     _id: "",

    // }
  }

  handleClick() {
    console.log("I was clicked!");
    event.preventDefault();
  }
  render() {
    return (
      <div className="check-in-form-wrapper">
        <form className="check-in">
          <input
            className="driver"
            type="text"
            placeholder="Driver Name"
            value="Driver Name"
          />
          <input
            className="carrier"
            type="text"
            placeholder="Carrier"
            value="Carrier"
          />
          <input
            className="truck-type"
            type="text"
            placeholder="LTL / TL / Will Call"
            value="Truck Type"
          />
          <input
            className="delivery-type"
            type="text"
            placeholder="Pick up, Delivery or Will Call"
          />
          <button onClick={this.handleClick}>Submit</button>
        </form>
      </div>
    );
  }
}
