
import React from 'react';
const ArticleCard = React.lazy(() => import('./ArticleCard'));

function MainContent() {
    // Example: Placeholder for dynamic article data
    const articles = [
        { title: 'Article 1', summary: 'Summary of Article 1', imageUrl: 'path/to/image1.jpg' },
        // ... additional articles ...
    ];

    // Example: Placeholder for image optimization
    const optimizedImageUrl = imageUrl => imageUrl.replace('/original/', '/optimized/');

    return (
        <main className="p-4">
            <React.Suspense fallback={<div>Loading...</div>}>
                {articles.map((article, index) => (
                    <ArticleCard
                        key={index}
                        title={article.title}
                        summary={article.summary}
                        imageUrl={optimizedImageUrl(article.imageUrl)}
                    />
                ))}
            </React.Suspense>
        </main>
    );
}

export default MainContent;
