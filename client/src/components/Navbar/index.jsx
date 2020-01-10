import React from "react"
import { Link } from 'react-router-dom'
import './navbar.css'

function NavBarComponent({ loggedIn, _logout }) {
    return (
        <nav className="">
            {loggedIn ?
                <ul className="nav_root">
                    <li className="nav-item">
                        <Link to="/" className="nav-link">
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link to="/Listings" className="nav-link">
                            Building listings
                        </Link>
                    </li>
                    <li>
                        <Link to="#" className="nav-link" onClick={_logout}>
                            Logout
                        </Link>
                    </li>
                </ul>
                :
                <ul className="nav_root">
                    <li className="nav-item">
                        <Link to="/" className="nav-link">
                            Home
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/listing" className="nav-link">
                            Building listings
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/Blacklist" className="nav-link">
                            Black list
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/ManageTenants" className="nav-link">
                            Manage Tenants
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/signup" className="nav-link">
                            Sign up
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/login" className="nav-link">
                            Log in
                        </Link>
                    </li>
                </ul>
            }
        </nav>
    )
}

export const NavBar = React.memo(NavBarComponent);