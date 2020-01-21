import React, { Component } from "react";
import axios from "axios";

export default class CheckInContainer extends Component {
  constructor() {
    super();

    this.state = {
      data: []
    };

    this.updateApi = this.updateApi.bind(this);
    this.getDriverCheckIn = this.getDriverCheckIn.bind(this);
    // this.updateCheckOutTime = this.updateCheckOutTime.bind(this);
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
    setInterval(this.getDriverCheckIn, 2000);
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
        </div>
      );
    });
  }
  render() {
    return <div>{this.checkInItems()}</div>;
  }
}
