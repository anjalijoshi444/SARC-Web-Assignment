import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => (
<nav className="navbar">
    <h1>Luxury Homes</h1>
    <ul className='nav-menu'>
    <li><Link to="/">Home</Link></li>
    <li><Link to="/about">About</Link></li>
    <li><Link to="/contact">Contact</Link></li>
    </ul>
</nav>
);

export default Navbar;
