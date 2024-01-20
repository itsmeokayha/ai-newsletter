import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import Switch from '@mui/material/Switch'; // Material-UI Switch for a modern toggle

function Header() {
    const [nightMode, setNightMode] = useState(false);

    return (
        <header className={`header ${nightMode ? 'night-mode' : ''}`}>
            <div className="logo">
                <h1>Fin-Tech News</h1>
            </div>
            <nav>
                <Link to="/" className="nav-link">Home</Link>
                <Link to="/archive" className="nav-link">Archive</Link>
                {/* Additional links can be added here */}
            </nav>
            <div className="mode-switch">
                <Switch
                    checked={nightMode}
                    onChange={() => setNightMode(!nightMode)}
                    color="default"
                />
                <span>{nightMode ? 'Night Mode' : 'Day Mode'}</span>
            </div>
        </header>
    );
}

export default Header;

