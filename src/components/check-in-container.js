import React, { Component } from "react";
import axios from "axios";
import moment from "moment";

import CheckIn from "./check-in-form";
// import CheckInItems from "./checkin-items";

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
      isCheckedIn: true
    };
    this.updateCheckOutTime = this.updateCheckOutTime.bind(this);
    this.getDriverCheckIn = this.getDriverCheckIn.bind(this);
  }

  getDriverCheckIn() {
    // for (let i = 0, l = this.state.checkInInfo.length; i < l; i++) {
    //   var obj = this.state.checkInInfo[i].isCheckedIn;
    //   console.log(obj);
    // }
    // if (this.state.isCheckedIn === true) {
    axios
      .get("http://localhost:4000/check-in")
      .then(response => {
        this.setState({
          checkInInfo: response.data
        });
      })
      .catch(error => {
        console.log(error);
      });
    // } else {
    //   return null;
    // }
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
    // setInterval(this.getDriverCheckIn, 2000);
    this.getDriverCheckIn();
  }

  componentDidMount() {
    this.updateState();
  }

  componentWillUnmount() {
    clearInterval(this.updateState);
  }

  updateApi() {
    // for (let i = 0, l = this.state.checkInInfo.length; i < l; i++) {
    //   var obj = this.state.checkInInfo[i].isCheckedIn;
    //   console.log(obj);
    // }

    // //HAVE TO CREATE ELSE STATEMENT THAT JUST REMOVES THAT ITEM FROM STATE
    // if (obj === true) {
    return this.state.checkInInfo.map(items => {
      return (
        <div className="driver-items" key={items._id}>
          <span>{items.driverName}</span>
          <span>{items.carrier}</span>
          <span>{items.deliveryType}</span>
          <span>{items.truckType}</span>
          <span>{items.checkInTime}</span>
          <button
            className="driver-checkout"
            onClick={() => this.updateCheckOutTime(items._id)}
          >
            Check Out
          </button>
        </div>
      );
    });
    // } else {
    //   return null;
    // }
  }

  render() {
    // console.log("state value", this.state.checkInInfo[0]);
    return <div>{this.updateApi()}</div>;
  }
}
