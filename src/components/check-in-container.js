import React, { Component } from "react";
import axios from "axios";
import moment from "moment";

import CheckIn from "./check-in-form";
import CheckInItems from "./checkin-items";

export default class CheckInContainer extends Component {
  constructor(props) {
    super(props);

    // this.state = {
    //   checkInInfo: []
    //   // isCheckedIn: true,
    //   // updatedState: []
    // };
    this.state = {
      checkInInfo: [],
      isCheckedIn: true,
      isLoading: true
    };
    this.updateCheckOutTime = this.updateCheckOutTime.bind(this);
    this.getDriverCheckIn = this.getDriverCheckIn.bind(this);
    this.driverCheckinItems = this.driverCheckinItems.bind(this);
  }

  getDriverCheckIn() {
    axios
      .get("http://localhost:4000/check-in")
      .then(response => {
        console.log("response", response.data);
        this.setState({
          checkInInfo: response.data,
          isLoading: false
        });
      })
      .catch(error => {
        console.log(error);
      });
  }

  driverCheckinItems() {
    return this.state.checkInInfo.map(items => {
      return (
        <CheckInItems
          key={items._id}
          _id={items._id}
          items={items}
          // driverName={items.driverName}
          // carrier={items.carrier}
          // deliveryType={items.deliveryType}
          // truckType={items.truckType}
          // checkInTime={items.checkInTime}
          updateCheckOutTime={this.updateCheckOutTime}
          removeEntry={this.removeEntry}
        />
      );
    });
  }

  updateCheckOutTime(_id) {
    event.preventDefault();
    axios
      .put(`http://localhost:4000/check-in/${_id}`, {
        checkOutTime: moment().format("LT"),
        isCheckedIn: false
      })
      .then(response => {
        this.setState({
          checkInInfo: this.state.checkInInfo.filter(checkInItem => {
            return _id !== checkInItem._id;
          }),
          isCheckedIn: false
        });
        return response.data;
      })
      .catch(error => {
        console.log(error);
      });
  }

  removeEntry(_id) {
    event.preventDefault();
    axios
      .delete(`http://localhost:4000/check-in/${_id}`)
      .then(console.log("Driver removed!"))
      .catch(error => {
        console.log(error);
      });
  }

  updateState() {
    setInterval(this.getDriverCheckIn, 2000);
    // this.getDriverCheckIn();
  }

  componentDidMount() {
    this.updateState();
  }

  componentWillUnmount() {
    clearInterval(this.updateState);
  }

  render() {
    // console.log("state value", this.state.checkInInfo[0]);
    if (this.state.isLoading) {
      return <div>Loading....</div>;
    }
    return <div>{this.driverCheckinItems()}</div>;
  }
}
