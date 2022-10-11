const mongoose = require('mongoose')
const Schema = mongoose.Schema
const simulationSoftwaresSchema = new Schema({
simulationSoftwaresTitle: { type: String, required: true },
simulationSoftwaresImage: {type: String, required: true }
}, {
timestamps: true,
})
const SimulationSoftwares = mongoose.model('SimulationSoftwares', simulationSoftwaresSchema)
module.exports = SimulationSoftwares
