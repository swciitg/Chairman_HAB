const mongoose = require('mongoose')
const Schema = mongoose.Schema
const simulationSoftwaresSchema = new Schema({
    simulationSoftwaresTitle: { type: String, required: true },
    simulationSoftwaresImage: { data: Buffer, contentType: String }
})
const SimulationSoftwares = mongoose.model('simulationSoftwares', simulationSoftwaresSchema)
module.exports = SimulationSoftwares
