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

  updateCheckOutTime(_id, index) {
    event.preventDefault();
    axios
      .put(`http://localhost:4000/check-in/${_id}`, {
        checkOutTime: moment().format("LT")
      })
      .then(console.log("Checkout time was updated"))
      .catch(error => {
        console.log(error);
      });
    // creates a copy of the state array so we can just remove an item from the array once the driver has checked out without deleting the actual data from the database
    const data = Object.assign([], this.state.data);
    data.splice(index, 1);
    this.setState({ data: data });
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
