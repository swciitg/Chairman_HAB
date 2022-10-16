const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const profileSchema = new Schema({
proffessorName: { type: String, required: true },
proffesorimage: { data: Buffer, contentType: String },
proffessorDesignation: {type: String, required: true },
proffessorDepartment: {type: String, required: true },
instituteName: {type: String, required: true },
address: {type: String, required: true },
labPhone: {type: String, required: true },
officePhone: {type: String, required: true },
labEmail: {type: String, required: true },
personalEnail: {type: String, required: true },
OrcidID: {type: String, required: true },
ReasearchID: {type: String, required: true },
scopusAuthorID: {type: String, required: true },
googleScholarID: {type: String, required: true }
}, {
timestamps: true,
});
const ProfileMember = mongoose.model('ProfileMember', ProfileSchema);
module.exports = Profile;