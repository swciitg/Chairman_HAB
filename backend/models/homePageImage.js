const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const homepageimageSchema = new Schema({
  image: { data: Buffer, contentType: String },
  imagePath: {type: String}
});
const HomepageImage = mongoose.model("HomepageImage", homepageimageSchema);
module.exports = HomepageImage;
