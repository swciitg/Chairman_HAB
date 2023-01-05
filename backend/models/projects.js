const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const projectSchema = new Schema({
    serialNumber: { type: String, required: true },
    projectTitle: { type: String, required: true },
    fundingAgencyName: {type: String, required: true},
    duration: {type: String, required: true},
    investigators: {type: String, required: true}
});
const Project = mongoose.model('project', projectSchema);
module.exports = Project;