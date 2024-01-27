import React, { useState, useEffect } from 'react';
import ArticleCard from './ArticleCard';
import './MainContent.css';

function MainContent() {
    const [articles, setArticles] = useState([]);
    const [archivedArticles, setArchivedArticles] = useState([]);
    const [expandedArticleId, setExpandedArticleId] = useState(null);

    useEffect(() => {
        fetch('/articles.json')
            .then(response => response.json())
            .then(data => {
                const currentArticles = [];
                const archive = [];

                const archiveThreshold = 14; // days, adjust as needed

                const currentDate = new Date();
                data.forEach(article => {
                    const articleDate = new Date(article.date);
                    const timeDiff = currentDate - articleDate;
                    const daysSincePublished = timeDiff / (1000 * 3600 * 24);

                    if (daysSincePublished > archiveThreshold) {
                        archive.push(article);
                    } else {
                        currentArticles.push(article);
                    }
                });

                setArticles(currentArticles);
                setArchivedArticles(archive); // Keep this to manage archived articles
            })
            .catch(error => console.error('Error loading articles:', error));
    }, []);

    const handleArticleClick = (articleId) => {
        setExpandedArticleId(expandedArticleId === articleId ? null : articleId);
    };

    return (
        <div className="main-content">
            {articles.map(article => (
                <ArticleCard
                    key={article.id}
                    article={article}
                    onArticleClick={() => handleArticleClick(article.id)}
                    isExpanded={expandedArticleId === article.id}
                />
            ))}
            {/* Removed the Archive component rendering */}
        </div>
    );
}

export default MainContent;
