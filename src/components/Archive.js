import React from 'react';
import './Archive.css'; // Assuming you have a corresponding CSS file

const Archive = ({ archivedArticles }) => {
    return (
        <div className="archive-container">
            <h2 className="archive-title">Archived Articles</h2>
            <ul className="archive-list">
                {archivedArticles.map((article, index) => (
                    <li key={article.id} className="archive-item">
                        <h3 className="archive-article-title">{article.title}</h3>
                        <p className="archive-article-summary">{article.summary}</p>
                        <span className="archive-article-date">{new Date(article.date).toLocaleDateString()}</span>
                        {/* Implement a click handler if needed */}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Archive;
