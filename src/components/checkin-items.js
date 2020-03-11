import React, { Component } from "react";
import axios from "axios";
import moment from "moment";

export default class CheckInItems extends Component {
  constructor(props) {
    super(props);
  }

  updateCheckOutTime(_id) {
    event.preventDefault();
    axios
      .put(`http://localhost:4000/check-in/${_id}`, {
        checkOutTime: moment().format("LT"),
        isCheckedIn: false
      })
      .then(console.log("Deleted"))
      .catch(error => {
        console.log(error);
      });
  }

  // conditional that returns whatever is in the else statement
  // updateApi() {
  //   if (this.props.checkIns.checkIns.isCheckedIn === true) {
  //     console.log("Props", this.props);
  //     return this.props.checkIns.map(items => {
  //       return (
  //         <div className="driver-items" key={items._id}>
  //           <span>{items.driverName}</span>
  //           <span>{items.carrier}</span>
  //           <span>{items.deliveryType}</span>
  //           <span>{items.truckType}</span>
  //           <span>{items.checkInTime}</span>
  //           <button
  //             className="driver-checkout"
  //             onClick={() => this.updateCheckOutTime(items._id)}
  //           >
  //             Check Out
  //           </button>
  //         </div>
  //       );
  //     });
  //   } else {
  //     return <p>Something random</p>;
  //   }
  // }

  // non conditional -- returns the data from api
  updateApi() {
    return this.props.checkIns.map(items => {
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
  }
  render() {
    console.log(this.props);

    return <div>{this.updateApi()}</div>;
  }
}
