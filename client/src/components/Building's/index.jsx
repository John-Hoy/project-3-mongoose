import React, { Component } from 'react';


export default class Gallery extends Component {
     render() {
         return (
             <div className="gallery_root">
 
                 <div className="gallery_container">
 
                     <div className="item" style={{backgroundImage: `url(${outsideShot})`}}></div>
                     <div className="item" style={{backgroundImage: `url(${bathroom})`}}></div>
                     <div className="item" style={{backgroundImage: `url(${kitchen})`}}></div>
                     <div className="item" style={{backgroundImage: `url(${bedroom})`}}></div>
                     <div className="item" style={{backgroundImage: `url(${fridge})`}}></div>
                     <div className="item" style={{backgroundImage: `url(${pool})`}}></div>
                 </div>
 
             </div>
         )
     }
 }