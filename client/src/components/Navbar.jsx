import React from 'react';
import { Link } from 'react-router-dom';
import "../css/Navbar.css"

const Navbar = () => {
    return (
        <nav className="nav-container bg-light">
            <Link className="brand" to="/">Hack Map Connect</Link>
            <div className="collapse" id="navLinks">
                <ul className="nav-list">
                    <li className="nav-item">
                        <Link className="nav-link" to="/all-events">All Events</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
