// routes/articles.js
const express = require('express');
const router = express.Router();

// Mock database (Replace with real database logic)
let articles = [];

router.post('/', (req, res) => {
    const newArticle = req.body;
    articles.push(newArticle); // Save to database in a real scenario
    res.status(200).json({ message: 'New article added', article: newArticle });
});

module.exports = router;
