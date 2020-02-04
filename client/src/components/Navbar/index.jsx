import React from "react"
import './navbar.css'

function NavBarComponent({ loggedIn, _logout }) {
    return (

        <nav className="navbar" aria-label="main navigation">
             <div className="navbar-brand">



                
                    <a role="button" href="/" className="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">

                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                    </a>
            </div>
                

                
            
            <div id="navbarBasicExample" className="navbar-menu">
                <div className="navbar-start nav_root">
                    <a className="navbar-item" href="/">
                        Home
                        </a>

                    <a className="navbar-item" href="listing">
                        Listings
                        </a>

                    <a className="navbar-item" href="/Contact">
                        Contact
                         </a>

                    <a className="navbar-item" href="/Resources">
                        Resources
                         </a>


                         
                    <div className="navbar-item has-dropdown is-hoverable">
                        <div className="navbar-link navbar-drop">

                            Manage
                            </a>

                            <div className="navbar-dropdown">
                            <a className="navbar-item" href="/ManageTenants">
                                Tenants
                            </a>
                            <a className="navbar-item" href="/Properties">
                                Properties
                            </a>
                            
                            <hr className="navbar-divider" />
                            <a className="navbar-item" href="/Issues">
                                Report an issue
                            </a>
                            </div>
                        </div>

                    <div className="navbar-end">
                        <div className="navbar-item">
                            <div className="buttons">
                                <a className="button" href="/signup">
                                    Sign up
                                </a>
                                <a className="button is-light" href="/login">
                                    Log in
                                     </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export const NavBar = React.memo(NavBarComponent);