const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const keyResearchAreaSchema = new Schema({
keyResearchAreaTitle: { type: String, required: true },
keyResearchAreaDescription: {type: String, required: true },
keyResearchAreaImage: { data: Buffer, contentType: String }
}, {
timestamps: true,
});
const KeyResearchArea = mongoose.model('KeyResearchArea', keyResearchAreaSchema);
module.exports = KeyResearchArea;