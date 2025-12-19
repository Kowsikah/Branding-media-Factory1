// Header.jsx

import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaPhone, FaEnvelope, FaBars } from 'react-icons/fa';
// Import the logo image. Replace 'path/to/your/logo.png' with the actual path.
// If your logo is a local file (e.g., in src/assets), you must import it.
// Example: import LogoImage from './assets/bms-logo.png';
// For this example, I'll use a placeholder 'logo-placeholder.png'.
import LogoImage from './logo.jpg'; // *** UPDATE THIS PATH ***

const headerStyles = `
/* General Reset/Base Styles */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Arial', sans-serif;
}

/* Header Container */
.main-header {
    width: 100%;
    position: sticky;
    top: 0;
    z-index: 1000;
}

/* --- Top Bar Styles --- */
.top-bar {
    background-color: black;
    color: white;
    padding: 8px 0;
}

.top-bar-content {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
    display: flex;
    gap: 20px;
    font-size: 0.85rem;
}

.contact-info {
    color: white;
    text-decoration: none;
    display: flex;
    align-items: center;
    transition: color 0.3s;
}

.contact-info:hover {
    color: #999999;
}

.contact-info .icon {
    margin-right: 5px;
    color: white;
}

/* --- Main Navbar Styles --- */
.navbar-container {
    background: rgba(0, 0, 0, 0.4);
}

.navbar-content {
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 20px; /* Adjusted padding slightly for image */
    color: white;
}

/* New Logo Container Styling */
.logo-container {
    text-decoration: none;
    display: flex;
    align-items: center; /* Vertically align items */
    gap: 10px; /* Space between logo image and text */
}

/* Logo Image Styling */
.logo-img {
    height: 40px; /* Set a fixed height for the logo image */
    width: auto;
}

/* New Branding Text Styling */
.logo-branding {
    display: flex;
    flex-direction: column;
    line-height: 1.1;
    color: white;
}

.logo-text {
    font-size: 1.5rem; /* Adjusted font size */
    font-weight: bold;
    text-transform: uppercase;
}

.red-text {
    color: Springgreen;
}

.logo-tagline {
    font-size: 0.7rem;
    letter-spacing: 2px;
    text-transform: uppercase;
    opacity: 0.8;
}


/* Desktop Navigation Links */
.desktop-nav {
    list-style: none;
    display: flex;
    gap: 30px;
}

.desktop-nav a {
    color: white;
    text-decoration: none;
    font-weight: bold;
    font-size: 1rem;
    padding: 5px 0;
    transition: color 0.3s, border-bottom 0.3s;
}

.desktop-nav a:hover,
.desktop-nav a.active {
    color: Springgreen;
    border-bottom: 2px solid Springgreeen;
}


/* Hamburger Button */
.hamburger {
    background: none;
    border: none;
    color: white;
    font-size: 1.5rem;
    cursor: pointer;
    display: none;
    padding: 5px;
    transition: color 0.3s;
}

.hamburger:hover {
    color: springgreen;
}

/* Mobile Menu (Hidden by default) */
.mobile-menu {
    position: absolute;
    width: 100%;
    background: rgba(0, 0, 0, 0.95);
    max-height: 0;
    overflow: hidden;
    transition: max-height 0.3s ease-in-out;
    display: flex;
    flex-direction: column;
    border-top: 2px solid springgreen;
}

/* Mobile Menu Open State */
.mobile-menu.open {
    max-height: 300px; 
    padding: 10px 0;
}

.mobile-menu a {
    color: white;
    text-decoration: none;
    padding: 15px 20px;
    font-size: 1.1rem;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    transition: background-color 0.3s;
}

.mobile-menu a:hover {
    background-color: rgba(255, 255, 255, 0.1);
}

/* --- Media Query for Mobile View --- */
@media (max-width: 768px) {
    .desktop-nav {
        display: none;
    }
    .hamburger {
        display: block;
    }
    .top-bar-content {
        flex-direction: column;
        align-items: flex-start;
        gap: 5px;
        padding-left: 20px;
    }
    /* Adjust logo and branding for mobile if needed */
    .logo-img {
        height: 30px; 
    }
    .logo-text {
        font-size: 1.2rem;
    }
    .logo-tagline {
        font-size: 0.6rem;
    }
}
`;

const navLinks = [
    { name: 'HOME', path: '/' },
    { name: 'ABOUT US', path: '/about' },
    { name: 'SERVICES', path: '/services' },
    { name: 'WORK', path: '/work' },
    { name: 'CONTACT US', path: '/contact' },
];

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const location = useLocation(); 

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className="main-header">
            <style>{headerStyles}</style> {/* Inject Styles */}

            <div className="top-bar">
                <div className="top-bar-content">
                    <a href="tel:+91 73737 55589" className="contact-info"><FaPhone className="icon" /> +91 73737 55589</a>
                    <a href="mailto: brandingmediafactory@gmail.com" className="contact-info"><FaEnvelope className="icon" /> brandingmediafactory@gmail.com</a>
                </div>
            </div>

            <nav className="navbar-container">
                <div className="navbar-content">
                    {/* *** MODIFIED LOGO SECTION *** */}
                    <Link to="/" className="logo-container">
                        <img src={LogoImage} alt="Branding Media Factory Logo" className="logo-img" />
                        <div className="logo-branding">
                            <span className="logo-text">Branding Media <span className="red-text">Factory</span></span>
                           
                        </div>
                    </Link>
                    {/* *** END MODIFIED LOGO SECTION *** */}

                    <ul className="nav-links desktop-nav">
                        {navLinks.map((link) => (
                            <li key={link.name}>
                                <Link 
                                    to={link.path}
                                    className={location.pathname === link.path ? 'active' : ''}
                                >
                                    {link.name}
                                </Link>
                            </li>
                        ))}
                    </ul>

                    <button className="hamburger" onClick={toggleMenu} aria-label="Toggle navigation menu">
                        <FaBars />
                    </button>
                </div>
            </nav>

            <div className={`mobile-menu ${isMenuOpen ? 'open' : ''}`}>
                {navLinks.map((link) => (
                    <Link key={link.name} to={link.path} onClick={toggleMenu} >
                        {link.name}
                    </Link>
                ))}
            </div>
        </header>
    );
};

export default Header;