const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
    title: String,
    author: String,
    genre: [String],
    rating: Number,
    img: String
});

module.exports = mongoose.model('Book', bookSchema);