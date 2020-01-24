import React from "react";


function PropertyCard(props) {
  return (
    <div className="card">
      <div className="img-container">
        <img alt={props.name} src={props.image} />
      </div>
      <div className="content">
        <ul>
          <li>
            <strong>Address:</strong> {props.data.address}
          </li>
          <li>
            <strong>City:</strong> {props.data.city}
          </li>
          <li>
            <strong>State:</strong> {props.data.state}
          </li>
          <li>
            <strong>Zip:</strong> {props.data.zip}
          </li>
          <li>
            <strong>Tenant:</strong> {props.data.tenant}
          </li>
          <li>
            <strong>Images:</strong> {props.data.images}
          </li>
          
        </ul>
      </div>
    </div>
  );
}

export default PropertyCard;