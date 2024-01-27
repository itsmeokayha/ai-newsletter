import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import './ArticleCard.css';

const ArticleCard = ({ article }) => {
  const [isExpanded, setExpanded] = useState(false);

  const toggleExpansion = () => {
    if (!isExpanded) {
      setExpanded(true);
    }
  };

  const closeArticle = () => {
    setExpanded(false);
  };

  return (
    <div className={`article-card ${isExpanded ? 'expanded' : ''}`} onClick={toggleExpansion}>
      <img src={article.imageUrl} alt={article.title} className="article-image" />
      <div className="article-content">
        <ReactMarkdown rehypePlugins={[rehypeRaw]}>{article.title}</ReactMarkdown>
        {isExpanded ? (
          <div>
            <ReactMarkdown rehypePlugins={[rehypeRaw]}>{article.body}</ReactMarkdown>
            {article.additionalImages.map((image, index) => (
              <img key={index} src={image} alt={`Additional ${index}`} className="additional-image" />
            ))}
            <button className="close-button" onClick={closeArticle}>Close Article</button>
          </div>
        ) : (
          <ReactMarkdown rehypePlugins={[rehypeRaw]}>{article.summary}</ReactMarkdown>
        )}
      </div>
    </div>
  );
};

export default ArticleCard;




