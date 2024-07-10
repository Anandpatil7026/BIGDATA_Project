const express = require('express');
const router = express.Router();
const Book = require('../models/book.js');

// Get all books or search books
router.get('/', async (req, res) => {
    const { title, author, genre, rating } = req.query;
    const query = {};

    if (title) query.title = { $regex: title, $options: 'i' };
    if (author) query.author = { $regex: author, $options: 'i' };
    if (genre) query.genre = { $in: genre.split(',') };
    if (rating) query.rating = rating;

    const books = await Book.find(query);
    res.json(books);
});

// Add a new book
router.post('/', async (req, res) => {
    const newBook = new Book(req.body);
    await newBook.save();
    res.json(newBook);
});

// Delete a book by JSON data
router.delete('/', async (req, res) => {
    const { _id } = req.body;
    await Book.findByIdAndDelete(_id);
    res.json({ message: 'Book deleted' });
});

module.exports = router;