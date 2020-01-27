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
                                    <p>Welcome to the homepage of our app. From here, you can <a href="/ManageTenants"> manage tenants</a>, <a href="/Properties">add properties</a>, <a href="/Contact">contact us</a>, or find <a href="/Resources"> valuable resources.</a> If you are a tenant, you can let your landord know of any <a href="/Issues">issues</a> you may have, download a <a href="/lease"> rental agreement form</a> or find relevant information regarding rental laws in your state.</p>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>


    );
};
export default HomeComponent;
