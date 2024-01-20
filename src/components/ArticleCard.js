import React, { useState } from 'react';
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
            <p>{article.body}</p>
            {article.additionalImages.map((image, index) => (
              <img key={index} src={image} alt={`Additional ${index}`} className="additional-image" />
            ))}
            {/* Include other additional content as needed */}
          </div>
        )}
        {!isExpanded && <p>{article.summary}</p>}
      </div>
    </div>
  );
};

export default ArticleCard;

