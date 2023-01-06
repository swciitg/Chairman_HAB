const mongoose = require('mongoose')
const Schema = mongoose.Schema
const experimentalFacilitiesSchema = new Schema({
    experimentalFacilitiesTitle: { type: String, required: true },
    // experimentalFacilitiesImage: { data: Buffer, contentType: String }
    experimentalFacilitiesImage: { type: String },
    imagePath: {type: String}
})
const ExperimentalFacilities = mongoose.model('experimentalFacilities', experimentalFacilitiesSchema)
module.exports = ExperimentalFacilities
