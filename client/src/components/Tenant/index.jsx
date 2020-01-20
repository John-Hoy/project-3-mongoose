import React from "react";


function TenantCard(props) {
  return (
    <div className="card">
      <div className="img-container">
        <img alt={props.name} src={props.image} />
      </div>
      <div className="content">
        <ul>
          <li>
            <strong>Name:</strong> {props.name}
          </li>
          <li>
            <strong>Rent:</strong> {props.rent}
          </li>
          <li>
            <strong>Unit Number:</strong> {props.unit_no}
          </li>
          <li>
            <strong>Current Rent rate:</strong> {props.rent_current}
          </li>
          <li>
            <strong>Current Rent Status:</strong> {props.rent_status}
          </li>
          <li>
            <strong>Apartment Issues:</strong> {props.issues}
          </li>
          <li>
            <strong>Manager Comments:</strong> {props.mgr_comment}
          </li>
        </ul>
      </div>
    </div>
  );
}

export default TenantCard;