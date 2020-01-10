import React, { Component } from 'react';
import bathroom from './images/bathroom.jpg'
import interior from './images/apartment-inside.jpg'
import kitchen from './images/kitchen.jpg'
import fridge from './images/fridge.jpg'
import balcony from './images/balcony.jpg'
import bedroom from './images/bedroom.jpg'
import outsideShot from './images/outside.jpg'
import pool from './images/pool.jpg'
import './building.css'

const bedroomImg = {
    width: "100%",
    height: "400px",
    backgroundImage: `url(${bedroom})`,
};
const bathroomImg = {
    width: "100%",
    height: "400px",
    backgroundImage: `url(${bathroom})`,
};
const poolImg = {
    width: "100%",
    height: "400px",
    backgroundImage: `url(${pool})`,
};
const interiorImg = {
    width: "100%",
    height: "400px",
    backgroundImage: `url(${interior})`,
};
const outsideImg = {
    width: "100%",
    height: "400px",
    backgroundImage: `url(${outsideShot})`,
};
const fridgeImg = {
    width: "100%",
    height: "400px",
    backgroundImage: `url(${fridge})`,
};
const balconyImg = {
    width: "100%",
    height: "400px",
    backgroundImage: `url(${balcony})`,
};
const kitchenImg = {
    width: "100%",
    height: "400px",
    backgroundImage: `url(${kitchen})`,
};

function Building() {
    return (
        <div className="galleryHolder">

            <div className="Container">

                <div className="item" style={ outsideImg }></div>
                <div className="item" style={ bathroomImg }></div>
                <div className="item" style={ kitchenImg }></div>
                <div className="item" style={ bedroomImg }></div>
                <div className="item" style={ fridgeImg }></div>
                <div className="item" style={ poolImg }></div>
                <div className="item" style={ balconyImg }></div>
                <div className="item" style={ interiorImg }></div>

            </div>

        </div>
    )
}

export default Building;