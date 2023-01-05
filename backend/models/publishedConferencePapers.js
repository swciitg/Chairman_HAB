const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const publishedConferencePaperSchema = new Schema({
    conferencePapertitle: { type: String, required: true }, // This is what will be shown on the Publications page
    conferencePapername: { type: String, required: true },  // This is what will be the heading shown when you click on any Conference Paper
    conferencePaperBody: { type: String, required: true }
});
const PublishedConferencePaper = mongoose.model('publishedConferencePaper', publishedConferencePaperSchema);
module.exports = PublishedConferencePaper;