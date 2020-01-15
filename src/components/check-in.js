import React, { Component } from "react";
import moment from "moment";

export default class CheckIn extends Component {
  constructor() {
    super();

    this.state = {
      _id: "",
      date: moment().format("MMM Do YYYY"),
      driverName: "",
      carrier: "",
      deliveryType: "",
      truckType: "",
      checkInTime: "",
      checkOutTime: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    console.log("I was clicked!");
    event.preventDefault();
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }
  render() {
    return (
      <div className="check-in-form-wrapper">
        <div className="date">{this.state.date}</div>
        <form className="check-in">
          <input
            className="driver"
            type="text"
            name="driverName"
            placeholder="Driver Name"
            value={this.state.driverName}
            onChange={this.handleChange}
          />
          <input
            className="carrier"
            type="text"
            name="carrier"
            placeholder="Carrier"
            value={this.state.carrier}
            onChange={this.handleChange}
          />
          <input
            className="Truck Type"
            type="text"
            name="truckType"
            placeholder="LTL / TL"
            value={this.state.truckType}
            onChange={this.handleChange}
          />
          <input
            className="delivery-type"
            type="text"
            name="deliveryType"
            placeholder="Pick up, Delivery or Will Call"
            value={this.state.deliveryType}
            onChange={this.handleChange}
          />
          <button onClick={this.handleClick}>Submit</button>
        </form>
      </div>
    );
  }
}
