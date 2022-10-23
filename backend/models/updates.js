const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const updateSchema = new Schema({
    title: { type: String, required: true },
    description: { type: String, required: true }
});
const Update = mongoose.model('Update', updateSchema);
module.exports = Update;