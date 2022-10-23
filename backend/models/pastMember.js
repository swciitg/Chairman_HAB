const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const pastMemberSchema = new Schema({
    pastMemberName: { type: String, required: true },
    qualificationOfStudent: {type: String, required: true },
    yearOfProjectCompletion: {type: String, required: true }
});
const PastMember = mongoose.model('PastMember', pastMemberSchema);
module.exports = PastMember;