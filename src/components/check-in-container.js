import React, { Component } from "react";
import axios from "axios";

export default class CheckInContainer extends Component {
  constructor() {
    super();

    this.state = {
      data: []
    };

    // this.updateCheckOutTime = this.updateCheckOutTime.bind(this);
  }

  //   getDriverCheckIn() {
  //     setInterval(() => {
  //       axios
  //         .get("http://localhost:4000/check-in")
  //         .then(response => {
  //           console.log(response);
  //           this.setState({
  //             data: response.data
  //           });
  //         })
  //         .catch(error => {
  //           console.log(error);
  //         }, 2000);
  //     });
  //   }
  getDriverCheckIn() {
    axios
      .get("http://localhost:4000/check-in")
      .then(response => {
        console.log(response);
        this.setState({
          data: response.data
        });
      })
      .catch(error => {
        console.log(error);
      });
  }

  componentDidMount() {
    this.getDriverCheckIn();
  }

  componentWillUnmount() {
    this.getDriverCheckIn();
  }

  checkInItems() {
    return this.state.data.map(items => {
      return (
        <div className="driver-items" key={items._id}>
          {this.state.data}
        </div>
      );
    });
  }
  render() {
    return <div>{this.getDriverCheckIn()}</div>;
  }
}
