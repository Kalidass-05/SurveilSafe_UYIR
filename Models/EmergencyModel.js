const mongoose = require('mongoose');

const emergencySchema = new mongoose.Schema({
    latitude: {type: Number, required: true},
    longitude: {type: Number, required: true},
    cameraId: {type: String, required: true},
    impact: {type: String, required: true},
    image: {type: String, required: true},
    status: {type: String},
    time: {type: Date, default: Date.now}
});

const Emergency = mongoose.model('Emergency', emergencySchema);

module.exports = Emergency;
