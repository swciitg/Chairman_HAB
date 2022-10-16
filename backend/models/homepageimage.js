const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const homepageimageSchema = new Schema({
image: { data: Buffer, contentType: String },
}, {
timestamps: true,
});
const HomepageImage = mongoose.model('HomepageImage', homepageimageSchema);
module.exports = HomepageImage;