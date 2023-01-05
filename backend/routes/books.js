const express = require('express');
const router = express.Router();
const Book = require('../controller/books');

router.get('/', Book.getBook);

router.propfind('/:id', Book.findBook);

router.post('/', Book.postBook);

router.put('/:id', Book.editBook);

router.delete('/:id', Book.deleteBook);

module.exports = router;