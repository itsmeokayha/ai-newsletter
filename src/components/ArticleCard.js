import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import './ArticleCard.css';

const ArticleCard = ({ article }) => {
  const [isExpanded, setExpanded] = useState(false);

  const toggleExpansion = () => {
    setExpanded(!isExpanded);
  };

  return (
    <div className={`article-card ${isExpanded ? 'expanded' : ''}`} onClick={toggleExpansion}>
      <img src={article.imageUrl} alt={article.title} className="article-image" />
      <div className="article-content">
        <h2>{article.title}</h2>
        {isExpanded && (
          <div>
            <ReactMarkdown>{article.body}</ReactMarkdown>
            {article.additionalImages.map((image, index) => (
              <img key={index} src={image} alt={`Additional ${index}`} className="additional-image" />
            ))}
          </div>
        )}
        {!isExpanded && <p>{article.summary}</p>}
      </div>
    </div>
  );
};

export default ArticleCard;


