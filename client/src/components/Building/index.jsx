import React, { Component } from 'react';
import bathroom from './images/bathroom.jpg'
import interior from './images/apartment-inside.jpg'
import kitchen from './images/kitchen.jpg'
import fridge from './images/fridge.jpg'
import balcony from './images/balcony.jpg'
import bedroom from './images/bedroom.jpg'
import outsideShot from './images/outside.jpg'
import pool from './images/pool.jpg'


export default class Gallery extends Component {
    render() {
        return (
            <div className="galleryHolder">

                <div className="Container">

                    <div className="item" style={{ backgroundImage: `url(${outsideShot})` }}></div>
                    <div className="item" style={{ backgroundImage: `url(${bathroom})` }}></div>
                    <div className="item" style={{ backgroundImage: `url(${kitchen})` }}></div>
                    <div className="item" style={{ backgroundImage: `url(${bedroom})` }}></div>
                    <div className="item" style={{ backgroundImage: `url(${fridge})` }}></div>
                    <div className="item" style={{ backgroundImage: `url(${pool})` }}></div>
                    <div className="item" style={{ backgroundImage: `url(${balcony})` }}></div>
                    <div className="item" style={{ backgroundImage: `url(${interior})` }}></div>

                </div>

            </div>
        )
    }
}