import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
    return (
        <header className="header">
            <div className="logo">
                {/* 3D text effect for the title */}
                <h1 className="title-3d">AI-Pocalypse Now</h1>
            </div>
            <nav>
                <Link to="/" className="nav-link">Home</Link>
                <Link to="/archive" className="nav-link">Archive</Link>
                {/* Placeholder for future search feature */}
                <div className="search-placeholder">Search...</div>
            </nav>
        </header>
    );
}

export default Header;

