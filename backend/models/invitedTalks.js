const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const invitedTalkSchema = new Schema({
    invitedTalktitle: { type: String, required: true }, // This is what will be shown on the Publications page
    invitedTalkname: { type: String, required: true },  // This is what will be the heading shown when you click on any Conference Paper
    invitedTalkBody: { type: String, required: true }
});
const InvitedTalk = mongoose.model('invitedTalk', invitedTalkSchema);
module.exports = InvitedTalk;