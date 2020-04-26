import React, { Component } from "react";
import axios from "axios";
import moment from "moment";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import CheckInItems from "./checkin-items";

export default class CheckInContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      checkInInfo: [],
      isLoading: true,
    };
    this.updateCheckOutTime = this.updateCheckOutTime.bind(this);
    this.getDriverCheckIn = this.getDriverCheckIn.bind(this);
    this.driverCheckinItems = this.driverCheckinItems.bind(this);
  }

  getDriverCheckIn() {
    axios
      .get("driver-check-in-server.herokuapp.com/check-in")
      .then((response) => {
        this.setState({
          checkInInfo: response.data,
          isLoading: false,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  driverCheckinItems() {
    return this.state.checkInInfo.map((items) => {
      return (
        <CheckInItems
          key={items._id}
          _id={items._id}
          items={items}
          updateCheckOutTime={this.updateCheckOutTime}
          removeEntry={this.removeEntry}
        />
      );
    });
  }

  updateCheckOutTime(_id) {
    event.preventDefault();
    axios
      .put(`driver-check-in-server/check-in/${_id}`, {
        checkOutTime: moment().format("LT"),
        isCheckedIn: false,
      })
      .then((response) => {
        this.setState({
          checkInInfo: this.state.checkInInfo.filter((checkInItem) => {
            return _id !== checkInItem._id;
          }),
          isCheckedIn: false,
        });
        return response.data;
      })
      .catch((error) => {
        console.log(error);
      });
  }

  removeEntry(_id) {
    event.preventDefault();
    axios
      .delete(`driver-check-in-server.herokuapp.com/check-in/${_id}`)
      .then(console.log("Driver removed!"))
      .catch((error) => {
        console.log(error);
      });
  }

  updateState() {
    setInterval(this.getDriverCheckIn, 2000);
  }

  componentDidMount() {
    this.updateState();
  }

  componentWillUnmount() {
    clearInterval(this.updateState);
  }

  render() {
    if (this.state.isLoading) {
      return (
        <div className="data-loading">
          <FontAwesomeIcon icon="spinner" className="fa-pulse" />
        </div>
      );
    }
    return <div className="container">{this.driverCheckinItems()}</div>;
  }
}
