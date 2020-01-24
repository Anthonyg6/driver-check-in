import React, { Component } from "react";
import axios from "axios";
import moment from "moment";

export default class CheckInContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: []
    };

    this.updateApi = this.updateApi.bind(this);
    this.updateCheckOutTime = this.updateCheckOutTime.bind(this);
    this.getDriverCheckIn = this.getDriverCheckIn.bind(this);
  }

  getDriverCheckIn() {
    axios
      .get("http://localhost:4000/check-in")
      .then(response => {
        this.setState({
          data: response.data
        });
      })
      .catch(error => {
        console.log(error);
      });
  }

  updateApi() {
    // setInterval(this.getDriverCheckIn, 2000);
    this.getDriverCheckIn();
  }

  //attempt to fix this. Try passing function call from check-in
  updateCheckOutTime(_id) {
    event.preventDefault();
    axios
      .put(`http://localhost:4000/check-in/${_id}`, {
        checkOutTime: moment().format("LT")
      })
      .then(console.log("Updated Check Out Time"))
      .catch(error => {
        console.log(error);
      });
  }

  componentDidMount() {
    this.updateApi();
  }

  componentWillUnmount() {
    clearInterval(this.updateApi);
  }

  checkInItems() {
    return this.state.data.map(items => {
      return (
        <div className="driver-items" key={items._id}>
          <span>{items.date}</span>
          <span>{items.driverName}</span>
          <span>{items.carrier}</span>
          <span>{items.deliveryType}</span>
          <span>{items.truckType}</span>
          <span>{items.checkInTime}</span>
          <button
            className="driver checkout"
            onClick={() => this.updateCheckOutTime(items._id)}
          >
            CheckOut
          </button>
        </div>
      );
    });
  }
  render() {
    return <div>{this.checkInItems()}</div>;
  }
}
