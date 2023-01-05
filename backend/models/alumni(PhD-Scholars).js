const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const alumniSchema = new Schema({
  alunmniName: { type: String, required: true },
  designation: { type: String, required: true },
  profileImage: { data: Buffer, contentType: String },
  yearOfCompletion: { type: String, required: true },
  nameOfInstitution: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
});
const Alumni = mongoose.model("alumni", alumniSchema);
module.exports = Alumni;
