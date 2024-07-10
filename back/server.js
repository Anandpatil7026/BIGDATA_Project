const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const books = require('./routes/books.js');

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());


mongoose.connect('mongodb://0.0.0.0:27017/booksdb', { useNewUrlParser: true, useUnifiedTopology: true }).then(() => console.log('Connected to MongoDB'))
.catch(err => console.error('Could not connect to MongoDB', err));

app.use('/api/books', books);

const PORT = 5000;
app.listen(PORT, () => console.log("Server running on port ${PORT}"));