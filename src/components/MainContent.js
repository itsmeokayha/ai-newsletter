// MainContent.js
import React, { useState } from 'react';
import ArticleCard from './ArticleCard';
import ParticlesBackground from './ParticlesBackground';
import './MainContent.css';


function MainContent() {
    const [expandedArticleId, setExpandedArticleId] = useState(null);

    const particlesOptions = {
        particles: {
            number: {
                value: 10
            },
            size: {
                value: 3
            }
        }
    };

    const articles = [
        { id: 1, title: 'Article 1', summary: 'Summary of Article 1', imageUrl: 'images/jan-26/art1.png', body: 'Full body of Article 1', additionalImages: ['images/jan-26/more1.png', 'images/jan-26/more2.png'] },
        { id: 2, title: 'Article 2', summary: 'Summary of Article 2', imageUrl: 'images/jan-26/art2.png', body: 'Full body of Article 2', additionalImages: ['images/jan-26/more1.png', 'images/jan-26/more2.png'] },
        { id: 3, title: 'Article 3', summary: 'Summary of Article 3', imageUrl: 'images/jan-26/art3.png', body: 'Full body of Article 3', additionalImages: ['images/jan-26/more1.png', 'images/jan-26/more2.png'] }
    ];

    const handleArticleClick = (articleId) => {
            setExpandedArticleId(expandedArticleId === articleId ? null : articleId);
        };

        return (
            <div className="main-content">
                <ParticlesBackground />
                {articles.map(article => (
                    <ArticleCard
                        key={article.id}
                        article={article}
                        onArticleClick={() => handleArticleClick(article.id)}
                        isExpanded={expandedArticleId === article.id}
                    />
                ))}
            </div>
        );
    }

    export default MainContent;
