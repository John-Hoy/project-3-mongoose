import React from "react"
import './navbar.css'

function NavBarComponent({ loggedIn, _logout }) {
    return (

        <nav className="navbar"  aria-label="main navigation">
            <div className="navbar-brand">
                

                    <a role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                    </a>
            </div>

                <div id="navbarBasicExample" className="navbar-menu">
                    <div className="navbar-start nav_root">
                        <a className="navbar-item">
                            Home
                        </a>

                        <a className="navbar-item">
                            Listings
                        </a>

                        <a className="navbar-item">
                            Contact
                         </a>

                         <a className="navbar-item">
                            Resources
                         </a>

                        <div className="navbar-item has-dropdown is-hoverable">
                            <a className="navbar-link">
                                Manage
                            </a>

                            <div className="navbar-dropdown">
                                <a className="navbar-item">
                                    Tenants
                                </a>
                                <a className="navbar-item">
                                    Properties
                                </a>
                                <a className="navbar-item">
                                    Contact
                                </a>
                                <hr className="navbar-divider" />
                                    <a className="navbar-item">
                                        Report an issue
                                    </a>
                             </div>
                        </div>
                        </div>

                        <div className="navbar-end">
                            <div className="navbar-item">
                                <div className="buttons">
                                    <a className="button is-primary">
                                        <strong>Sign up</strong>
                                    </a>
                                    <a className="button is-light">
                                        Log in
                                     </a>
                                </div>
                            </div>
                        </div>
                    </div>
        </nav>
    )
}
            
export const NavBar = React.memo(NavBarComponent);