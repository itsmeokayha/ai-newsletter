// scripts/uploadArticles.js
const fetch = require('node-fetch');

const articleData = {
    title: "Exploring AI Innovations",
    summary: "A brief summary of recent advancements in AI and machine learning.",
    body: "The article delves into various groundbreaking AI technologies that are shaping the future...",
    imageUrl: "https://example.com/images/ai-innovations.jpg",
    references: ["https://source1.com", "https://source2.com"]
};

const uploadArticle = async () => {
    try {
        const response = await fetch('http://localhost:3001/articles', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(articleData),
        });

        const result = await response.json();
        console.log('Article uploaded:', result);
    } catch (error) {
        console.error('Error uploading article:', error);
    }
};

uploadArticle();
