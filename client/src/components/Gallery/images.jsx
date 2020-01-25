import React from "react";
import bathroom from './images/bathroom.jpg'
import interior from './images/apartment-inside.jpg'
import kitchen from './images/kitchen.jpg'
import fridge from './images/fridge.jpg'
import balcony from './images/balcony.jpg'
import bedroom from './images/bedroom.jpg'
import outsideShot from './images/outside.jpg'
import pool from './images/pool.jpg'

const bedroomImg = {
    width: "300px",
    height: "300px",
    backgroundImage: `url(${bedroom})`,
};
const bathroomImg = {
    width: "300px",
    height: "300px",
    backgroundImage: `url(${bathroom})`,
};
const poolImg = {
    width: "300px",
    height: "300px",
    backgroundImage: `url(${pool})`,
};
const interiorImg = {
    width: "300px",
    height: "300px",
    backgroundImage: `url(${interior})`,
};
const outsideImg = {
    width: "300px",
    height: "300px",
    backgroundImage: `url(${outsideShot})`,
};
const fridgeImg = {
    width: "300px",
    height: "300px",
    backgroundImage: `url(${fridge})`,
};
const balconyImg = {
    width: "300px",
    height: "300px",
    backgroundImage: `url(${balcony})`,
};
const kitchenImg = {
    width: "300px",
    height: "300px",
    backgroundImage: `url(${kitchen})`,
};

function Pictures() {
    return (
        <div className="shopping-list">
            <div>{kitchenImg}</div>
            <div>{balconyImg}</div>
            <div>{fridgeImg}</div>
            <div>{outsideImg}</div>
            <div>{interiorImg}</div>
            <div>{poolImg}</div>
            <div>{bathroomImg}</div>
            <div>{bedroomImg}</div>
        </div>
    );
}

export default Pictures;