    const mongoose = require('mongoose');
    const Schema = mongoose.Schema;
    const memberSchema = new Schema({
    memberName: { type: String, required: true },
    designation: {type: String, required: true },
    profileImage: { data: Buffer, contentType: String },
    researchInterest: {type: String, required: true },
    googleScholar: {type: String, required: true },
    email: {type: String, required: true },
    phone: {type: String, required: true },
    }, {
    timestamps: true,
    });
    const Member = mongoose.model('Member', memberSchema);
    module.exports = Member;