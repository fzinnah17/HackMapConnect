import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav>
            <h1>Hack Map Connect</h1>
            <Link to="/">Home</Link>
            <Link to="/all-events">All Events</Link>
        </nav>
    );
};

export default Navbar;
