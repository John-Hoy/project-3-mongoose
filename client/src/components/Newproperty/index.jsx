import React from 'react';
import './style.css'

export default class Newproperty extends Component {
    render() {
        return (
            <div className="newproperty_root">
                <div className="newproperty_container">
                    <div>
                        {/* New Unit Number */}
                        <h3>Unit Number</h3>
                        <input id="unitNumber" placeholder="Unit No." type="text" />

                        {/* Starting Rent*/}
                        <h3>Starting Rent</h3>
                        <input id="startRent" placeholder="Starting REnt" type="text" />

                        {/* Number of Bedrooms */}
                        <h3>Bedrooms</h3>
                        <select id="numBedrooms">
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                        </select>

                        {/* Number of Baths */}
                        <h3>Number of Baths</h3>
                        <select id="numBaths">
                            <option value="1">1</option>
                            <option value="1.5">1.5</option>
                            <option value="2">2</option>
                            <option value="2.5">2.5</option>
                        </select>

                        {/* Square Footage */}
                        <h3>Square Footage</h3>
                        <input id="sqft" placeholder="Square Footage" type="text" />

                        {/* Occupied */}
                        <input type="radio" name="occupied" value="true" checked /> No<br />
                        <input type="radio" name="occupied" value="false" /> Yes<br />

                        {/* Date Available */}
                        <h3>Date Available</h3>
                        <input type="date" id="myDate" placeholder="2014-02-09" value=""/>

                        {/* Submit */}

                        <input type="submit" value="Submit"/>



                    </div>
                    </div>
                </div>
                );
            }
}