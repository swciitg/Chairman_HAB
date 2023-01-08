const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const memberSchema = new Schema({
  memberName: { type: String, required: true },
  designation: { type: String, required: true },
  imagePath: {type: String},
  researchInterest: { type: String, required: true },
  googleScholar: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  priority_number: { type: Number, required: true },
});
const Member = mongoose.model("member", memberSchema);
module.exports = Member;
