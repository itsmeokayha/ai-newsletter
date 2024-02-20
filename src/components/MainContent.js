import React, { useState, useEffect } from 'react';
import ArticleCard from './ArticleCard';
import './MainContent.css';

function MainContent() {
    const [articles, setArticles] = useState([]);
    const [isLoading, setIsLoading] = useState(true); // Added loading state
    const [expandedArticleId, setExpandedArticleId] = useState(null);

    useEffect(() => {
        fetch('/articles.json')
            .then(response => response.json())
            .then(data => {
                console.log("Data fetched successfully:", data); // Debugging: Log fetched data
                const sortedIssues = data.sort((a, b) => new Date(b.issue) - new Date(a.issue));
                const latestIssue = sortedIssues[0];
                if (latestIssue && latestIssue.articles) {
                    setArticles(latestIssue.articles);
                } else {
                    console.warn("No articles found in the latest issue."); // Debugging: Warn if no articles
                }
                setIsLoading(false); // Update loading state
            })
            .catch(error => {
                console.error('Error loading articles:', error);
                setIsLoading(false); // Update loading state even on error
            });
    }, []);

    const handleArticleClick = (articleId, event) => {
        event.stopPropagation(); // Prevent event propagation
        setExpandedArticleId(expandedArticleId === articleId ? null : articleId);
    };

    if (isLoading) {
        return <div className="main-content">Loading articles...</div>; // Display loading message
    }

    if (articles.length === 0) {
        return <div className="main-content">No articles found.</div>; // Display if no articles are loaded
    }

    return (
        <div className="main-content">
            {articles.map(article => (
                <ArticleCard
                    key={article.id}
                    article={article}
                    onArticleClick={(event) => handleArticleClick(article.id, event)} // Pass event to handler
                    isExpanded={expandedArticleId === article.id}
                />
            ))}
        </div>
    );
}

export default MainContent;
