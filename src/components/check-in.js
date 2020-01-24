import React, { Component } from "react";
import moment from "moment";
import axios from "axios";
import CheckInContainer from "./check-in-container";

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
      checkOutTime: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    // this.checkOut = this.checkOut.bind(this);
  }

  handleSubmit() {
    event.preventDefault();
    axios({
      method: "POST",
      url: "http://localhost:4000/check-in",
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
        done: false
      }
    })
      .then(data => {
        this.setState({
          _ids: [...this.state._ids, data.data],
          dates: [...this.state.dates, data.data],
          driverNames: [...this.state.driverName, data.data],
          carriers: [...this.state.carriers, data.data],
          deliveryTypes: [...this.state.deliveryTypes, data.data],
          truckTypes: [...this.state.truckTypes, data.data],
          checkInTimes: [...this.state.checkInTimes, data.data],
          checkOutTimes: [...this.state.checkOutTime, data.data],
          _id: "",
          date: "",
          driverName: "",
          carrier: "",
          deliveryType: "",
          truckType: "",
          checkInTime: "",
          checkOutTime: ""
        });
      })
      .catch(error => {
        console.log(error);
      });
    this.setState({
      _id: "",
      date: moment().format("MMM DD YYYY"),
      driverName: "",
      carrier: "",
      deliveryType: "Delivery",
      truckType: "LTL",
      checkInTime: moment().format("LT"),
      checkOutTime: ""
    });
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  render() {
    return (
      <div className="check-in-form-wrapper">
        <form className="check-in" onSubmit={this.handleSubmit}>
          <div className="date">{this.state.date}</div>
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
            <option value="ltl">LTL</option>
            <option value="tl">TL</option>
          </select>

          <select
            name="deliveryType"
            value={this.state.deliveryType}
            onChange={this.handleChange}
            className="delivery-type"
          >
            <option value="delivery">Delivery</option>
            <option value="pick-up">Pick Up</option>
            <option value="will-call">Will Call</option>
          </select>
          <button className="form-btn">Submit</button>
        </form>
        <CheckInContainer />
      </div>
    );
  }
}
