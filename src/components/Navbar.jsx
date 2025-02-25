import React from 'react';
import './Navbar.css';
import logo from '../assets/logo.png';

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="logo">
                <img
                    src={logo}
                    alt="logo"
                    style={{ width: '140px', height: '70px', left: 0, top: '40px' }}
                />
            </div>
            <ul className="nav-links">
                <li>Home</li>
                <li>Calendar</li>
                <li>News</li>
                <li>About Us</li>
                <li>Bare Act PDF</li>
                <li>Contact Us</li>
                <li>Account</li>
            </ul>
        </nav>
    );
};

export default Navbar;
