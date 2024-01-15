import React, { useEffect } from 'react';

function Header() {
    const handleScroll = () => {
        // Logic to highlight the active section in the navigation bar
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const scrollToSection = (sectionId) => {
        document.querySelector(sectionId).scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <header className="bg-blue-500 text-white text-center p-4">
            <h1>AI News Hub</h1>
            <nav>
                <a href="#news" className="hover:underline" onClick={() => scrollToSection('#news')}>News</a>
                <a href="#feedback" className="hover:underline ml-4" onClick={() => scrollToSection('#feedback')}>Feedback</a>
            </nav>
        </header>
    );
}

export default Header;
