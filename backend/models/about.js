const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const aboutSchema = new Schema({
    description: { 
        type: String,
        required: true
     }
});
const About = mongoose.model('about', aboutSchema);
module.exports = About;