import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Archive.css';

function Archive() {
    const [issues, setIssues] = useState([]);

    useEffect(() => {
        fetch('/articles.json')
            .then(response => response.json())
            .then(data => {
                setIssues(data);
            })
            .catch(error => console.error('Error loading issues:', error));
    }, []);

    return (
        <div className="archive-container">
            <h2 className="archive-title">Issue Archive</h2>
            <div className="issues-column">
                {issues.map((issue, index) => (
                    <Link to={`/archive/${issue.issue}`} key={index} className="archive-item-link">
                        <div className="archive-item">
                            <h3 className="archive-issue-title">Issue: {issue.issue}</h3>
                            {/* Display date if available */}
                            {/* <p className="archive-issue-date">Date: {issue.date}</p> */}
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}

export default Archive;
