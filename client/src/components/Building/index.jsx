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

function Building() {
    return (
        <div className="galleryHolder">

            <div className="Container">

                <div className="item" style={{ backgroundImage: `url(${outsideShot})` }}></div>
                <div className="item" style={{ bathroomImg }}></div>
                <div className="item" style={{ backgroundImage: `url(${kitchen})` }}></div>
                <div className="item" style={bedroomImg}></div>
                <div className="item" style={{ backgroundImage: `url(${fridge})` }}></div>
                <div className="item" style={{ backgroundImage: `url(${pool})` }}></div>
                <div className="item" style={{ backgroundImage: `url(${balcony})` }}></div>
                <div className="item" style={{ backgroundImage: `url(${interior})` }}></div>

            </div>

        </div>
    )
}

export default Building;