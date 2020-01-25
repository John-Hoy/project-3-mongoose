import React from 'react';
import './home.css';


const HomeComponent = () => {
    return (
        <div className="">
            <section className="hero is-light is-bold">
                <div className="hero-body">
                    <div className="container">
                        <h1 className="title">
                            Welcome to Slumlords R Us!
                        </h1>
                        <h2 className="subtitle">
                            We have the absolute finest listings in the area.
                        </h2>
                        <div className="">
                    <div className="columns">
                        <div className="column is-one-quarter">
                           <img src="images/shack.png" alt="shack" />
                        </div>
                        <div className="column is-three-quarter">
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                        </div>
                    </div>
                </div>
                    </div>
                </div>
            </section>
            <br />
            <section>
                <div className="">
                    <div className="columns">
                        <div className="column">
                            <h2>Newest Listings...</h2>
                            
                        </div>
                        <div className="column">
                           <p>More content to go here</p>
                        </div>
                    </div>
                </div>

            </section>


        </div>
    );
};

export default HomeComponent;
