const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const miscellaneousPosterSchema = new Schema({
    miscellaneousPostertitle: { type: String, required: true }, // This is what will be shown on the Publications page
    miscelaneousPostername: { type: String, required: true },  // This is what will be the heading shown when you click on any Conference Paper
    miscellaneousPoterBody: { type: String, required: true },
});
const MiscellaneousPoster = mongoose.model('miscellaneousPoster', miscellaneousPosterSchema);
module.exports = MiscellaneousPoster;