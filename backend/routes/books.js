const express = require('express');
const router = express.Router();
const Book = require('../controllers/books');

router.get('/books', Book.getBooks);

router.propfind('/books/:id', Book.findBook);

router.post('/books', Book.postBook);

router.put('/books/:id', Book.putBook);

router.delete('/books/:id', Book.deleteBook);

module.exports = router;