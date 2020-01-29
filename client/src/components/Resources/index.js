import React from 'react';
import './resources.css';


const ResourceComponent = () => {
    return (
        <div className="">
            <section className="hero is-light is-bold">
                <div className="hero-body">
                    <div className="container">
                        <h1 className="title">
                            Resources
                        </h1>
                        <h2 className="subtitle">
                            Here are some relevant links for both Tenants and Landlords
                        </h2>
                        <div className="">
                    <div className="columns">
                        <div className="column is-one-half">
                        <h3 className="subtitle">Tenants</h3>

                        <ul>
                            <li>
                                <a href="https://realestate.findlaw.com/landlord-tenant-law/tenant-rights.html" target="_blank" rel="noopener noreferrer">Tenant Rights</a>
                            </li>
                        </ul>
                        <br />
                        <h3 className="subtitle">Sample Letters</h3>
                        <ul>
                            <li>
                                <a href="http://d3n8a8pro7vhmx.cloudfront.net/tenantresourcecenter/pages/58/attachments/original/1380043053/roommate_agreement_form.pdf?1380043053" target="_blank" rel="noopener noreferrer">Roommate Agreement</a>
                                <br />
                                <a href="https://d3n8a8pro7vhmx.cloudfront.net/tenantresourcecenter/pages/211/attachments/original/1426623393/Sample_Letter_-_Breaking_Lease.docx?1426623393" target="_blank" rel="noopener noreferrer">Breaking a Lease</a>
                                <br />
                                <a href="http://d3n8a8pro7vhmx.cloudfront.net/tenantresourcecenter/pages/58/attachments/original/1380043053/roommate_agreement_form.pdf?1380043053" target="_blank" rel="noopener noreferrer">Roommate Agreement</a>
                                <br />
                                <a href="http://d3n8a8pro7vhmx.cloudfront.net/tenantresourcecenter/pages/58/attachments/original/1380043057/security_deposit_letter.pdf?1380043057" target="_blank" rel="noopener noreferrer">Wrongfully Withheld Security Deposit</a>
                                <br />
                                <a href="https://www.tenantresourcecenter.org/landlord_references" target="_blank" rel="noopener noreferrer">Reply to Eviction Notice Over Non-Payment of Rent</a>
                                <br />
                                <a href="https://d3n8a8pro7vhmx.cloudfront.net/tenantresourcecenter/pages/203/attachments/original/1423585024/Sample_Letter_-_Eviction_Notice_Breach.docx?1423585024">Reply to Eviction Notice Over Rules Violations</a>
                            </li>
                        </ul>
                        </div>
                        <div className="column is-one-half">
                        <h3 className="subtitle">Landlords</h3>
                        <ul>
                            <li>
                                <a href="https://realestate.findlaw.com/landlord-tenant-law/eviction.html" target="_blank" rel="noopener noreferrer">Eviction</a>
                                <br />
                                <a href="https://realestate.findlaw.com/landlord-tenant-law/landlord-rights.html" target="_blank" rel="noopener noreferrer">Landlord Rights</a>
                                <br />
                                <a href="https://realestate.findlaw.com/landlord-tenant-law/landlord-tenant-disputes.html" target="_blank" rel="noopener noreferrer">Landlord/Tenant Diputes</a>
                                <br />
                                <a href="https://realestate.findlaw.com/landlord-tenant-law/rent-security-deposits.html" target="_blank" rel="noopener noreferrer">Rent and Security Deposits</a>
                                <br />
                                <a href="https://realestate.findlaw.com/landlord-tenant-law/rental-lease-agreements.html" target="_blank" rel="noopener noreferrer">Rental and Lease Agreements</a>
                            </li>
                            </ul>
                        </div>
                    </div>
                </div>
                    </div>
                </div>
            </section>
            <br />
            {/* <section>
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

            </section> */}


        </div>
    );
};

export default ResourceComponent;
