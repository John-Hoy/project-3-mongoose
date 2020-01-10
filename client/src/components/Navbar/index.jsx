import React from "react"
import { Link } from 'react-router-dom'
import './navbar.css'
import Anime from 'react-anime'

// anime({
//     targets: 'li',
//     translateX: 250,
//     rotate: '1turn',
//     backgroundColor: '#FFF',
//     duration: 800
//   });
//? adding animations with the above code testing out anime.js for the animation on our navbar

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
                        <Link to="/Listings" className="nav-link">
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
                </ul>
            }
        </nav>
    )
}

export const NavBar = React.memo(NavBarComponent);