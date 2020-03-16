import React from "react";

export default function(props) {
  const {
    _id,
    driverName,
    carrier,
    deliveryType,
    truckType,
    checkInTime,
    isCheckedIn
  } = props.items;

  if (isCheckedIn === true) {
    return (
      <div>
        <span>{driverName}</span>
        <span>{carrier}</span>
        <span>{deliveryType}</span>
        <span>{truckType}</span>
        <span>{checkInTime}</span>
        <button
          className="driver-checkout"
          onClick={() => props.updateCheckOutTime(_id)}
        >
          Check Out
        </button>
      </div>
    );
  } else {
    return null;
  }
}
