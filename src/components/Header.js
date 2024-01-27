import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
    // Placeholder state for the search functionality (implementation to be added later)
    // const [searchQuery, setSearchQuery] = useState('');

    return (
        <header className="header">
            <div className="logo">
                <h1>AI-Pocalypse Now</h1>
            </div>
            <nav>
                <Link to="/" className="nav-link">Home</Link>
                <div className="search-placeholder">Search</div> {/* Search placeholder */}
                <Link to="/archive" className="nav-link">Archive</Link>
            </nav>
        </header>
    );
}

export default Header;

