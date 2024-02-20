import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import { marked } from 'marked';
import './ArticleCard.css';

const ArticleCard = ({ article }) => {
  const [isExpanded, setExpanded] = useState(false);

  const renderArticleBody = (body) => {
    const renderer = new marked.Renderer();

    // Custom rendering of video placeholders
    body = body.replace(/\{video_(\d+)\}/g, (match, n) => {
      const videoIndex = parseInt(n, 10) - 1; // Adjust index because array is zero-based
      const videoUrl = article.videoUrls[videoIndex];
      if (videoUrl) {
        // Return a div with the 'video-iframe' class wrapping the iframe
        return `<div class="video-iframe"><iframe src="${videoUrl}" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>`;
      }
      return ''; // If no video URL, remove the placeholder
    });

    const rawMarkup = marked(body, { renderer: renderer });
    return { __html: rawMarkup };
  };

  const toggleExpansion = () => {
    setExpanded(!isExpanded);
  };

  return (
    <div className={`article-card ${isExpanded ? 'expanded' : ''}`} onClick={toggleExpansion}>
      <img src={article.imageUrl} alt={article.title} className="article-image" />
      <div className="article-content">
        <ReactMarkdown rehypePlugins={[rehypeRaw]}>{article.title}</ReactMarkdown>
        {isExpanded ? (
          <div>
            <ReactMarkdown rehypePlugins={[rehypeRaw]}>{article.summary}</ReactMarkdown>
            <div dangerouslySetInnerHTML={renderArticleBody(article.body)} />
            {article.additionalImages.map((image, index) => (
              <img key={index} src={image} alt={`Additional ${index}`} className="additional-image" />
            ))}
            <button className="close-button" onClick={(e) => {
              e.stopPropagation();
              setExpanded(false);
            }}>Close Article</button>
          </div>
        ) : (
          <ReactMarkdown rehypePlugins={[rehypeRaw]}>{article.summary}</ReactMarkdown>
        )}
      </div>
    </div>
  );
};

export default ArticleCard;
