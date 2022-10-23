const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const collaboratorSchema = new Schema({
    collaboratorName: { type: String, required: true },
    designation: {type: String, required: true },
    universityName: {type: String, required: true },
    countryName: {type: String, required: true }
});
const Collaborator = mongoose.model('Collaborator', collaboratorSchema);
module.exports = Collaborator;