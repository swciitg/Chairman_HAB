const mongoose = require('mongoose')
const Schema = mongoose.Schema
const experimentalFacilitiesSchema = new Schema({
    experimentalFacilitiesTitle: { type: String, required: true },
    experimentalFacilitiesImage: { data: Buffer, contentType: String }
})
const ExperimentalFacilities = mongoose.model('ExperimentalFacilities', experimentalFacilitiesSchema)
module.exports = ExperimentalFacilities