const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const keyResearchAreaSchema = new Schema({
    keyResearchAreaTitle: { type: String, required: true },
    keyResearchAreaDescription: {type: String, required: true },
    keyResearchAreaImage : {type: String},
    priority_number: {type: Number},
    imagePath: {type: String}
});
const KeyResearchArea = mongoose.model(
  "keyResearchArea",
  keyResearchAreaSchema
);
module.exports = KeyResearchArea;
