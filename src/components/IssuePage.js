import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
//import ArticleCard from './ArticleCard'; // If you still want to use the styling from ArticleCard

function IssuePage() {
  const { issueId } = useParams();
  const [issueContent, setIssueContent] = useState(null);

  useEffect(() => {
    fetch('/articles.json') // Adjust the path as needed
      .then(response => response.json())
      .then(issues => {
        // Find the issue that matches the issueId from the URL
        const matchedIssue = issues.find(issue => issue.issue === issueId);
        setIssueContent(matchedIssue);
      })
      .catch(error => console.error('Error loading issue:', error));
  }, [issueId]); // Dependency array to fetch when issueId changes

  if (!issueContent) {
    return <div>Loading issue content...</div>;
  }

  return (
    <div>
      <h2>Issue Date: {issueContent.issue}</h2>
      {issueContent.articles.map((article, index) => (
        // Directly render the content without needing to expand
        <div className={`article-card expanded`} key={index}>
          <img src={article.imageUrl} alt={article.title} className="article-image" />
          <div className="article-content">
            <ReactMarkdown rehypePlugins={[rehypeRaw]}>{article.title}</ReactMarkdown>
            <ReactMarkdown rehypePlugins={[rehypeRaw]}>{article.body}</ReactMarkdown>
            {article.additionalImages.map((image, i) => (
              <img key={i} src={image} alt={`Additional ${i}`} className="additional-image" />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default IssuePage;
