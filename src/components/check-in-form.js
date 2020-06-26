import React, { Component } from "react";
import moment from "moment";
import axios from "axios";

export default class CheckIn extends Component {
  constructor() {
    super();

    this.state = {
      _id: "",
      date: moment().format("MMM DD YYYY"),
      driverName: "",
      carrier: "",
      deliveryType: "Delivery",
      truckType: "LTL",
      checkInTime: moment().format("LT"),
      checkOutTime: "",
      isCheckedIn: false,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    event.preventDefault();
    axios({
      method: "POST",
      url: "https://driver-check-in-server.herokuapp.com/check-in",
      headers: { "content-type": "application/json" },
      data: {
        _id: this.state._id,
        date: this.state.date,
        driverName: this.state.driverName,
        carrier: this.state.carrier,
        deliveryType: this.state.deliveryType,
        truckType: this.state.truckType,
        checkInTime: this.state.checkInTime,
        checkOutTime: this.state.checkOutTime,
        isCheckedIn: true,
        done: false,
      },
    })
      .then((data) => {
        this.setState({
          _id: [...this.state._id, data.data],
          date: [...this.state.date, data.data],
          driverName: [...this.state.driverName, data.data],
          carrier: [...this.state.carrier, data.data],
          deliveryType: [...this.state.deliveryType, data.data],
          truckType: [...this.state.truckType, data.data],
          checkInTime: [...this.state.checkInTime, data.data],
          checkOutTime: [...this.state.checkOutTime, data.data],
          isCheckedIn: [...this.state.isCheckedIn, data.data],
          _id: "",
          date: "",
          driverName: "",
          carrier: "",
          deliveryType: "",
          truckType: "",
          checkInTime: "",
          checkOutTime: "",
          isCheckedIn: true,
        });
      })
      .catch((error) => {
        console.log(error);
      });
    console.log(this.state);
    this.setState({
      _id: "",
      date: moment().format("MMM DD YYYY"),
      driverName: "",
      carrier: "",
      deliveryType: "Delivery",
      truckType: "LTL",
      checkInTime: moment().format("LT"),
      checkOutTime: "",
      isCheckedIn: false,
    });
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  render() {
    return (
      <div className="check-in-wrapper">
        <form className="check-in-form">
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
          <select
            name="truckType"
            value={this.state.truckType}
            onChange={this.handleChange}
            className="truck-type"
          >
            <option value="LTL">LTL</option>
            <option value="TL">TL</option>
          </select>
          <select
            name="deliveryType"
            value={this.state.deliveryType}
            onChange={this.handleChange}
            className="delivery-type"
          >
            <option value="Delivery">Delivery</option>
            <option value="Pick-Up">Pick Up</option>
            <option value="Will-Call">Will Call</option>
          </select>
          <input
            type="button"
            className="form-btn"
            value="CheckIn"
            onClick={this.handleSubmit}
          />
        </form>
      </div>
    );
  }
}
