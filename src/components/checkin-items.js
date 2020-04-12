import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function (props) {
  const {
    _id,
    driverName,
    carrier,
    deliveryType,
    truckType,
    checkInTime,
    isCheckedIn,
  } = props.items;

  if (isCheckedIn === true) {
    return (
      <div className="w3-container w3-left-align w3-center w3-row container-items">
        <div className="items">{driverName} </div>
        <div className="items">{carrier}</div>
        <div className="items deliveryType">{deliveryType}</div>
        <div className="items truckType">{truckType}</div>
        <div className="items">{checkInTime}</div>
        <button
          className="driver-checkout"
          onClick={() => props.updateCheckOutTime(_id)}
        >
          <FontAwesomeIcon icon="truck" />
        </button>
      </div>
    );
  } else {
    return null;
  }
}
