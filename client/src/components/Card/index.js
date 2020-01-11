import React from "react";

// By extending the React.Component class, Counter inherits functionality from it
class Card extends React.Component {
    render() {
        return (

            <div className="column">
                <div className="card">
                    <div className="card-image">
                        <figure className="image is-4by3">
                            <img src="images/image_5.jpg" alt="" />
                        </figure>
                    </div>
                    <div className="card-content">
                        <div className="media">

                            <div className="media-content">
                                <p className="title is-4">Image 3</p>

                            </div>
                        </div>


                    </div>
                </div>
            </div>
        );
    };
};
export default Card;