const mongoose = require('mongoose');

const hazardsSchema = new mongoose.Schema({
    latitude: {type: Number, required: true},
    longitude: {type: Number, required: true},
    cameraId: {type: String, required: true},
    image: {type: String, required: true},
    status: {type: String},
    time: {type: Date, default: Date.now}
});

const Hazards = mongoose.model('Hazards', hazardsSchema);

module.exports = Hazards;
