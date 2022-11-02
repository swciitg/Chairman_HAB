const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const journalPublicationSchema = new Schema({
    journaltitle: { type: String, required: true }, // This is what will be shown on the Publications page
    journalname: { type: String, required: true },  // This is what will be the heading shown when you click on any Journal.
    journalBody: { type: String, required: true }
});
const JournalPublication = mongoose.model('journalPublication', journalPublicationSchema);
module.exports = JournalPublication;