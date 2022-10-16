const mongoose = require('mongoose')
const Schema = mongoose.Schema
const simulationSoftwaresSchema = new Schema({
simulationSoftwaresTitle: { type: String, required: true },
simulationSoftwaresImage: { data: Buffer, contentType: String }
}, {
timestamps: true,
})
const SimulationSoftwares = mongoose.model('SimulationSoftwares', simulationSoftwaresSchema)
module.exports = SimulationSoftwares
