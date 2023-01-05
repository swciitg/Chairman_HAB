const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bookSchema = new Schema({
    booktitle: { type: String, required: true }, // This is what will be shown on the Publications page
    bookname: { type: String, required: true },  // This is what will be the heading shown when you click on any Conference Paper
    bookBody: { type: String, required: true },
});
const Book = mongoose.model('book', bookSchema);
module.exports = Book;